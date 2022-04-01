import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/@shared/shared.module';
import { B1DropdownModule } from '@ui/b1-dropdown/b1-dropdown.module';
import { B1ModalContainerModule } from '@ui/b1-modal-container/b1-modal-container.module';
import { B1InputModule } from '@forms/b1-input/b1-input.module';

import { UsersComponent } from './views/users/users.component';
import { UsersHeaderComponent } from './components/users-header/users-header.component';
import { UsersActionsComponent } from './components/users-actions/users-actions.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { UserEditModalComponent } from './components/user-edit-modal/user-edit-modal.component';

@NgModule({
  declarations: [
    UsersComponent,
    UsersHeaderComponent,
    UsersActionsComponent,
    UsersListComponent,
    UserItemComponent,
    UserEditModalComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    B1DropdownModule,
    B1ModalContainerModule,
    B1InputModule,
    RouterModule.forChild([
      {
        path: '',
        component: UsersComponent,
      },
    ]),
  ],
})
export class UsersModule {}
