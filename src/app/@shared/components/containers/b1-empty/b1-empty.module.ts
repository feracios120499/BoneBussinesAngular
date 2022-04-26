import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { B1EmptyComponent } from './b1-empty.component';

@NgModule({
  declarations: [B1EmptyComponent],
  imports: [CommonModule, TranslateModule],
  exports: [B1EmptyComponent],
})
export class B1EmptyModule {}
