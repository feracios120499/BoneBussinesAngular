import { Injectable } from '@angular/core';
import { EditLimitModalComponent } from '@modules/cards/modules/card-details/components/edit-limit-modal/edit-limit-modal.component';
import { Actions, createEffect, ofType, OnRunEffects } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { CardsService } from '@services/cards/cards.service';
import { ModalService } from '@services/modal.service';
import { NotifyActions } from '@store/notify/actions';
import { RouteActions } from '@store/route/actions';
import { clientIdWithData } from '@store/shared';
import { of } from 'rxjs';
import {
  catchError,
  map,
  mergeMap,
  switchMap,
  tap,
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
    private cardsService: CardsService,
    private modalService: ModalService,
    private translateService: TranslateService
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
              of(
                CardDetailsActions.loadCardFailure(error.message),
                NotifyActions.serverErrorNotification({
                  error,
                  message: this.translateService.instant('errors.loadCard'),
                })
              )
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
              of(
                CardDetailsActions.loadLimitsFailure(error.message),
                NotifyActions.serverErrorNotification({
                  error,
                  message: this.translateService.instant('errors.loadLimits'),
                })
              )
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
              of(
                CardDetailsActions.loadSmsStatusFailure(error.message),
                NotifyActions.serverErrorNotification({
                  error,
                  message: this.translateService.instant(
                    'errors.loadSmsStatus'
                  ),
                })
              )
            )
          )
      )
    )
  );

  setDefaultLimit$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CardDetailsActions.setDefaultLimitRequest),
      withLatestFrom(this.store.select(CardDetailsSelectors.cardRouteParams)),
      switchMap(([action, routeParams]) =>
        clientIdWithData(this.store, {
          cardId: routeParams.cardId,
          limitType: action.payload.type,
        })
      ),
      switchMap((payload) =>
        this.cardsService
          .setDefaultLimit(
            payload.data.cardId,
            payload.data.limitType,
            payload.clientId
          )
          .pipe(
            map((_) => CardDetailsActions.setDefaultLimitSuccess()),
            catchError((error) =>
              of(
                CardDetailsActions.setDefaultLimitFailure(error.message),
                NotifyActions.serverErrorNotification({
                  error,
                  message: this.translateService.instant(
                    'errors.setDefaultLimit'
                  ),
                })
              )
            )
          )
      )
    )
  );

  openEditLimitModal$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CardDetailsActions.openEditLimitModal),
        tap((action) => {
          const modalRef = this.modalService.open(EditLimitModalComponent);
          modalRef.componentInstance.config = action.config;
        })
      ),
    { dispatch: false }
  );

  updateLimit$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CardDetailsActions.updateLimitRequest),
      withLatestFrom(this.store.select(CardDetailsSelectors.cardRouteParams)),
      switchMap(([action, routeParams]) =>
        clientIdWithData(this.store, {
          cardId: routeParams.cardId,
          limit: action.payload,
        })
      ),
      switchMap((payload) =>
        this.cardsService
          .updateLimit(
            payload.data.cardId,
            payload.data.limit,
            payload.clientId
          )
          .pipe(
            map(() => CardDetailsActions.updateLimitSuccess()),
            catchError((error) =>
              of(
                CardDetailsActions.updateLimitFailure(error.message),
                NotifyActions.serverErrorNotification({
                  error,
                  message: this.translateService.instant('errors.updateLimit'),
                })
              )
            )
          )
      )
    )
  );

  updateLimitSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CardDetailsActions.updateLimitSuccess),
      switchMap(() => [
        CardDetailsActions.loadLimitsRequest(),
        NotifyActions.successNotification({
          message: this.translateService.instant(
            'components.corpcard.success.changeLimit'
          ),
        }),
      ])
    )
  );

  setDefaultLimitSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CardDetailsActions.setDefaultLimitSuccess),
      switchMap(() => [
        CardDetailsActions.loadLimitsRequest(),
        NotifyActions.successNotification({
          message: this.translateService.instant(
            'components.corpcard.success.setDefaultLimit'
          ),
        }),
      ])
    )
  );

  handleError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        CardDetailsActions.loadCardFailure,
        CardDetailsActions.loadLimitsFailure,
        CardDetailsActions.loadSmsStatusFailure
      ),
      map(() => CardDetailsActions.goToCards())
    )
  );

  goToCards$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CardDetailsActions.goToCards),
      map(() =>
        RouteActions.routeTo({
          route: `cards`,
        })
      )
    )
  );
}
