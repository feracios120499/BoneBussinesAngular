import { NgModule } from '@angular/core';

import { CardNumberPipe } from './card-number.pipe';

@NgModule({
  declarations: [CardNumberPipe],
  exports: [CardNumberPipe],
})
export class CardNumberModule {}
