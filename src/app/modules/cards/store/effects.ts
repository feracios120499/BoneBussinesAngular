import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { CardsService } from '@modules/cards/services/cards-service/cards.service';
import { clientIdWithoudData } from '@store/shared';
import { filter, map, switchMap } from 'rxjs/operators';
import { CardsActions } from './actions';

@Injectable()
export class CardsEffect {
  constructor(
    private actions$: Actions,
    private cardsService: CardsService,
    private store: Store,
    private translateService: TranslateService
  ) {}

  loadCardAccounts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CardsActions.loadCardAccountsRequest),
      switchMap(() => clientIdWithoudData(this.store)),
      switchMap((clientId) =>
        this.cardsService
          .getCardAccounts(clientId)
          .pipe(map((cardAccounts) => CardsActions.loadCardAccountsSuccess(cardAccounts)))
      )
    )
  );

  openFirstAccount$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CardsActions.loadCardAccountsSuccess),
      filter((action) => action.payload && action.payload.length != 0),
      map((action) => CardsActions.openCardAccount({ cardAccount: action.payload[0] }))
    )
  );
}
