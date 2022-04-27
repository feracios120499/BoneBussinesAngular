import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveComponentModule } from '@ngrx/component';
import { TranslateModule } from '@ngx-translate/core';

import { B1IconModule } from '@directives/b1-icon/b1-icon.module';
import { MyAccountsFormModule } from '@payment-forms/my-accounts-form/my-accounts-form.module';
import { B1SupDocumentsModule } from '@form-controls/b1-sup-documents/b1-sup-documents.module';
import { MyAccountsConfirmModule } from '@payment-forms/my-accounts-confirm/my-accounts-confirm.module';
import { PaymentResultModule } from '@payment-forms/payment-result/payment-result.module';
import { MyAccountsRoutingModule } from './my-accounts-routing.module';

import { MyAccountsComponent } from './my-accounts.component';

@NgModule({
  declarations: [MyAccountsComponent],
  imports: [
    CommonModule,
    MyAccountsRoutingModule,
    FormsModule,
    ReactiveComponentModule,
    TranslateModule,
    MyAccountsFormModule,
    MyAccountsConfirmModule,
    PaymentResultModule,
    B1SupDocumentsModule,
    B1IconModule,
  ],
})
export class MyAccountsModule {}
