import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsRoutingModule } from './cards-routing.module';
import { CardsComponent } from './cards.component';
import { SharedModule } from 'src/app/@shared/shared.module';
import { CardsListComponent } from './components/cards-list/cards-list.component';
import { CardsActionsComponent } from './components/cards-actions/cards-actions.component';
import { B1DirectivesModule } from 'src/app/@shared/modules/b1-directives/b1-directives.module';
import { CardsEffect } from '@store/cards/effects';
import { EffectsModule } from '@ngrx/effects';
import { CardAccountRowComponent } from './components/card-account-row/card-account-row.component';
import { CardRowComponent } from './components/card-row/card-row.component';
import { CardsHeaderModule } from './modules/cards-header/cards-header.module';
import { CardStyledModule } from './components/card-styled/card-styled.module';
import { CardStyledSkeletonComponent } from './components/card-styled-skeleton/card-styled-skeleton.component';

@NgModule({
  declarations: [
    CardsComponent,
    CardsListComponent,
    CardsActionsComponent,
    CardAccountRowComponent,
    CardRowComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CardsRoutingModule,
    B1DirectivesModule,
    CardsHeaderModule,
    CardStyledModule,
    EffectsModule.forFeature([CardsEffect]),
  ],
})
export class CardsModule {}
