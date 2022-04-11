import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/@shared/shared.module';
import { CardStyledComponent } from './card-styled.component';
import { B1DirectivesModule } from 'src/app/@shared/modules/b1-directives/b1-directives.module';

@NgModule({
  declarations: [CardStyledComponent],
  imports: [CommonModule, SharedModule, B1DirectivesModule],
  exports: [CardStyledComponent],
})
export class CardStyledModule {}
