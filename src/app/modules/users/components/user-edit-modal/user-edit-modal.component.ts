import { Component, ChangeDetectionStrategy, ViewChild, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { UserRolesFormComponent } from '../user-roles-form/user-roles-form.component';
import { UsersSelectors } from '@modules/users/store/selectors';
import { UserRolesForm } from '@modules/users/models/user-roles-form.model';
import { BaseB1ModalComponent } from '@modals/base-b1-modal.component';
import { UserEditModalConfig } from '@modules/users/models/user-edit-modal-config.model';
import { UserEditModalResult } from '@modules/users/models/user-edit-modal-result.model';

@Component({
  selector: 'app-user-edit-modal',
  templateUrl: './user-edit-modal.component.html',
  styleUrls: ['./user-edit-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserEditModalComponent extends BaseB1ModalComponent<UserEditModalResult> implements OnInit {
  @Input() config!: UserEditModalConfig;

  result!: UserEditModalResult;
  isLoading$: Observable<boolean> = this.store.select(UsersSelectors.isLoadingUserEdit);
  userRolesForm!: UserRolesForm;

  @ViewChild('formRef') private formRef!: UserRolesFormComponent;

  constructor(private store: Store) {
    super();
  }

  ngOnInit(): void {
    super.ngOnInit();
    const { phoneNumber, email, roles } = this.config.editingUser;
    this.userRolesForm = { phoneNumber, email, roles };
  }

  onUserEdit(): void {
    if (this.formRef.submitForm() && this.userRolesForm) {
      this.result = { userId: this.config.editingUser.id, roles: this.userRolesForm.roles };
      this.ok();
    }
  }
}
