import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveComponentModule } from '@ngrx/component';

import { B1IconModule } from '@directives/b1-icon/b1-icon.module';
import { MoneyModule } from '@pipes/money/money.module';
import { B1ListDocumentsModule } from '@form-controls/b1-list-documents/b1-list-documents.module';
import { IbanModule } from '@directives/iban/iban.module';
import { CheckValueModule } from '@directives/check-value/check-value.module';
import { B1CheckboxModule } from '@form-controls/b1-checkbox/b1-checkbox.module';
import { B1InputModule } from '@form-controls/b1-input/b1-input.module';
import { B1ButtonModule } from '@ui/b1-button/b1-button.module';

import { MyAccountsConfirmComponent } from './my-accounts-confirm.component';

@NgModule({
  declarations: [MyAccountsConfirmComponent],
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveComponentModule,
    B1IconModule,
    MoneyModule,
    B1ListDocumentsModule,
    IbanModule,
    CheckValueModule,
    B1CheckboxModule,
    B1InputModule,
    B1ButtonModule,
  ],
  exports: [MyAccountsConfirmComponent],
})
export class MyAccountsConfirmModule {}
