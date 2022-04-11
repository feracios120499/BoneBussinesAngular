import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { B1InputComponent } from './b1-input.component';

@NgModule({
  declarations: [B1InputComponent],
  imports: [CommonModule, TranslateModule, FormsModule],
  exports: [B1InputComponent],
})
export class B1InputModule {}
