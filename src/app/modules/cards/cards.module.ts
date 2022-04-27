import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveComponentModule } from '@ngrx/component';
import { NgrxFormsModule } from 'ngrx-forms';
import { TranslateModule } from '@ngx-translate/core';
import { EffectsModule } from '@ngrx/effects';

import { B1CardLoaderModule } from '@ui/b1-card-loader/b1-card-loader.module';
import { B1CardNumberModule } from '@ui/b1-card-number/b1-card-number.module';
import { IbanModule } from '@directives/iban/iban.module';
import { B1IconModule } from '@directives/b1-icon/b1-icon.module';
import { CardsHeaderModule } from './modules/cards-header/cards-header.module';
import { CardStyledModule } from './components/card-styled/card-styled.module';
import { CheckValueModule } from '@directives/check-value/check-value.module';
import { CardsRoutingModule } from './cards-routing.module';

import { CardRowComponent } from './components/card-row/card-row.component';
import { CardsComponent } from './cards.component';
import { CardsListComponent } from './components/cards-list/cards-list.component';
import { CardsActionsComponent } from './components/cards-actions/cards-actions.component';
import { CardAccountRowComponent } from './components/card-account-row/card-account-row.component';

import { CardsEffect } from '@store/cards/effects';

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
    ReactiveComponentModule,
    TranslateModule,
    NgrxFormsModule,
    CardsRoutingModule,
    CardsHeaderModule,
    CardStyledModule,
    B1IconModule,
    IbanModule,
    B1CardNumberModule,
    B1CardLoaderModule,
    CheckValueModule,
    EffectsModule.forFeature([CardsEffect]),
  ],
})
export class CardsModule {}
