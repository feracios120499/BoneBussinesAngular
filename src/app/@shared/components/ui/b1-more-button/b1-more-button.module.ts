import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { B1IconModule } from '@directives/b1-icon/b1-icon.module';
import { SkeletonModule } from '@directives/skeleton/skeleton.module';

import { B1MoreButtonComponent } from './b1-more-button.component';

@NgModule({
  declarations: [B1MoreButtonComponent],
  imports: [CommonModule, B1IconModule, SkeletonModule],
  exports: [B1MoreButtonComponent],
})
export class B1MoreButtonModule {}
