import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveComponentModule } from '@ngrx/component';
import { TranslateModule } from '@ngx-translate/core';

import { FirstTitleModule } from '@pipes/first-title/first-title.module';
import { B1IconModule } from '@directives/b1-icon/b1-icon.module';

import { SwiftFormComponent } from './swift-form.component';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { B1InputModule } from '@form-controls/b1-input/b1-input.module';
import { B1InputErrorModule } from '@form-controls/b1-input-error/b1-input-error.module';
import { B1CheckboxModule } from '@form-controls/b1-checkbox/b1-checkbox.module';
import { PaymentDatesFormModule } from '@payment-forms/payment-dates-form/payment-dates-form.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgSelectScrollModule } from '@directives/ng-select-scroll/ng-select-scroll.module';
import { B1InputAmountModule } from '@form-controls/b1-input-amount/b1-input-amount.module';
import { B1RadioButtonGroupModule } from '@form-controls/b1-radio-button-group/b1-radio-button-group.module';
import { B1SupDocumentsModule } from '@form-controls/b1-sup-documents/b1-sup-documents.module';
import { B1AccountSelectModule } from '@form-controls/b1-account-select/b1-account-select.module';

@NgModule({
  declarations: [SwiftFormComponent],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    TranslateModule,
    FirstTitleModule,
    B1IconModule,
    NgbAccordionModule,
    FormsModule,
    ReactiveFormsModule,
    B1InputModule,
    B1InputErrorModule,
    B1CheckboxModule,
    PaymentDatesFormModule,
    NgSelectModule,
    NgSelectScrollModule,
    B1InputAmountModule,
    B1RadioButtonGroupModule,
    B1SupDocumentsModule,
    B1AccountSelectModule,
  ],
  exports: [SwiftFormComponent],
})
export class SwiftFormModule {}
