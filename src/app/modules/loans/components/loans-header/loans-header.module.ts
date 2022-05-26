import { NgModule } from '@angular/core';

import { B1PageMenuModule } from '@ui/b1-page-menu/b1-page-menu.module';
import { B1PageSeparatorModule } from '@ui/b1-page-separator/b1-page-separator.module';
import { MobileClassModule } from '@directives/mobile-class/mobile-class.module';

import { LoansHeaderComponent } from './loans-header.component';

@NgModule({
  declarations: [LoansHeaderComponent],
  imports: [B1PageMenuModule, B1PageSeparatorModule, MobileClassModule],
  exports: [LoansHeaderComponent],
})
export class LoansHeaderModule {}
