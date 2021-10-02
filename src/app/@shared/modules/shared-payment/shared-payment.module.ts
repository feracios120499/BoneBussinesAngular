import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmWithinCountryComponent } from './components/confirm-within-country/confirm-within-country.component';
import { SharedModule } from '../../shared.module';



@NgModule({
  declarations: [
    ConfirmWithinCountryComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ConfirmWithinCountryComponent
  ]
})
export class SharedPaymentModule { }
