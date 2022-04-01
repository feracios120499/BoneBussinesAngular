import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsHeaderComponent } from './cards-header.component';
import { SharedModule } from 'src/app/@shared/shared.module';

@NgModule({
  declarations: [CardsHeaderComponent],
  imports: [CommonModule, SharedModule],
  exports: [CardsHeaderComponent],
})
export class CardsHeaderModule {}
