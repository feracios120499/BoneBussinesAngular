import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ReactiveComponentModule } from '@ngrx/component';
import { TranslateModule } from '@ngx-translate/core';
import { B1DirectivesModule } from '../b1-directives/b1-directives.module';
import { OnlyNumbersModule } from '../../directives/only-numbers/only-numbers.module';

import { B1FormsModule } from '../b1-forms/b1-forms.module';
import { B1PipesModule } from '../b1-pipes/b1-pipes.module';
import { PaymentDatesFormComponent } from './components/payment-dates-form/payment-dates-form.component';
import { PaymentPurposeFormComponent } from './components/payment-purpose-form/payment-purpose-form.component';
import { WithinCountryConfirmComponent } from './components/within-country-confirm/within-country-confirm.component';
import { WithinCountryFormComponent } from './components/within-country-form/within-country-form.component';
import { PaymentResultComponent } from './components/payment-result/payment-result.component';
import { MyAccountsFormComponent } from './components/my-accounts-form/my-accounts-form.component';
import { MyAccountsConfirmComponent } from './components/my-accounts-confirm/my-accounts-confirm.component';

@NgModule({
  declarations: [
    WithinCountryConfirmComponent,
    PaymentPurposeFormComponent,
    WithinCountryFormComponent,
    PaymentDatesFormComponent,
    PaymentResultComponent,
    MyAccountsFormComponent,
    MyAccountsConfirmComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    B1FormsModule,
    TranslateModule,
    B1PipesModule,
    B1DirectivesModule,
    NgSelectModule,
    ReactiveComponentModule,
    OnlyNumbersModule,
  ],
  exports: [
    WithinCountryConfirmComponent,
    PaymentPurposeFormComponent,
    WithinCountryFormComponent,
    PaymentDatesFormComponent,
    PaymentResultComponent,
    MyAccountsFormComponent,
    MyAccountsConfirmComponent,
  ],
})
export class SharedPaymentModule {}
