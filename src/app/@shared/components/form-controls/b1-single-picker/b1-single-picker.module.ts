import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { B1DaterangepickerModule } from '../b1-daterangepicker/b1-daterangepicker.module';
import { B1IconModule } from '@directives/b1-icon/b1-icon.module';

import { B1SinglePickerComponent } from './b1-single-picker.component';

@NgModule({
  declarations: [B1SinglePickerComponent],
  imports: [CommonModule, FormsModule, B1IconModule, B1DaterangepickerModule],
  exports: [B1SinglePickerComponent],
})
export class B1SinglePickerModule {}
