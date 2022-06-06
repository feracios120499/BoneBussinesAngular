import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { MobileClassModule } from '@directives/mobile-class/mobile-class.module';

import { B1RadioButtonGroupComponent } from './b1-radio-button-group.component';

@NgModule({
  declarations: [B1RadioButtonGroupComponent],
  imports: [CommonModule, TranslateModule, MobileClassModule],
  exports: [B1RadioButtonGroupComponent],
})
export class B1RadioButtonGroupModule {}
