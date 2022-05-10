import { NgModule } from '@angular/core';
import { MobileClassModule } from '@directives/mobile-class/mobile-class.module';
import { TranslateModule } from '@ngx-translate/core';
import { B1PageSeparatorModule } from '@ui/b1-page-separator/b1-page-separator.module';
import { PaymentsHeaderComponent } from './payments-header.component';

@NgModule({
  declarations: [PaymentsHeaderComponent],
  imports: [TranslateModule, B1PageSeparatorModule, MobileClassModule],
  exports: [PaymentsHeaderComponent],
})
export class PaymentsHeaderModule {}
