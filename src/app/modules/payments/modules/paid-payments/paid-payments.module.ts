import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaidPaymentsRoutingModule } from './paid-payments-routing.module';
import { PaidPaymentsComponent } from './paid-payments.component';
import { PaymentsListModule } from '../payments-list/payments-list.module';
import { PaymentsHeaderModule } from '@modules/payments/components/payments-header/payments-header.module';
import { PaymentsSumModule } from '@modules/payments/components/payments-sum/payments-sum.module';
import { TranslateModule } from '@ngx-translate/core';
import { B1CardLoaderModule } from '@ui/b1-card-loader/b1-card-loader.module';

@NgModule({
  declarations: [PaidPaymentsComponent],
  imports: [
    CommonModule,
    PaidPaymentsRoutingModule,
    PaymentsListModule,
    PaymentsHeaderModule,
    PaymentsSumModule,
    TranslateModule,
    B1CardLoaderModule,
  ],
})
export class PaidPaymentsModule {}
