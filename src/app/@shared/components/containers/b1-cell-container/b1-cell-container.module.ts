import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { B1CellContainerComponent } from './b1-cell-container.component';

@NgModule({
  declarations: [B1CellContainerComponent],
  imports: [CommonModule, TranslateModule],
  exports: [B1CellContainerComponent],
})
export class B1CellContainerModule {}
