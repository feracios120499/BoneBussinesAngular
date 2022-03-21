import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsRoutingModule } from './cards-routing.module';
import { CardsComponent } from './cards.component';
import { CardsHeaderComponent } from './components/cards-header/cards-header.component';
import { SharedModule } from 'src/app/@shared/shared.module';
import { CardsListComponent } from './components/cards-list/cards-list.component';
import { CardsActionsComponent } from './components/cards-actions/cards-actions.component';
import { B1IconDirective } from 'src/app/@shared/modules/b1-directives/directives/b1-icon.directive';
import { B1DirectivesModule } from 'src/app/@shared/modules/b1-directives/b1-directives.module';
import { CardsEffect } from '@store/cards/effects';
import { EffectsModule } from '@ngrx/effects';
import { CardAccountRowComponent } from './components/card-account-row/card-account-row.component';
import { CardStyledComponent } from './components/card-styled/card-styled.component';
import { CardRowComponent } from './components/card-row/card-row.component';


@NgModule({
  declarations: [
    CardsComponent,
    CardsHeaderComponent,
    CardsListComponent,
    CardsActionsComponent,
    CardAccountRowComponent,
    CardStyledComponent,
    CardRowComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    CardsRoutingModule,
    B1DirectivesModule,
    EffectsModule.forFeature([
      CardsEffect
    ])
  ]
})
export class CardsModule { }
