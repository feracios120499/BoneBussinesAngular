import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  OnInit,
  Input,
} from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { withRequiredPropsCheck } from '@mixins/with-required-props-check.mixin';
import { UsersSelectors } from '@store/users/selectors';
import { UsersActions } from '@store/users/actions';
import { UserRolesFormComponent } from '../user-roles-form/user-roles-form.component';
import { UserRolesForm } from '@models/users/user-roles-form.model';
import { User } from '@models/users/user.model';

@Component({
  selector: 'app-user-edit-modal',
  templateUrl: './user-edit-modal.component.html',
  styleUrls: ['./user-edit-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserEditModalComponent
  extends withRequiredPropsCheck()
  implements OnInit
{
  isLoading$: Observable<boolean> = this.store.select(
    UsersSelectors.isLoadingUserEdit
  );
  @Input() editingUser!: User;
  userRolesForm!: UserRolesForm;

  @ViewChild('formRef') private formRef!: UserRolesFormComponent;

  constructor(private store: Store, private activeModal: NgbActiveModal) {
    super();
  }

  ngOnInit(): void {
    this.checkRequiredProps(['editingUser']);
    const { phoneNumber, email, roles } = this.editingUser;
    this.userRolesForm = { phoneNumber, email, roles };
  }

  onUserEdit(): void {
    if (this.formRef.submitForm() && this.userRolesForm) {
      this.store.dispatch(
        UsersActions.updateUserRolesRequest({
          userId: this.editingUser.id,
          ...this.userRolesForm,
        })
      );
      this.activeModal.close();
    }
  }
}
