import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { withinCountryReducer } from '@store/payments/within-country-payment/reducer';
import { WITHIN_COUNTRY_KEY } from '@store/payments/within-country-payment/store';
import { SharedModule } from 'src/app/@shared/shared.module';

import { CreateTabsComponent } from './components/create-tabs/create-tabs.component';
import { CreateRoutingModule } from './create-routing.module';
import { CreateComponent } from './create.component';


@NgModule({
  declarations: [
    CreateComponent,
    CreateTabsComponent
  ],
  imports: [
    CommonModule,
    CreateRoutingModule,
    SharedModule,
    StoreModule.forFeature(WITHIN_COUNTRY_KEY, withinCountryReducer)
  ]
})
export class CreateModule { }
