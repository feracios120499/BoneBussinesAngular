import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { B1PageMenuComponent } from './b1-page-menu.component';

@NgModule({
  declarations: [B1PageMenuComponent],
  imports: [CommonModule, RouterModule, TranslateModule],
  exports: [B1PageMenuComponent],
})
export class B1PageMenuModule {}
