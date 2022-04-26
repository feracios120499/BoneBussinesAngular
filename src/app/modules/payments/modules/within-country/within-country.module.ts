import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveComponentModule } from '@ngrx/component';

import { B1IconModule } from '@directives/b1-icon/b1-icon.module';
import { WithinCountryFormModule } from '@payment-forms/within-country-form/within-country-form.module';
import { B1SupDocumentsModule } from '@form-controls/b1-sup-documents/b1-sup-documents.module';
import { WithinCountryConfirmModule } from '@payment-forms/within-country-confirm/within-country-confirm.module';
import { PaymentResultModule } from '@payment-forms/payment-result/payment-result.module';
import { WithinCountryRoutingModule } from './within-country-routing.module';

import { WithinCountryComponent } from './within-country.component';

@NgModule({
  declarations: [WithinCountryComponent],
  imports: [
    CommonModule,
    WithinCountryRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    ReactiveComponentModule,
    WithinCountryFormModule,
    B1SupDocumentsModule,
    WithinCountryConfirmModule,
    PaymentResultModule,
    B1IconModule,
  ],
})
export class WithinCountryModule {}
