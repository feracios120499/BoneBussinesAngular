import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { B1IconModule } from '@directives/b1-icon/b1-icon.module';

import { B1ButtonComponent } from './b1-button.component';

@NgModule({
  declarations: [B1ButtonComponent],
  imports: [CommonModule, TranslateModule, B1IconModule],
  exports: [B1ButtonComponent],
})
export class B1ButtonModule {}
