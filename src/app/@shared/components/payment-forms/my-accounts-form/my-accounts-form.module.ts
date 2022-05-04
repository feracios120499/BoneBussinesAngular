import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { B1InputErrorModule } from '@form-controls/b1-input-error/b1-input-error.module';
import { B1AccountSelectModule } from '@form-controls/b1-account-select/b1-account-select.module';
import { PaymentDatesFormModule } from '@payment-forms/payment-dates-form/payment-dates-form.module';
import { PaymentPurposeFormModule } from '@payment-forms/payment-purpose-form/payment-purpose-form.module';
import { CheckValueModule } from '@directives/check-value/check-value.module';
import { B1CheckboxModule } from '@form-controls/b1-checkbox/b1-checkbox.module';
import { B1InputModule } from '@form-controls/b1-input/b1-input.module';

import { MyAccountsFormComponent } from './my-accounts-form.component';
import { B1InputAmountModule } from '@form-controls/b1-input-amount/b1-input-amount.module';

@NgModule({
  declarations: [MyAccountsFormComponent],
  imports: [
    TranslateModule,
    ReactiveFormsModule,
    B1InputErrorModule,
    B1AccountSelectModule,
    PaymentDatesFormModule,
    PaymentPurposeFormModule,
    CheckValueModule,
    B1InputAmountModule,
    B1CheckboxModule,
    B1InputModule,
  ],
  exports: [MyAccountsFormComponent],
})
export class MyAccountsFormModule {}
