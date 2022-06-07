import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { B1TranslateCounterComponent } from './b1-translate-counter.component';

@NgModule({
  declarations: [B1TranslateCounterComponent],
  imports: [CommonModule, TranslateModule],
  exports: [B1TranslateCounterComponent],
})
export class B1TranslateCounterModule {}
