import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { DecimalNumbersModule } from '@directives/decimal-numbers/decimal-numbers.module';

import { B1InputAmountComponent } from './b1-input-amount.component';

@NgModule({
  declarations: [B1InputAmountComponent],
  imports: [TranslateModule, FormsModule, DecimalNumbersModule],
  exports: [B1InputAmountComponent],
})
export class B1InputAmountModule {}
