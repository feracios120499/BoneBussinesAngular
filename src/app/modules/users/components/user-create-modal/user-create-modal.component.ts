import { Component, ChangeDetectionStrategy, ViewChild, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { take, filter, takeUntil } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { FoundUser } from '@modules/users/models/found-user.model';
import { UsersSelectors } from '@modules/users/store/selectors';
import { UserCreateProgress } from '@b1-types/users/user-create-progress.type';
import { UserRolesForm } from '@modules/users/models/user-roles-form.model';
import { UserNameForm } from '@modules/users/models/user-name-form.model';
import { UserRolesFormComponent } from '../user-roles-form/user-roles-form.component';
import { UserNameFormComponent } from '../user-name-form/user-name-form.component';
import { UsersActions } from '@modules/users/store/actions';
import { BaseB1ModalComponent } from '@modals/base-b1-modal.component';
import { UserCreateModalConfig } from '@modules/users/models/user-create-modal-config.model';
import { UserCreateModalResult } from '@modules/users/models/user-create-modal-result.model';

@Component({
  selector: 'app-user-create-modal',
  templateUrl: './user-create-modal.component.html',
  styleUrls: ['./user-create-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCreateModalComponent extends BaseB1ModalComponent<UserCreateModalResult> implements OnInit {
  @Input() config!: UserCreateModalConfig;

  result!: UserCreateModalResult;
  isLoading$: Observable<boolean> = this.store.select(UsersSelectors.isLoadingUserCreate);
  progress$: Observable<UserCreateProgress> = this.store.select(UsersSelectors.progress);
  foundUser$: Observable<FoundUser | null> = this.store.select(UsersSelectors.foundUser);
  foundUserId: string | null = null;
  userRolesForm!: UserRolesForm;
  userNameForm!: UserNameForm;

  @ViewChild('rolesFormRef') rolesFormRef!: UserRolesFormComponent;
  @ViewChild('nameFormRef') nameFormRef!: UserNameFormComponent;

  constructor(private store: Store) {
    super();
  }

  ngOnInit(): void {
    super.ngOnInit();
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
    if (this.rolesFormRef.submitForm() && this.userRolesForm) {
      this.store.dispatch(UsersActions.signInUserRequest(this.userRolesForm));
    }
  }

  onUserCreate(): void {
    if (this.foundUserId) {
      this.result = {
        userId: this.foundUserId,
        roles: this.userRolesForm.roles,
      };
      this.ok();
    } else if (this.nameFormRef.submitForm() && this.userNameForm) {
      this.result = {
        ...this.userRolesForm,
        ...this.userNameForm,
      };
      this.ok();
    }
  }
}
