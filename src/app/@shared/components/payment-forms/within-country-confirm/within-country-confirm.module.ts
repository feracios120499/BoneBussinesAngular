import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { B1ListDocumentsModule } from '@form-controls/b1-list-documents/b1-list-documents.module';
import { B1InputErrorModule } from '@form-controls/b1-input-error/b1-input-error.module';
import { B1IconModule } from '@directives/b1-icon/b1-icon.module';
import { IbanModule } from '@directives/iban/iban.module';
import { MoneyModule } from '@pipes/money/money.module';

import { WithinCountryConfirmComponent } from './within-country-confirm.component';

@NgModule({
  declarations: [WithinCountryConfirmComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    B1IconModule,
    IbanModule,
    MoneyModule,
    B1ListDocumentsModule,
    B1InputErrorModule,
  ],
  exports: [WithinCountryConfirmComponent],
})
export class WithinCountryConfirmModule {}
