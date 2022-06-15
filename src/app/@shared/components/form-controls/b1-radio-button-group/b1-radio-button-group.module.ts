import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { B1RadioButtonGroupComponent } from './b1-radio-button-group.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [B1RadioButtonGroupComponent],
  imports: [CommonModule, TranslateModule, NgbTooltipModule],
  exports: [B1RadioButtonGroupComponent],
})
export class B1RadioButtonGroupModule {}
