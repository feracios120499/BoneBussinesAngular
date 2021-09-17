import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/@shared/shared.module';

import { PaymentsHeaderComponent } from './components/payments-header/payments-header.component';
import { PaymentsRoutingModule } from './payments-routing.module';
import { PaymentsComponent } from './payments.component';


@NgModule({
  declarations: [
    PaymentsComponent,
    PaymentsHeaderComponent
  ],
  imports: [
    CommonModule,
    PaymentsRoutingModule,
    SharedModule
  ]
})
export class PaymentsModule { }
