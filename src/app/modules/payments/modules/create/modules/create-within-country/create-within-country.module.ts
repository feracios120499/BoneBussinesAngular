import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedPaymentModule } from 'src/app/@shared/modules/shared-payment/shared-payment.module';
import { SharedModule } from 'src/app/@shared/shared.module';

import { CreateWithinCountryRoutingModule } from './create-within-country-routing.module';
import { CreateWithinCountryComponent } from './create-within-country.component';


@NgModule({
  declarations: [
    CreateWithinCountryComponent
  ],
  imports: [
    CommonModule,
    CreateWithinCountryRoutingModule,
    SharedModule,
    SharedPaymentModule
  ]
})
export class CreateWithinCountryModule { }
