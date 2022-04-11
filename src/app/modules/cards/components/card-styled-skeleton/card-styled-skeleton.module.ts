import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/@shared/shared.module';
import { B1DirectivesModule } from 'src/app/@shared/modules/b1-directives/b1-directives.module';
import { CardStyledSkeletonComponent } from './card-styled-skeleton.component';

@NgModule({
  declarations: [CardStyledSkeletonComponent],
  imports: [CommonModule, SharedModule, B1DirectivesModule],
  exports: [CardStyledSkeletonComponent],
})
export class CardStyledSkeletonModule {}
