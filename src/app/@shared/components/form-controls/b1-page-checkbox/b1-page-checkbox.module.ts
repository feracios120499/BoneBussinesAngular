import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { B1IconModule } from '@directives/b1-icon/b1-icon.module';

import { B1PageCheckboxComponent } from './b1-page-checkbox.component';

@NgModule({
  declarations: [B1PageCheckboxComponent],
  imports: [FormsModule, B1IconModule],
  exports: [B1PageCheckboxComponent],
})
export class B1PageCheckboxModule {}
