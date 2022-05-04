import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveComponentModule } from '@ngrx/component';

import { B1DropdownModule } from '@ui/b1-dropdown/b1-dropdown.module';
import { B1ModalContainerModule } from '@containers/b1-modal-container/b1-modal-container.module';
import { B1InputModule } from '@form-controls/b1-input/b1-input.module';
import { B1MaskedInputModule } from '@form-controls/b1-masked-input/b1-masked-input.module';
import { B1SwitcherListModule } from '@form-controls/b1-switcher-list/b1-switcher-list.module';
import { B1EmptyModule } from '@containers/b1-empty/b1-empty.module';
import { B1IconModule } from '@directives/b1-icon/b1-icon.module';
import { B1CardLoaderModule } from '@ui/b1-card-loader/b1-card-loader.module';
import { B1ContentWrapperModule } from '@containers/b1-content-wrapper/b1-content-wrapper.module';
import { B1ButtonModule } from '@ui/b1-button/b1-button.module';
import { InitialsModule } from '@pipes/initials/initials.module';
import { CheckValueModule } from '@directives/check-value/check-value.module';
import { UsersFilterModule } from '@pipes/users-filter/users-filter.module';
import { NumberToArrayModule } from '@pipes/number-to-array/number-to-array.module';
import { B1SkeletonModule } from '@ui/b1-skeleton/b1-skeleton.module';
import { B1MoreButtonModule } from '@ui/b1-more-button/b1-more-button.module';

import { UsersComponent } from './users.component';
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
    CommonModule,
    TranslateModule,
    ReactiveComponentModule,
    FormsModule,
    ReactiveFormsModule,
    B1DropdownModule,
    B1ModalContainerModule,
    B1InputModule,
    B1MaskedInputModule,
    B1SwitcherListModule,
    B1EmptyModule,
    B1IconModule,
    B1CardLoaderModule,
    B1ContentWrapperModule,
    B1ButtonModule,
    InitialsModule,
    UsersFilterModule,
    CheckValueModule,
    NumberToArrayModule,
    B1SkeletonModule,
    B1MoreButtonModule,
    RouterModule.forChild([
      {
        path: '',
        component: UsersComponent,
      },
    ]),
  ],
})
export class UsersModule {}
