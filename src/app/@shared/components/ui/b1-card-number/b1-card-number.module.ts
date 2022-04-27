import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardNumberModule } from '@pipes/card-number/card-number.module';

import { B1CardNumberComponent } from './b1-card-number.component';

@NgModule({
  declarations: [B1CardNumberComponent],
  imports: [CommonModule, CardNumberModule],
  exports: [B1CardNumberComponent],
})
export class B1CardNumberModule {}
