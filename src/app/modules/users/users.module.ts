import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/@shared/shared.module';
import { B1DropdownModule } from '@ui/b1-dropdown/b1-dropdown.module';
import { B1ModalContainerModule } from '@ui/b1-modal-container/b1-modal-container.module';
import { B1InputModule } from '@forms/b1-input/b1-input.module';
import { B1MaskedInputModule } from '@forms/b1-masked-input/b1-masked-input.module';
import { B1SwitcherListModule } from '@forms/b1-switcher-list/b1-switcher-list.module';
import { B1EmptyModule } from '@ui/b1-empty/b1-empty.module';

import { UsersComponent } from './views/users/users.component';
import { UsersHeaderComponent } from './components/users-header/users-header.component';
import { UsersActionsComponent } from './components/users-actions/users-actions.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { UserEditModalComponent } from './components/user-edit-modal/user-edit-modal.component';
import { UserCreateModalComponent } from './components/user-create-modal/user-create-modal.component';
import { UserRolesFormComponent } from './components/user-roles-form/user-roles-form.component';
import { UserNameFormComponent } from './components/user-name-form/user-name-form.component';

@NgModule({
  declarations: [
    UsersComponent,
    UsersHeaderComponent,
    UsersActionsComponent,
    UsersListComponent,
    UserItemComponent,
    UserEditModalComponent,
    UserCreateModalComponent,
    UserRolesFormComponent,
    UserNameFormComponent,
  ],
  imports: [
    SharedModule,
    B1DropdownModule,
    B1ModalContainerModule,
    B1InputModule,
    B1MaskedInputModule,
    B1SwitcherListModule,
    B1EmptyModule,
    RouterModule.forChild([
      {
        path: '',
        component: UsersComponent,
      },
    ]),
  ],
})
export class UsersModule {}
