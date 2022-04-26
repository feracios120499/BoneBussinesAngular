import { NgModule } from '@angular/core';

import { DecimalNumbersDirective } from './decimal-numbers.directive';

@NgModule({
  declarations: [DecimalNumbersDirective],
  exports: [DecimalNumbersDirective],
})
export class DecimalNumbersModule {}
