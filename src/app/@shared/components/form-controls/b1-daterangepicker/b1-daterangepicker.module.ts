import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { B1IconModule } from '@directives/b1-icon/b1-icon.module';

import { B1DaterangepickerComponent } from './b1-daterangepicker.component';
import { B1DaterangepickerDirective } from './b1-daterangepicker.directive';

@NgModule({
  declarations: [B1DaterangepickerComponent, B1DaterangepickerDirective],
  imports: [CommonModule, TranslateModule, FormsModule, B1IconModule],
  exports: [B1DaterangepickerComponent, B1DaterangepickerDirective],
})
export class B1DaterangepickerModule {}
