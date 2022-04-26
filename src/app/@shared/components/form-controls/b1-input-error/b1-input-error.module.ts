import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { B1InputErrorComponent } from './b1-input-error.component';

@NgModule({
  declarations: [B1InputErrorComponent],
  imports: [CommonModule, TranslateModule],
  exports: [B1InputErrorComponent],
})
export class B1InputErrorModule {}
