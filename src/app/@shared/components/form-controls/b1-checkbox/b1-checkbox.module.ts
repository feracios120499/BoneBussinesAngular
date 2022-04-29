import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { CheckValueModule } from '@directives/check-value/check-value.module';

import { B1CheckboxComponent } from './b1-checkbox.component';

@NgModule({
  declarations: [B1CheckboxComponent],
  imports: [TranslateModule, FormsModule, CheckValueModule],
  exports: [B1CheckboxComponent],
})
export class B1CheckboxModule {}
