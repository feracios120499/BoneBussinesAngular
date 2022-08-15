import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwiftRoutingModule } from './swift-routing.module';
import { SwiftComponent } from './swift.component';
import { SwiftFormModule } from '@payment-forms/swift-form/swift-form.module';
import { PaymentResultModule } from '@payment-forms/payment-result/payment-result.module';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveComponentModule } from '@ngrx/component';
import { B1ButtonModule } from '@ui/b1-button/b1-button.module';
import { SwiftConfirmModule } from '@payment-forms/swift-confirm/swift-confirm.module';

@NgModule({
  declarations: [SwiftComponent],
  imports: [
    CommonModule,
    SwiftRoutingModule,
    SwiftFormModule,
    PaymentResultModule,
    TranslateModule,
    FormsModule,
    ReactiveComponentModule,
    B1ButtonModule,
    SwiftConfirmModule,
  ],
})
export class SwiftModule {}
