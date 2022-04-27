import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveComponentModule } from '@ngrx/component';

import { B1IconModule } from '@directives/b1-icon/b1-icon.module';
import { MoneyModule } from '@pipes/money/money.module';
import { B1ListDocumentsModule } from '@form-controls/b1-list-documents/b1-list-documents.module';
import { IbanModule } from '@directives/iban/iban.module';
import { B1InputErrorModule } from '@form-controls/b1-input-error/b1-input-error.module';

import { MyAccountsConfirmComponent } from './my-accounts-confirm.component';

@NgModule({
  declarations: [MyAccountsConfirmComponent],
  imports: [
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveComponentModule,
    B1IconModule,
    MoneyModule,
    B1ListDocumentsModule,
    IbanModule,
    B1InputErrorModule,
  ],
  exports: [MyAccountsConfirmComponent],
})
export class MyAccountsConfirmModule {}
