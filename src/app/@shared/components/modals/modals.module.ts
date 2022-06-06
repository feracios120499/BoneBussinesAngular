import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { ReactiveComponentModule } from '@ngrx/component';
import { TranslateModule } from '@ngx-translate/core';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { NumberToArrayModule } from '@pipes/number-to-array/number-to-array.module';

import { SharedModule } from '@shared';
import { B1CardLoaderModule } from '@ui/b1-card-loader/b1-card-loader.module';
import { CorrespondentsFilterModule } from '@pipes/correspondents-filter/correspondents-filter.module';
import { B1EmptyModule } from '@containers/b1-empty/b1-empty.module';
import { WebClassModule } from '@directives/web-class/web-class.module';
import { B1IconModule } from '@directives/b1-icon/b1-icon.module';
import { IbanModule } from '@directives/iban/iban.module';
import { NgSelectScrollModule } from '@directives/ng-select-scroll/ng-select-scroll.module';
import { B1DaterangepickerModule } from '@form-controls/b1-daterangepicker/b1-daterangepicker.module';
import { MoneyModule } from '@pipes/money/money.module';
import { CheckValueModule } from '@directives/check-value/check-value.module';
import { B1SkeletonModule } from '@ui/b1-skeleton/b1-skeleton.module';
import { B1ButtonModule } from '@ui/b1-button/b1-button.module';
import { B1InputModule } from '@form-controls/b1-input/b1-input.module';
import { B1CheckboxModule } from '@form-controls/b1-checkbox/b1-checkbox.module';
import { B1ModalContainerModule } from '@containers/b1-modal-container/b1-modal-container.module';
import { CustomersFilterModule } from '@pipes/customers-filter/customers-filter.module';
import { FirstTitleModule } from '@pipes/first-title/first-title.module';
import { B1RadioButtonGroupModule } from '@form-controls/b1-radio-button-group/b1-radio-button-group.module';
import { B1TextareaModule } from '@form-controls/b1-textarea/b1-textarea.module';
import { B1RatingModule } from '@form-controls/b1-rating/b1-rating.module';
import { B1NumberInputModule } from '@form-controls/b1-number-input/b1-number-input.module';
import { B1MaskedInputModule } from '@form-controls/b1-masked-input/b1-masked-input.module';
import { FirstLowercaseModule } from '@pipes/first-lowercase/first-lowercase.module';

import { B1ExportTurnoversModalComponent } from './b1-export-turnovers-modal/b1-export-turnovers-modal.component';
import { B1PaymentModalComponent } from './b1-payment-modal/b1-payment-modal.component';
import { B1RequisitesModalComponent } from './b1-requisites-modal/b1-requisites-modal.component';
import { B1StatementModalComponent } from './b1-statement-modal/b1-statement-modal.component';
import { B1ConfirmModalComponent } from './b1-confirm-modal/b1-confirm-modal.component';
import { B1ErrorModalComponent } from './b1-error-modal/b1-error-modal.component';
import { B1CorrespondentsModalComponent } from './b1-correspondents-modal/b1-correspondents-modal.component';
import { B1HistoryModalComponent } from './b1-history-modal/b1-history-modal.component';
import { B1SignModalComponent } from './b1-sign-modal/b1-sign-modal.component';
import { B1CustomersModalComponent } from './b1-customers-modal/b1-customers-modal.component';
import { B1FeedbackModalComponent } from './b1-feedback-modal/b1-feedback-modal.component';

import { B1FeedbackRatingFormComponent } from './b1-feedback-rating-form/b1-feedback-rating-form.component';
import { B1FeedbackContactsFormComponent } from './b1-feedback-contacts-form/b1-feedback-contacts-form.component';

@NgModule({
  declarations: [
    B1PaymentModalComponent,
    B1StatementModalComponent,
    B1RequisitesModalComponent,
    B1ExportTurnoversModalComponent,
    B1ConfirmModalComponent,
    B1ErrorModalComponent,
    B1CorrespondentsModalComponent,
    B1HistoryModalComponent,
    B1SignModalComponent,
    B1CustomersModalComponent,
    B1FeedbackModalComponent,
    B1FeedbackRatingFormComponent,
    B1FeedbackContactsFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    ReactiveFormsModule,
    NgbModule,
    ReactiveComponentModule,
    SharedModule,
    NgScrollbarModule,
    NgxSkeletonLoaderModule,
    B1CardLoaderModule,
    WebClassModule,
    CorrespondentsFilterModule,
    B1EmptyModule,
    B1IconModule,
    IbanModule,
    NgSelectScrollModule,
    NgSelectModule,
    B1DaterangepickerModule,
    MoneyModule,
    CheckValueModule,
    B1SkeletonModule,
    NumberToArrayModule,
    B1ButtonModule,
    B1InputModule,
    B1CheckboxModule,
    B1ModalContainerModule,
    CustomersFilterModule,
    FirstTitleModule,
    B1RadioButtonGroupModule,
    B1TextareaModule,
    B1RatingModule,
    B1NumberInputModule,
    B1MaskedInputModule,
    FirstLowercaseModule,
  ],
  exports: [
    B1PaymentModalComponent,
    B1StatementModalComponent,
    B1RequisitesModalComponent,
    B1ExportTurnoversModalComponent,
    B1ConfirmModalComponent,
    B1ErrorModalComponent,
    B1CorrespondentsModalComponent,
    B1HistoryModalComponent,
    B1SignModalComponent,
    B1FeedbackModalComponent,
  ],
})
export class ModalsModule {}
