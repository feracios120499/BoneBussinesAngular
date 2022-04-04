import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardDetailsRoutingModule } from './card-details-routing.module';
import { CardDetailsComponent } from './card-details.component';
import { CardDetailsTabsComponent } from './components/card-details-tabs/card-details-tabs.component';
import { SharedModule } from 'src/app/@shared/shared.module';
import { CardsHeaderModule } from '../cards-header/cards-header.module';
import { CardDetailsInfoComponent } from './components/card-details-info/card-details-info.component';
import { CardDetailsLimitsComponent } from './components/card-details-limits/card-details-limits.component';
import { CardDetailsServicesComponent } from './components/card-details-services/card-details-services.component';
import { B1IconDirective } from 'src/app/@shared/modules/b1-directives/directives/b1-icon.directive';
import { B1DirectivesModule } from 'src/app/@shared/modules/b1-directives/b1-directives.module';
import { EffectsModule } from '@ngrx/effects';
import { CardDetailsEffects } from '@store/cards/details/effects';
import { CardStyledModule } from '@modules/cards/components/card-styled/card-styled.module';

@NgModule({
  declarations: [
    CardDetailsComponent,
    CardDetailsTabsComponent,
    CardDetailsInfoComponent,
    CardDetailsLimitsComponent,
    CardDetailsServicesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CardDetailsRoutingModule,
    CardsHeaderModule,
    B1DirectivesModule,
    CardStyledModule,
    EffectsModule.forFeature([CardDetailsEffects]),
  ],
})
export class CardDetailsModule {}
