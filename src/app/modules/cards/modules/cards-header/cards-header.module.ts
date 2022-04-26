import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { MobileClassModule } from '@directives/mobile-class/mobile-class.module';
import { B1PageSeparatorModule } from '@ui/b1-page-separator/b1-page-separator.module';

import { CardsHeaderComponent } from './cards-header.component';

@NgModule({
  declarations: [CardsHeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    MobileClassModule,
    B1PageSeparatorModule,
  ],
  exports: [CardsHeaderComponent],
})
export class CardsHeaderModule {}
