import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveComponentModule } from '@ngrx/component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

import { B1ContentWrapperModule } from '@containers/b1-content-wrapper/b1-content-wrapper.module';
import { B1DropdownModule } from '@ui/b1-dropdown/b1-dropdown.module';
import { B1ModalContainerModule } from '@containers/b1-modal-container/b1-modal-container.module';
import { B1InputModule } from '@form-controls/b1-input/b1-input.module';
import { B1NumberInputModule } from '@form-controls/b1-number-input/b1-number-input.module';
import { B1EmptyModule } from '@containers/b1-empty/b1-empty.module';
import { B1IconModule } from '@directives/b1-icon/b1-icon.module';
import { IbanModule } from '@directives/iban/iban.module';
import { CorrespondentsFilterModule } from '@pipes/correspondents-filter/correspondents-filter.module';
import { B1CardLoaderModule } from '@ui/b1-card-loader/b1-card-loader.module';
import { B1ButtonModule } from '@ui/b1-button/b1-button.module';
import { CheckValueModule } from '@directives/check-value/check-value.module';
import { B1SkeletonModule } from '@ui/b1-skeleton/b1-skeleton.module';
import { NumberToArrayModule } from '@pipes/number-to-array/number-to-array.module';
import { B1MoreButtonModule } from '@ui/b1-more-button/b1-more-button.module';

import { CorrespondentsComponent } from './correspondents.component';
import { CorrespondentsHeaderComponent } from './components/correspondents-header/correspondents-header.component';
import { CorrespondentsActionsComponent } from './components/correspondents-actions/correspondents-actions.component';
import { CorrespondentsListComponent } from './components/correspondents-list/correspondents-list.component';
import { CorrespondentItemComponent } from './components/correspondent-item/correspondent-item.component';
import { CorrespondentFormComponent } from './components/correspondent-form/correspondent-form.component';
import { CorrespondentModalComponent } from './components/correspondent-modal/correspondent-modal.component';

@NgModule({
  declarations: [
    CorrespondentsComponent,
    CorrespondentsHeaderComponent,
    CorrespondentsActionsComponent,
    CorrespondentsListComponent,
    CorrespondentItemComponent,
    CorrespondentFormComponent,
    CorrespondentModalComponent,
  ],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    B1ContentWrapperModule,
    B1DropdownModule,
    B1ModalContainerModule,
    B1InputModule,
    B1NumberInputModule,
    B1EmptyModule,
    B1IconModule,
    IbanModule,
    CorrespondentsFilterModule,
    B1CardLoaderModule,
    B1ButtonModule,
    B1DropdownModule,
    CheckValueModule,
    B1SkeletonModule,
    NumberToArrayModule,
    B1MoreButtonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CorrespondentsComponent,
      },
    ]),
  ],
})
export class CorrespondentsModule {}
