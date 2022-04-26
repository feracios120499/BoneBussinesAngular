import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveComponentModule } from '@ngrx/component';
import { TranslateModule } from '@ngx-translate/core';

import { FirstTitleModule } from '@pipes/first-title/first-title.module';
import { B1IconModule } from '@directives/b1-icon/b1-icon.module';

import { PaymentResultComponent } from './payment-result.component';

@NgModule({
  declarations: [PaymentResultComponent],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    TranslateModule,
    FirstTitleModule,
    B1IconModule,
  ],
  exports: [PaymentResultComponent],
})
export class PaymentResultModule {}
