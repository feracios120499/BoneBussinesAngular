import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardDetailsRoutingModule } from './card-details-routing.module';
import { CardDetailsComponent } from './card-details.component';
import { CardDetailsTabsComponent } from './components/card-details-tabs/card-details-tabs.component';
import { SharedModule } from 'src/app/@shared/shared.module';
import { CardsHeaderModule } from '../cards-header/cards-header.module';

@NgModule({
  declarations: [CardDetailsComponent, CardDetailsTabsComponent],
  imports: [
    CommonModule,
    SharedModule,
    CardDetailsRoutingModule,
    CardsHeaderModule,
  ],
})
export class CardDetailsModule {}
