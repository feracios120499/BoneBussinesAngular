import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/@shared/shared.module';
import { B1DirectivesModule } from 'src/app/@shared/modules/b1-directives/b1-directives.module';

import { UsersComponent } from './views/users/users.component';
import { UsersHeaderComponent } from './components/users-header/users-header.component';
import { UsersActionsComponent } from './components/users-actions/users-actions.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserItemComponent } from './components/user-item/user-item.component';

@NgModule({
  declarations: [
    UsersComponent,
    UsersHeaderComponent,
    UsersActionsComponent,
    UsersListComponent,
    UserItemComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    B1DirectivesModule,
    RouterModule.forChild([
      {
        path: '',
        component: UsersComponent,
      },
    ]),
  ],
})
export class UsersModule {}
