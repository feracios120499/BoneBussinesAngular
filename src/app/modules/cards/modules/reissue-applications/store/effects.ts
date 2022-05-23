import { Injectable } from '@angular/core';
import { B1HistoryModalComponent } from '@modals/b1-history-modal/b1-history-modal.component';
import { B1SignModalComponent } from '@modals/b1-sign-modal/b1-sign-modal.component';
import { DocumentHistory } from '@models/document-history.model';
import { HistoryModalConfig } from '@models/history-modal-config.model';
import { SignModalConfig } from '@models/sign-modal-config.model';
import { SignSaveResponse } from '@models/sign-response.model';
import { Actions, createEffect, EffectNotification, ofType, OnRunEffects } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { ReissueApplicationSignService } from '@modules/cards/services/reissue-application-sign-service/reissue-application-sign.service';
import { ReissueApplicationService } from '@modules/cards/services/reissue-application-service/reissue-application.service';
import { ModalService } from '@services/modal.service';
import { SignService } from '@services/sign/sign.service';
import { NotifyActions } from '@store/notify/actions';
import { clientIdWithData, clientIdWithoudData } from '@store/shared';
import { SharedActions } from '@store/shared/actions';
import { Observable, of } from 'rxjs';
import { catchError, exhaustMap, map, switchMap, takeUntil, tap, withLatestFrom } from 'rxjs/operators';
import { CardReissueActions } from './actions';
import { CardReissueSelectors } from './selectors';
import { CardReissueState, CARD_REISSUE_KEY } from './store';

@Injectable()
export class CardReissueEffect implements OnRunEffects {
  constructor(
    private actions$: Actions,
    private store: Store,
    private translateService: TranslateService,
    private reissueApplicationService: ReissueApplicationService,
    private reissueApplicationSignService: ReissueApplicationSignService,
    private signService: SignService,
    private modalService: ModalService
  ) {}

  reloadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        CardReissueActions.setTab,
        CardReissueActions.signApplicationsSuccess,
        CardReissueActions.signApplicationsFailure,
        CardReissueActions.removeApplicationsFailure,
        CardReissueActions.removeApplicationsSuccess,
        CardReissueActions.sendToBankApplicationsFailure,
        CardReissueActions.sendToBankApplicationsSuccess
      ),
      switchMap((action) => [CardReissueActions.loadCountRequest(), CardReissueActions.loadApplicationsRequest()])
    )
  );

  loadCount$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CardReissueActions.loadCountRequest),
      switchMap((_) => clientIdWithoudData(this.store)),
      switchMap((clientId) =>
        this.reissueApplicationService
          .getCount(clientId)
          .pipe(map((count) => CardReissueActions.loadCountSuccess(count)))
      )
    )
  );

  loadApplications$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CardReissueActions.loadApplicationsRequest),
      withLatestFrom(this.store.select(CardReissueSelectors.tab)),
      switchMap(([_, tab]) => clientIdWithData(this.store, tab)),
      switchMap((payload) =>
        this.reissueApplicationService
          .getApplications(payload.data, payload.clientId)
          .pipe(map((applications) => CardReissueActions.loadApplicationsSuccess(applications)))
      )
    )
  );

  confirmSign$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CardReissueActions.confirmSign),
      withLatestFrom(this.store.select(CardReissueSelectors.selectedIds)),
      map(([_, ids]) => {
        if (ids.length === 0) {
          return NotifyActions.warningNotification({
            message: this.translateService.instant('shared.selectDocumentsBeforeSign'),
          });
        }
        return SharedActions.showConfirm({
          config: {
            text: this.translateService.instant('components.pay.signTheDocumentsInNumber').replace('{0}', ids.length),
            callback: () => this.store.dispatch(CardReissueActions.signApplicationsRequest(ids)),
          },
        });
      })
    )
  );

  signApplications$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CardReissueActions.signApplicationsRequest),
      switchMap((action) => clientIdWithData(this.store, action.payload)),
      switchMap((payload) =>
        this.reissueApplicationSignService.getBuffers(payload.data, payload.clientId).pipe(
          switchMap((buffers) =>
            this.signService.signBuffers(buffers).pipe(
              switchMap((signes) => {
                const successSignes = signes.filter((p) => p.isSuccess);
                const errors = signes
                  .filter((p) => !p.isSuccess)
                  .map((item) => {
                    const error: SignSaveResponse = {
                      id: item.id,
                      number: item.number,
                      isSuccess: item.isSuccess,
                      error: item.error,
                    };
                    return error;
                  });
                if (successSignes.length !== 0) {
                  return this.reissueApplicationSignService
                    .addSignatures(successSignes, payload.clientId)
                    .pipe(
                      map((saveSignResponse) =>
                        CardReissueActions.signApplicationsSuccess([...saveSignResponse, ...errors])
                      )
                    );
                } else {
                  return of(CardReissueActions.signApplicationsSuccess(errors));
                }
              }),
              catchError((error) =>
                of(
                  CardReissueActions.signApplicationsFailure(error.message),
                  NotifyActions.serverErrorNotification({
                    error,
                    message: this.translateService.instant('components.corpcard.errors.signApplications'),
                  })
                )
              )
            )
          )
        )
      ),
      catchError((error) =>
        of(
          CardReissueActions.signApplicationsFailure(error.message),
          NotifyActions.serverErrorNotification({
            error,
            message: this.translateService.instant('components.corpcard.errors.signApplications'),
          })
        )
      )
    )
  );

  signApplicationsSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CardReissueActions.signApplicationsSuccess),
      map((action) =>
        NotifyActions.arrayNotification({
          results: action.payload.map((item) => ({
            number: item.number,
            isSuccess: item.isSuccess,
            message: item.error?.message || '',
          })),
        })
      )
    )
  );

  showHistory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CardReissueActions.showApplicationHistoryRequest),
      switchMap((action) => clientIdWithData(this.store, action.payload)),
      switchMap((payload) =>
        this.reissueApplicationService.getHistory(payload.data.id, payload.clientId).pipe(
          map((history) => {
            const modal = this.modalService.open(B1HistoryModalComponent, {
              windowClass: 'left-modal',
            });
            const config: HistoryModalConfig = {
              title: 'components.corpcard.reissue.history',
              subtitle: 'components.corpcard.reissue.documentNumber',
              number: payload.data.id.toString(),
              createDate: payload.data.createDate,
              statusPrefix: 'statuses.history.',
              history: history.map((value) => {
                const historyItem: DocumentHistory = {
                  id: value.id,
                  statusDate: value.statusChangeDate,
                  message: value.statusChangeMessage,
                  statusId: value.statusId,
                  userName: value.userName,
                };
                return historyItem;
              }),
            };
            modal.componentInstance.config = config;
            return CardReissueActions.showApplicationHistorySuccess(history);
          })
        )
      )
    )
  );

  showSignes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CardReissueActions.showApplicationSignRequest),
      switchMap((action) => clientIdWithData(this.store, action.payload)),
      switchMap((payload) =>
        this.reissueApplicationSignService.getSignes(payload.data.id, payload.clientId).pipe(
          map((signes) => {
            const modal = this.modalService.open(B1SignModalComponent, {
              windowClass: 'left-modal',
            });
            const config: SignModalConfig = {
              title: 'components.corpcard.reissue.documentSigns',
              subtitle: 'components.corpcard.reissue.documentNumber',
              number: payload.data.id.toString(),
              createDate: payload.data.createDate,
              signes,
            };
            modal.componentInstance.config = config;
            return CardReissueActions.showApplicationSignSuccess(signes);
          })
        )
      )
    )
  );

  confirmRemove$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CardReissueActions.confirmRemove),
      withLatestFrom(this.store.select(CardReissueSelectors.selectedIds)),
      map(([_, ids]) => {
        if (ids.length === 0) {
          return NotifyActions.warningNotification({
            message: this.translateService.instant('shared.selectDocumentsBeforeRemove'),
          });
        }
        return SharedActions.showConfirm({
          config: {
            text: this.translateService.instant('components.pay.areYouSureToDeletePayments').replace('{0}', ids.length),
            callback: () => this.store.dispatch(CardReissueActions.removeApplicationsRequest(ids)),
          },
        });
      })
    )
  );

  removeApplications$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CardReissueActions.removeApplicationsRequest),
      switchMap((action) => clientIdWithData(this.store, action.payload)),
      switchMap((payload) =>
        this.reissueApplicationService.removeApplications(payload.data, payload.clientId).pipe(
          map((result) => CardReissueActions.removeApplicationsSuccess(result)),
          catchError((error) =>
            of(
              CardReissueActions.removeApplicationsFailure(error.message),
              NotifyActions.serverErrorNotification({
                error,
                message: this.translateService.instant('components.corpcard.errors.removeApplications'),
              })
            )
          )
        )
      )
    )
  );

  confirmSendToBank$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CardReissueActions.confirmSendToBank),
      withLatestFrom(this.store.select(CardReissueSelectors.selectedIds)),
      map(([_, ids]) => {
        if (ids.length === 0) {
          return NotifyActions.warningNotification({
            message: this.translateService.instant('shared.selectDocumentsBeforeSendToBank'),
          });
        }
        return SharedActions.showConfirm({
          config: {
            text: this.translateService.instant('components.pay.toBankDocsConfirm').replace('{0}', ids.length),
            callback: () => this.store.dispatch(CardReissueActions.sendToBankApplicationsRequest(ids)),
          },
        });
      })
    )
  );

  sendToBankApplication$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CardReissueActions.sendToBankApplicationsRequest),
      switchMap((action) => clientIdWithData(this.store, action.payload)),
      switchMap((payload) =>
        this.reissueApplicationService.sendToBank(payload.data, payload.clientId).pipe(
          map((result) => CardReissueActions.sendToBankApplicationsSuccess(result)),
          catchError((error) =>
            of(
              CardReissueActions.sendToBankApplicationsFailure(error.message),
              NotifyActions.serverErrorNotification({
                error,
                message: this.translateService.instant('components.corpcard.errors.sendToBankApplications'),
              })
            )
          )
        )
      )
    )
  );

  arrayNotification$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CardReissueActions.removeApplicationsSuccess, CardReissueActions.removeApplicationsSuccess),
      map((results) =>
        NotifyActions.arrayNotification({
          results: results.payload.map((item) => ({
            number: item.id,
            isSuccess: item.isSuccess,
            message: item.message,
          })),
        })
      )
    )
  );

  ngrxOnRunEffects(resolvedEffects$: Observable<EffectNotification>): Observable<EffectNotification> {
    return this.actions$.pipe(
      ofType(CardReissueActions.init),
      tap((action) => console.log(action)),
      exhaustMap(() => resolvedEffects$.pipe(takeUntil(this.actions$.pipe(ofType(CardReissueActions.destroy)))))
    );
  }
}
