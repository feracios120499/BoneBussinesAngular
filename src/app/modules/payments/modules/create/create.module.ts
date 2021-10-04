import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { WithinCountryEffects } from '@store/payments/within-country-payment/effects';
import { withinCountryReducer } from '@store/payments/within-country-payment/reducer';
import { WITHIN_COUNTRY_KEY } from '@store/payments/within-country-payment/store';
import { B1DirectivesModule } from 'src/app/@shared/modules/b1-directives/b1-directives.module';
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
    B1DirectivesModule,
    StoreModule.forFeature(WITHIN_COUNTRY_KEY, withinCountryReducer),
    EffectsModule.forFeature([
      WithinCountryEffects
    ])
  ]
})
export class CreateModule { }
