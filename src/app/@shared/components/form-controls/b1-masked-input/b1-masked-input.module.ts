import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgxMaskModule } from 'ngx-mask';

import { CheckValueModule } from '@directives/check-value/check-value.module';

import { B1MaskedInputComponent } from './b1-masked-input.component';

@NgModule({
  declarations: [B1MaskedInputComponent],
  imports: [
    CommonModule,
    TranslateModule,
    NgxMaskModule,
    ReactiveFormsModule,
    CheckValueModule,
  ],
  exports: [B1MaskedInputComponent],
})
export class B1MaskedInputModule {}
