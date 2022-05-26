import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkeletonComponent } from './skeleton.component';
import { SkeletonDirective } from './skeleton.directive';

@NgModule({
  declarations: [SkeletonComponent, SkeletonDirective],
  imports: [CommonModule],
  exports: [SkeletonDirective],
})
export class SkeletonModule {}
