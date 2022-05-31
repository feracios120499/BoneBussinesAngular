import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';

import { B1InputErrorModule } from '@form-controls/b1-input-error/b1-input-error.module';
import { B1IconModule } from '@directives/b1-icon/b1-icon.module';
import { PaymentDatesFormModule } from '@payment-forms/payment-dates-form/payment-dates-form.module';
import { B1AccountSelectModule } from '@form-controls/b1-account-select/b1-account-select.module';
import { OnlyNumbersModule } from '@directives/only-numbers/only-numbers.module';
import { PaymentPurposeFormModule } from '@payment-forms/payment-purpose-form/payment-purpose-form.module';
import { B1InputAmountModule } from '@form-controls/b1-input-amount/b1-input-amount.module';
import { CheckValueModule } from '@directives/check-value/check-value.module';

import { WithinCountryFormComponent } from './within-country-form.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [WithinCountryFormComponent],
  imports: [
    ReactiveFormsModule,
    TranslateModule,
    B1IconModule,
    B1InputErrorModule,
    PaymentDatesFormModule,
    B1AccountSelectModule,
    OnlyNumbersModule,
    B1InputAmountModule,
    PaymentPurposeFormModule,
    CheckValueModule,
    CommonModule,
  ],
  exports: [WithinCountryFormComponent],
})
export class WithinCountryFormModule {}
