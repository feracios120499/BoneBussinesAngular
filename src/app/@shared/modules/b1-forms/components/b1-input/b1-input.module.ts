import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NgxMaskModule } from 'ngx-mask';

import { B1InputComponent } from './b1-input.component';

@NgModule({
  declarations: [B1InputComponent],
  imports: [CommonModule, TranslateModule, NgxMaskModule],
  exports: [B1InputComponent],
})
export class B1InputModule {}
