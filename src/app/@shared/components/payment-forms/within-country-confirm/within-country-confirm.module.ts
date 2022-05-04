import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveComponentModule } from '@ngrx/component';

import { B1ListDocumentsModule } from '@form-controls/b1-list-documents/b1-list-documents.module';
import { B1InputErrorModule } from '@form-controls/b1-input-error/b1-input-error.module';
import { B1IconModule } from '@directives/b1-icon/b1-icon.module';
import { IbanModule } from '@directives/iban/iban.module';
import { MoneyModule } from '@pipes/money/money.module';
import { CheckValueModule } from '@directives/check-value/check-value.module';
import { B1CheckboxModule } from '@form-controls/b1-checkbox/b1-checkbox.module';
import { B1InputModule } from '@form-controls/b1-input/b1-input.module';
import { B1ButtonModule } from '@ui/b1-button/b1-button.module';

import { WithinCountryConfirmComponent } from './within-country-confirm.component';

@NgModule({
  declarations: [WithinCountryConfirmComponent],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    B1IconModule,
    IbanModule,
    MoneyModule,
    B1ListDocumentsModule,
    B1InputErrorModule,
    CheckValueModule,
    B1CheckboxModule,
    B1InputModule,
    B1ButtonModule,
  ],
  exports: [WithinCountryConfirmComponent],
})
export class WithinCountryConfirmModule {}
