import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';
import { take, filter, takeUntil } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { withDestroy } from '@mixins/with-destroy.mixin';
import { UsersSelectors } from '@store/users/selectors';
import { UserCreateProgress } from '@b1-types/users/user-create-progress.type';
import { UserRolesFormComponent } from '../user-roles-form/user-roles-form.component';
import { UserRolesForm } from '@models/users/user-roles-form.model';
import { UserNameFormComponent } from '../user-name-form/user-name-form.component';
import { UserNameForm } from '@models/users/user-name-form.model';
import { UsersActions } from '@store/users/actions';
import { FoundUser } from '@models/users/found-user.model';

@Component({
  selector: 'app-user-create-modal',
  templateUrl: './user-create-modal.component.html',
  styleUrls: ['./user-create-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCreateModalComponent extends withDestroy() implements OnInit {
  isLoading$: Observable<boolean> = this.store.select(
    UsersSelectors.isLoadingUserCreate
  );
  progress$: Observable<UserCreateProgress> = this.store.select(
    UsersSelectors.progress
  );
  foundUser$: Observable<FoundUser | null> = this.store.select(
    UsersSelectors.foundUser
  );
  foundUserId: string | null = null;
  userRolesForm!: UserRolesForm;
  userNameForm!: UserNameForm;

  @ViewChild('rolesFormRef') rolesFormRef!: UserRolesFormComponent;
  @ViewChild('nameFormRef') nameFormRef!: UserNameFormComponent;

  constructor(private store: Store, private activeModal: NgbActiveModal) {
    super();
  }

  ngOnInit(): void {
    this.store.dispatch(UsersActions.resetUserCreation());
    this.foundUser$
      .pipe(
        takeUntil(this.destroy$),
        filter((user: FoundUser | null) => !!user),
        take(1)
      )
      .subscribe((user) => {
        const { id, firstName, lastName, patronymic } = user!;
        this.foundUserId = id;
        this.userNameForm = { firstName, lastName, patronymic };
      });
  }
  onUserSignIn(): void {
    console.log('roles form is valid: ', this.rolesFormRef.submitForm());
    console.log('roles form value: ', this.userRolesForm);
    if (this.rolesFormRef.submitForm() && this.userRolesForm) {
      this.store.dispatch(UsersActions.signInUserRequest(this.userRolesForm));
    }
  }

  onUserCreate(): void {
    console.log('name form is valid: ', this.nameFormRef.submitForm());
    console.log('name form value: ', this.userNameForm);
    if (this.userNameForm) {
      if (this.foundUserId) {
        this.store.dispatch(
          UsersActions.restoreUserRequest({
            userId: this.foundUserId,
            roles: this.userRolesForm.roles,
          })
        );
      } else {
        this.store.dispatch(
          UsersActions.createUserRequest({
            ...this.userRolesForm,
            ...this.userNameForm,
          })
        );
      }
      this.activeModal.close();
    }
  }
}
