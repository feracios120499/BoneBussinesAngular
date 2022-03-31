import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { B1DirectivesModule } from '../../modules/b1-directives/b1-directives.module';

import { B1ButtonComponent } from './b1-button.component';

@NgModule({
  declarations: [B1ButtonComponent],
  imports: [CommonModule, TranslateModule, B1DirectivesModule],
  exports: [B1ButtonComponent],
})
export class B1ButtonModule {}
