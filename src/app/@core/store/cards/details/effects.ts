import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnRunEffects } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { CardsService } from '@services/cards/cards.service';
import { clientIdWithData } from '@store/shared';
import { of } from 'rxjs';
import {
  catchError,
  map,
  mergeMap,
  switchMap,
  withLatestFrom,
} from 'rxjs/operators';
import { CardDetailsActions } from './actions';
import { CardDetailsSelectors } from './selectors';

@Injectable({
  providedIn: 'root',
})
export class CardDetailsEffects {
  constructor(
    private actions$: Actions,
    private store: Store,
    private cardsService: CardsService
  ) {}

  loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CardDetailsActions.loadData),
      switchMap(() => [
        CardDetailsActions.loadCardRequest(),
        CardDetailsActions.loadSmsStatusRequest(),
        CardDetailsActions.loadLimitsRequest(),
      ])
    )
  );

  loadCard$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CardDetailsActions.loadCardRequest),
      withLatestFrom(this.store.select(CardDetailsSelectors.cardRouteParams)),
      switchMap(([, routeParams]) => clientIdWithData(this.store, routeParams)),
      switchMap((payload) =>
        this.cardsService
          .getCardDetails(
            payload.data.cardId,
            payload.data.accountId,
            payload.clientId
          )
          .pipe(
            map((card) => CardDetailsActions.loadCardSuccess(card)),
            catchError((error) =>
              of(CardDetailsActions.loadCardFailure(error.error.message))
            )
          )
      )
    )
  );

  loadLimits$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CardDetailsActions.loadLimitsRequest),
      withLatestFrom(this.store.select(CardDetailsSelectors.cardRouteParams)),
      switchMap(([, routeParams]) => clientIdWithData(this.store, routeParams)),
      switchMap((payload) =>
        this.cardsService
          .getCardLimits(payload.data.cardId, payload.clientId)
          .pipe(
            map((limits) => CardDetailsActions.loadLimitsSuccess(limits)),
            catchError((error) =>
              of(CardDetailsActions.loadLimitsFailure(error.error.message))
            )
          )
      )
    )
  );

  loadSms$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CardDetailsActions.loadSmsStatusRequest),
      withLatestFrom(this.store.select(CardDetailsSelectors.cardRouteParams)),
      switchMap(([, routeParams]) => clientIdWithData(this.store, routeParams)),
      switchMap((payload) =>
        this.cardsService
          .getCardSmsStatus(payload.data.cardId, payload.clientId)
          .pipe(
            map((limits) => CardDetailsActions.loadSmsStatusSuccess(limits)),
            catchError((error) =>
              of(CardDetailsActions.loadSmsStatusFailure(error.error.message))
            )
          )
      )
    )
  );
}
