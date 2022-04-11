import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { BaseFormComponent } from '@forms/base-form.component';
import { UsersSelectors } from '@store/users/selectors';
import { UsersActions } from '@store/users/actions';
import { UserNameForm } from '@modules/users/models/user-name-form.model';
import { ModelControl } from '@b1-types/model-controls.type';
import { FoundUser } from '@models/users/found-user.model';

const { required, maxLength } = Validators;
const NAME_MAX_LENGTH = 256;

@Component({
  selector: 'app-user-edit-name-form',
  templateUrl: './user-edit-name-form.component.html',
  styleUrls: ['./user-edit-name-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserEditNameFormComponent
  extends BaseFormComponent
  implements OnInit
{
  form!: FormGroup;
  isLoading$: Observable<boolean> = this.store.select(
    UsersSelectors.isLoadingNameEdit
  );
  foundUser$: Observable<FoundUser | null> = this.store.select(
    UsersSelectors.foundUser
  );
  foundUserId: string | null = null;
  errorMessage = '';
  lastNameControl = new FormControl('', [required, maxLength(NAME_MAX_LENGTH)]);
  firstNameControl = new FormControl('', [
    required,
    maxLength(NAME_MAX_LENGTH),
  ]);
  secondNameControl = new FormControl('', [
    required,
    maxLength(NAME_MAX_LENGTH),
  ]);

  constructor(
    store: Store,
    changeDetectorRef: ChangeDetectorRef,
    private activeModal: NgbActiveModal
  ) {
    super(store, changeDetectorRef);
  }

  ngOnInit(): void {
    this.initForm();
    this.foundUser$
      .pipe(
        take(1),
        filter((user: FoundUser | null) => !!user)
      )
      .subscribe((user) => {
        this.foundUserId = user!.id;
        this.fillInForm(user!);
      });
  }

  onSubmit(): void {
    const { lastName, firstName, patronymic } = this.form.value as UserNameForm;
    const userNameData = { lastName, firstName, patronymic };
    if (this.foundUserId) {
      this.store.dispatch(UsersActions.restoreUserRequest(this.foundUserId));
    } else {
      this.store.dispatch(UsersActions.createUserRequest(userNameData));
    }
    this.activeModal.close();
  }

  private initForm(): void {
    const controls: ModelControl<UserNameForm> = {
      lastName: this.lastNameControl,
      firstName: this.firstNameControl,
      patronymic: this.secondNameControl,
    };
    this.form = new FormGroup(controls);
  }

  private fillInForm(user: FoundUser): void {
    this.form.patchValue({
      lastName: user.lastName,
      firstName: user.firstName,
      patronymic: user.patronymic,
    });
    this.form.disable();
  }
}
