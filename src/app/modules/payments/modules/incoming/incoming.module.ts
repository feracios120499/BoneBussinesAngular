import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncomingRoutingModule } from './incoming-routing.module';
import { IncomingComponent } from './incoming.component';
import { PaymentsHeaderModule } from '@modules/payments/components/payments-header/payments-header.module';
import { TranslateModule } from '@ngx-translate/core';
import { IncomingActionsComponent } from './components/incoming-actions/incoming-actions.component';
import { B1ButtonModule } from '@ui/b1-button/b1-button.module';
import { B1PageButtonModule } from '@ui/b1-page-button/b1-page-button.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { B1IconModule } from '@directives/b1-icon/b1-icon.module';
import { B1DaterangepickerModule } from '@form-controls/b1-daterangepicker/b1-daterangepicker.module';
import { FormsModule } from '@angular/forms';
import { B1CardLoaderModule } from '@ui/b1-card-loader/b1-card-loader.module';
import { IncomingListComponent } from './components/incoming-list/incoming-list.component';
import { EffectsModule } from '@ngrx/effects';
import { PayIncomingEffects } from './store/effects';
import { PaymentRowModule } from '@modules/payments/components/payment-row/payment-row.module';

@NgModule({
  declarations: [IncomingComponent, IncomingActionsComponent, IncomingListComponent],
  imports: [
    CommonModule,
    TranslateModule,
    IncomingRoutingModule,
    PaymentsHeaderModule,
    B1ButtonModule,
    B1PageButtonModule,
    ReactiveComponentModule,
    B1IconModule,
    B1DaterangepickerModule,
    FormsModule,
    B1CardLoaderModule,
    EffectsModule.forFeature([PayIncomingEffects]),
    PaymentRowModule,
  ],
})
export class IncomingModule {}
