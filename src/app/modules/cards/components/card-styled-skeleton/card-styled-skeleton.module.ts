import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { CardStyledSkeletonComponent } from './card-styled-skeleton.component';

@NgModule({
  declarations: [CardStyledSkeletonComponent],
  imports: [CommonModule, NgxSkeletonLoaderModule],
  exports: [CardStyledSkeletonComponent],
})
export class CardStyledSkeletonModule {}
