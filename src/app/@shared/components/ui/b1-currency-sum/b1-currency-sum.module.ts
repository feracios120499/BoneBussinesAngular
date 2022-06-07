import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MoneyModule } from '@pipes/money/money.module';
import { B1CurrencySumComponent } from './b1-currency-sum.component';

@NgModule({
  declarations: [B1CurrencySumComponent],
  imports: [CommonModule, TranslateModule, MoneyModule],
  exports: [B1CurrencySumComponent],
})
export class B1CurrencySumModule {}
