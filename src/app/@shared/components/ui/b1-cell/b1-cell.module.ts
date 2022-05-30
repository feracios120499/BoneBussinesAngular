import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SkeletonModule } from '@directives/skeleton/skeleton.module';

import { B1CellComponent } from './b1-cell.component';

@NgModule({
  declarations: [B1CellComponent],
  imports: [CommonModule, TranslateModule, SkeletonModule],
  exports: [B1CellComponent],
})
export class B1CellModule {}
