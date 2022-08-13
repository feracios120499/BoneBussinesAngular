import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupdocumentsComponent } from './supdocuments.component';
import { SupdocumentsListComponent } from './components/supdocuments-list/supdocuments-list.component';
import { RouterModule } from '@angular/router';
import { B1ContentWrapperModule } from '@containers/b1-content-wrapper/b1-content-wrapper.module';
import { SupdocumentsHeaderComponent } from './components/supdocuments-header/supdocuments-header.component';
import { B1DropdownModule } from '@ui/b1-dropdown/b1-dropdown.module';
import { B1ModalContainerModule } from '@containers/b1-modal-container/b1-modal-container.module';
import { B1InputModule } from '@form-controls/b1-input/b1-input.module';
import { B1NumberInputModule } from '@form-controls/b1-number-input/b1-number-input.module';
import { B1EmptyModule } from '@containers/b1-empty/b1-empty.module';
import { B1IconModule } from '@directives/b1-icon/b1-icon.module';
import { TranslateModule } from '@ngx-translate/core';
import { SupdocumentsActionsComponent } from './components/supdocuments-actions/supdocuments-actions.component';
import { B1ButtonModule } from '@ui/b1-button/b1-button.module';
import { B1PageSeparatorModule } from '@ui/b1-page-separator/b1-page-separator.module';

import { ReactiveComponentModule } from '@ngrx/component';
import { B1CardLoaderModule } from '@ui/b1-card-loader/b1-card-loader.module';
import { SupdocumentItemComponent } from './components/supdocument-item/supdocument-item.component';
import { B1MoreButtonModule } from '@ui/b1-more-button/b1-more-button.module';
import { B1SkeletonModule } from '@ui/b1-skeleton/b1-skeleton.module';
import { NumberToArrayModule } from '@pipes/number-to-array/number-to-array.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SupdocumentsFilterModule } from '@pipes/supdocuments-filter/supdocuments-filter.module';
import { SupdocumentAddModalComponent } from './components/supdocument-add-modal/supdocument-add-modal.component';
import { SupdocumentFormComponent } from './components/supdocument-form/supdocument-form.component';
import { B1TextareaModule } from '@form-controls/b1-textarea/b1-textarea.module';
import { B1PageButtonModule } from '@ui/b1-page-button/b1-page-button.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SupdocumentSendModalComponent } from './components/supdocument-send-modal/supdocument-send-modal.component';
import { SupdocumentFormSendComponent } from './components/supdocument-form-send/supdocument-form-send.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';


@NgModule({
  declarations: [
    SupdocumentsComponent,
    SupdocumentsListComponent,
    SupdocumentsHeaderComponent,
    SupdocumentsActionsComponent,
    SupdocumentItemComponent,
    SupdocumentAddModalComponent,
    SupdocumentFormComponent,
    SupdocumentSendModalComponent,
    SupdocumentFormSendComponent
  ],
  imports: [
    NgMultiSelectDropDownModule,
    MatFormFieldModule,
    MatSelectModule,
    CommonModule,
    TranslateModule,
    NumberToArrayModule,
    ReactiveComponentModule,
    FormsModule,
    ReactiveFormsModule,
    SupdocumentsFilterModule,
    NgbModule,
    B1ContentWrapperModule,
    B1DropdownModule,
    B1ModalContainerModule,
    B1InputModule,
    B1NumberInputModule,
    B1EmptyModule,
    B1IconModule,
    B1ButtonModule,
    B1PageSeparatorModule,
    B1CardLoaderModule,
    B1MoreButtonModule,
    B1SkeletonModule,
    B1TextareaModule,
    B1PageButtonModule,
    RouterModule.forChild([
      {
        path: '',
        component: SupdocumentsComponent,
      },
    ]),
  ]
})
export class SupdocumentsModule { }
