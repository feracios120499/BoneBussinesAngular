import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { DecimalNumbersModule } from '@directives/decimal-numbers/decimal-numbers.module';
import { CheckValueModule } from '@directives/check-value/check-value.module';

import { B1InputAmountComponent } from './b1-input-amount.component';

@NgModule({
  declarations: [B1InputAmountComponent],
  imports: [
    TranslateModule,
    FormsModule,
    DecimalNumbersModule,
    CheckValueModule,
  ],
  exports: [B1InputAmountComponent],
})
export class B1InputAmountModule {}
