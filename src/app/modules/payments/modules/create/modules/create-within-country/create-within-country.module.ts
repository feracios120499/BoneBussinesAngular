import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PaymentsModule } from '@modules/payments/payments.module';
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
    SharedModule
  ]
})
export class CreateWithinCountryModule { }
