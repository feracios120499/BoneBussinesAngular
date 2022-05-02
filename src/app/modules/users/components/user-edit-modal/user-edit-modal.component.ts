import { Component, ChangeDetectionStrategy, ViewChild, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { withRequiredPropsCheck } from '@mixins/with-required-props-check.mixin';
import { UserRolesFormComponent } from '../user-roles-form/user-roles-form.component';
import { User } from '@modules/users/models/user.model';
import { UsersSelectors } from '@modules/users/store/selectors';
import { UserRolesForm } from '@modules/users/models/user-roles-form.model';
import { UsersActions } from '@modules/users/store/actions';
import { BaseB1ModalComponent } from '@modals/base-b1-modal.component';
import { UserEditModalConfig } from '@modules/users/models/user-edit-modal-config.model';

@Component({
  selector: 'app-user-edit-modal',
  templateUrl: './user-edit-modal.component.html',
  styleUrls: ['./user-edit-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserEditModalComponent extends withRequiredPropsCheck(BaseB1ModalComponent) implements OnInit {
  @Input() config!: UserEditModalConfig;
  isLoading$: Observable<boolean> = this.store.select(UsersSelectors.isLoadingUserEdit);
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

// import { Component, ChangeDetectionStrategy, ViewChild, OnInit, Input } from '@angular/core';
// import { Observable } from 'rxjs';
// import { Store } from '@ngrx/store';
// import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

// import { withRequiredPropsCheck } from '@mixins/with-required-props-check.mixin';
// import { UserRolesFormComponent } from '../user-roles-form/user-roles-form.component';
// import { User } from '@modules/users/models/user.model';
// import { UsersSelectors } from '@modules/users/store/selectors';
// import { UserRolesForm } from '@modules/users/models/user-roles-form.model';
// import { UsersActions } from '@modules/users/store/actions';

// @Component({
//   selector: 'app-user-edit-modal',
//   templateUrl: './user-edit-modal.component.html',
//   styleUrls: ['./user-edit-modal.component.scss'],
//   changeDetection: ChangeDetectionStrategy.OnPush,
// })
// export class UserEditModalComponent extends withRequiredPropsCheck() implements OnInit {
//   @Input() editingUser!: User;
//   isLoading$: Observable<boolean> = this.store.select(UsersSelectors.isLoadingUserEdit);
//   userRolesForm!: UserRolesForm;

//   @ViewChild('formRef') private formRef!: UserRolesFormComponent;

//   constructor(private store: Store, private activeModal: NgbActiveModal) {
//     super();
//   }

//   ngOnInit(): void {
//     this.checkRequiredProps(['editingUser']);
//     const { phoneNumber, email, roles } = this.editingUser;
//     this.userRolesForm = { phoneNumber, email, roles };
//   }

//   onUserEdit(): void {
//     if (this.formRef.submitForm() && this.userRolesForm) {
//       this.store.dispatch(
//         UsersActions.updateUserRolesRequest({
//           userId: this.editingUser.id,
//           ...this.userRolesForm,
//         })
//       );
//       this.activeModal.close();
//     }
//   }
// }
