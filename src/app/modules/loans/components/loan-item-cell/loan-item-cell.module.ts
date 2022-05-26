import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { LoanItemCellComponent } from './loan-item-cell.component';

@NgModule({
  declarations: [LoanItemCellComponent],
  imports: [CommonModule, TranslateModule],
  exports: [LoanItemCellComponent],
})
export class LoanItemCellModule {}
