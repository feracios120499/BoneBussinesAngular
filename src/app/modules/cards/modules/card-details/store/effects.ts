import { Injectable } from '@angular/core';
import { AcctActions } from '@modules/accounts/store/actions';
import { CardStatementModalComponent } from '@modules/cards/modules/card-details/components/card-statement-modal/card-statement-modal.component';
import { EditLimitModalComponent } from '@modules/cards/modules/card-details/components/edit-limit-modal/edit-limit-modal.component';
import { LockCardConfirmComponent } from '@modules/cards/modules/card-details/components/lock-card-confirm/lock-card-confirm.component';
import { ReissueApplicationModalComponent } from '@modules/cards/modules/card-details/components/reissue-application-modal/reissue-application-modal.component';
import { CardStatementModalConfig } from '@modules/cards/modules/card-details/models/card-statement-modal-config.model';
import { act, Actions, createEffect, ofType, OnRunEffects } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { CardsService } from '@modules/cards/services/cards-service/cards.service';
import { ReissueApplicationService } from '@modules/cards/services/reissue-application-service/reissue-application.service';
import { ModalService } from '@services/modal.service';
import { NotifyActions } from '@store/notify/actions';
import { RouteActions } from '@store/route/actions';
import { clientIdWithData } from '@store/shared';
import { SharedActions } from '@store/shared/actions';
import { UserSelectors } from '@store/user/selectors';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap, tap, withLatestFrom } from 'rxjs/operators';
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
    private translateService: TranslateService,
    private reissueApplicationService: ReissueApplicationService
  ) {}

  loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CardDetailsActions.loadData),
      switchMap(() => [
        CardDetailsActions.loadCardRequest(),
        CardDetailsActions.loadSmsStatusRequest(),
        CardDetailsActions.loadLimitsRequest(),
        CardDetailsActions.loadLastReissueApplicationRequest(),
      ])
    )
  );

  loadCard$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CardDetailsActions.loadCardRequest),
      withLatestFrom(this.store.select(CardDetailsSelectors.cardRouteParams)),
      switchMap(([, routeParams]) => clientIdWithData(this.store, routeParams)),
      switchMap((payload) =>
        this.cardsService.getCardDetails(payload.data.cardId, payload.data.accountId, payload.clientId).pipe(
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
        this.cardsService.getCardLimits(payload.data.cardId, payload.clientId).pipe(
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
        this.cardsService.getCardSmsStatus(payload.data.cardId, payload.clientId).pipe(
          map((limits) => CardDetailsActions.loadSmsStatusSuccess(limits)),
          catchError((error) =>
            of(
              CardDetailsActions.loadSmsStatusFailure(error.message),
              NotifyActions.serverErrorNotification({
                error,
                message: this.translateService.instant('errors.loadSmsStatus'),
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
        this.cardsService.setDefaultLimit(payload.data.cardId, payload.data.limitType, payload.clientId).pipe(
          map((_) => CardDetailsActions.setDefaultLimitSuccess()),
          catchError((error) =>
            of(
              CardDetailsActions.setDefaultLimitFailure(error.message),
              NotifyActions.serverErrorNotification({
                error,
                message: this.translateService.instant('errors.setDefaultLimit'),
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
        this.cardsService.updateLimit(payload.data.cardId, payload.data.limit, payload.clientId).pipe(
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
          message: this.translateService.instant('components.corpcard.success.changeLimit'),
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
          message: this.translateService.instant('components.corpcard.success.setDefaultLimit'),
        }),
      ])
    )
  );

  disableSms$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CardDetailsActions.updateSmsStatusRequest),
      switchMap((action) => clientIdWithData(this.store, action.payload)),
      switchMap((payload) =>
        this.cardsService
          .updateSmsStatus(payload.data.cardId, payload.data.phoneNumber, payload.data.isEnabled, payload.clientId)
          .pipe(
            switchMap((_) => [
              CardDetailsActions.updateSmsStatusSuccess(),
              CardDetailsActions.loadSmsStatusRequest(),
              NotifyActions.successNotification({
                message: this.translateService.instant(
                  payload.data.isEnabled
                    ? 'components.corpcard.success.activateSms'
                    : 'components.corpcard.success.disableSms'
                ),
              }),
            ]),
            catchError((error) =>
              of(
                CardDetailsActions.updateSmsStatusFailure(error.message),
                NotifyActions.serverErrorNotification({
                  error,
                  message: this.translateService.instant(
                    payload.data.isEnabled
                      ? 'components.corpcard.errors.activateSms'
                      : 'components.corpcard.errors.disableSms'
                  ),
                })
              )
            )
          )
      )
    )
  );

  showConfirmLockCard$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CardDetailsActions.showConfirmLockCard),
        tap((action) => {
          const modal = this.modalService.open(LockCardConfirmComponent);
          modal.componentInstance.config = action.config;
        })
      ),
    { dispatch: false }
  );

  lockCard$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CardDetailsActions.lockCardRequest),
      switchMap((action) => clientIdWithData(this.store, action.payload)),
      switchMap((payload) =>
        this.cardsService.lockCard(payload.data.cardId, payload.data.message, payload.clientId).pipe(
          switchMap((_) => [
            CardDetailsActions.lockCardSuccess(),
            CardDetailsActions.loadCardRequest(),
            NotifyActions.successNotification({
              message: this.translateService.instant('components.corpcard.success.lockCard'),
            }),
          ]),
          catchError((error) =>
            of(
              CardDetailsActions.lockCardFailure(error.message),
              NotifyActions.serverErrorNotification({
                error,
                message: this.translateService.instant('components.corpcard.errors.lockCard'),
              })
            )
          )
        )
      )
    )
  );

  unlockCard$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CardDetailsActions.unlockCardRequest),
      switchMap((action) => clientIdWithData(this.store, action.payload)),
      switchMap((payload) =>
        this.cardsService.unlockCard(payload.data.cardId, payload.clientId).pipe(
          switchMap((_) => [
            CardDetailsActions.unlockCardSuccess(),
            CardDetailsActions.loadCardRequest(),
            NotifyActions.successNotification({
              message: this.translateService.instant('components.corpcard.success.unlockCard'),
            }),
          ]),
          catchError((error) =>
            of(
              CardDetailsActions.unlockCardFailure(error.message),
              NotifyActions.serverErrorNotification({
                error,
                message: this.translateService.instant('components.corpcard.errors.unlockCard'),
              })
            )
          )
        )
      )
    )
  );

  loadLastReissueApplication$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CardDetailsActions.loadLastReissueApplicationRequest),
      withLatestFrom(this.store.select(CardDetailsSelectors.cardRouteParams)),
      switchMap(([, routeParams]) => clientIdWithData(this.store, routeParams)),
      switchMap((payload) =>
        this.reissueApplicationService.getLastApplication(payload.data.cardId, payload.clientId).pipe(
          map((application) => CardDetailsActions.loadLastReissueApplicationSuccess(application)),
          catchError((error) => of(CardDetailsActions.loadLastReissueApplicationFailure(error.message)))
        )
      )
    )
  );

  createReissueApplication$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CardDetailsActions.createReissueApplicationRequest),
      switchMap((action) => clientIdWithData(this.store, action.payload)),
      switchMap((payload) =>
        this.reissueApplicationService.createApplication(payload.data, payload.clientId).pipe(
          map((application) => CardDetailsActions.createReissueApplicationSuccess(application)),
          catchError((error) =>
            of(
              CardDetailsActions.createReissueApplicationFailure(error.message),
              NotifyActions.serverErrorNotification({
                error,
                message: error.message,
              })
            )
          )
        )
      )
    )
  );

  createReissueApplicationSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CardDetailsActions.createReissueApplicationSuccess),
      switchMap((action) => [
        CardDetailsActions.loadLastReissueApplicationRequest(),
        CardDetailsActions.showCreatedApplication({
          application: action.payload,
        }),
      ])
    )
  );

  showCreatedApplication$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CardDetailsActions.showCreatedApplication),
        tap((action) => {
          const modal = this.modalService.open(ReissueApplicationModalComponent);
          modal.componentInstance.application = action.application;
        })
      ),
    { dispatch: false }
  );

  showStatementModal$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CardDetailsActions.showStatementModal),
        withLatestFrom(this.store.select(UserSelectors.userEmail)),
        tap(([action, email]) => {
          const modal = this.modalService.open(CardStatementModalComponent);
          const config: CardStatementModalConfig = {
            isFree: action.card.isStatementFree,
            formats: action.card.statementTypesList,
            email,
            callback: (result) => {
              const data = {
                result,
                accountId: action.card.accountId,
                bankId: action.card.bankId,
              };
              this.store.dispatch(
                result.sendToEmail ? AcctActions.sendStatementRequest(data) : AcctActions.downloadStatementRequest(data)
              );
            },
            callbackCard: (result) => {
              const data = {
                result,
                cardId: action.card.id,
              };
              this.store.dispatch(
                result.sendToEmail
                  ? CardDetailsActions.sendStatementRequest(data)
                  : CardDetailsActions.downloadStatementRequest(data)
              );
            },
          };
          modal.componentInstance.config = config;
        })
      ),
    { dispatch: false }
  );

  sendStatementRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CardDetailsActions.sendStatementRequest),
      switchMap((action) => clientIdWithData(this.store, action.payload)),
      switchMap((payload) =>
        this.cardsService
          .sendStatement(
            payload.data.cardId,
            payload.clientId,
            payload.data.result.range.start,
            payload.data.result.range.end,
            payload.data.result.format,
            payload.data.result.email as string
          )
          .pipe(
            map((_) => CardDetailsActions.sendStatementSuccess()),
            catchError((error) => of(CardDetailsActions.sendStatementFailure(error.message)))
          )
      )
    )
  );

  downloadStatementRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CardDetailsActions.downloadStatementRequest),
      switchMap((action) => clientIdWithData(this.store, action.payload)),
      switchMap((payload) =>
        this.cardsService
          .getStatement(
            payload.data.cardId,
            payload.clientId,
            payload.data.result.range.start,
            payload.data.result.range.end,
            payload.data.result.format
          )
          .pipe(
            map((file) => CardDetailsActions.downloadStatementSuccess(file)),
            catchError((error) => of(CardDetailsActions.downloadStatementFailure(error.message)))
          )
      )
    )
  );

  downloadStatementSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CardDetailsActions.downloadStatementSuccess),
      map((action) => SharedActions.saveFile({ file: action.payload }))
    )
  );
  // disableSmsSuccess = createEffect(()=>
  // this.actions$.pipe(

  // ))

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

  goToApplications$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CardDetailsActions.goToApplications),
      map(() =>
        RouteActions.routeTo({
          route: `cards/applications`,
        })
      )
    )
  );
}
