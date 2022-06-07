import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveComponentModule } from '@ngrx/component';
import { TranslateModule } from '@ngx-translate/core';
import { B1CurrencySumModule } from '@ui/b1-currency-sum/b1-currency-sum.module';
import { B1TranslateCounterModule } from '@ui/b1-translate-counter/b1-translate-counter.module';

import { PaymentsSumComponent } from './payments-sum.component';

@NgModule({
  declarations: [PaymentsSumComponent],
  imports: [B1TranslateCounterModule, B1CurrencySumModule, ReactiveComponentModule, TranslateModule, CommonModule],
  exports: [PaymentsSumComponent],
})
export class PaymentsSumModule {}
