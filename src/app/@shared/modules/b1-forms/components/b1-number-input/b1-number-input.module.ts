import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { OnlyNumbersModule } from '../../../../directives/only-numbers/only-numbers.module';

import { B1NumberInputComponent } from './b1-number-input.component';

@NgModule({
  declarations: [B1NumberInputComponent],
  imports: [CommonModule, TranslateModule, FormsModule, OnlyNumbersModule],
  exports: [B1NumberInputComponent],
})
export class B1NumberInputModule {}
