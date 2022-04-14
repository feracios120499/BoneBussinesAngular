import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgxMaskModule } from 'ngx-mask';

import { B1MaskedInputComponent } from './b1-masked-input.component';

@NgModule({
  declarations: [B1MaskedInputComponent],
  imports: [CommonModule, TranslateModule, NgxMaskModule, ReactiveFormsModule],
  exports: [B1MaskedInputComponent],
})
export class B1MaskedInputModule {}
