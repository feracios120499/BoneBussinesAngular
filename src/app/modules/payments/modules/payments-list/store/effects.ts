import { Injectable } from '@angular/core';
import { PaginationHelper } from '@helpers/pagination.helper';
import { B1HistoryModalComponent } from '@modals/b1-history-modal/b1-history-modal.component';
import { B1SignModalComponent } from '@modals/b1-sign-modal/b1-sign-modal.component';
import { ArrayNotification } from '@models/array-notification.model';
import { DocumentHistory } from '@models/document-history.model';
import { PaymentAction } from '@models/enums/payment-action.enum';
import { StatusCode } from '@models/enums/status-code.enum';
import { HistoryModalConfig } from '@models/history-modal-config.model';
import { PaymentForm } from '@models/payment-form.model';
import { PaymentActionModal, PaymentModal } from '@models/payment-modal.model';
import { SignModalConfig } from '@models/sign-modal-config.model';
import { SignSaveResponse } from '@models/sign-response.model';
import { PaymentDetails } from '@modules/payments/models/payment-details.model';
import { PaymentsListItem } from '@modules/payments/models/payments-list-item.model';
import { PaymentsResponseResult } from '@modules/payments/models/payments-response.model';
import { HttpPaymentsService } from '@modules/payments/services/payments-service/http-payments.service';
import { act, Actions, createEffect, EffectNotification, ofType, OnRunEffects } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { ModalService } from '@services/modal.service';
import { SignService } from '@services/sign/sign.service';
import { NotifyActions } from '@store/notify/actions';
import { RouteActions } from '@store/route/actions';
import { clientIdWithData, clientIdWithoudData } from '@store/shared';
import { SharedActions } from '@store/shared/actions';
import { Observable, of } from 'rxjs';
import { catchError, exhaustMap, map, switchMap, takeUntil, tap, withLatestFrom } from 'rxjs/operators';
import { PaymentsExportModalComponent } from '../components/payments-export-modal/payments-export-modal.component';
import { PaymentsImportModalComponent } from '../components/payments-import-modal/payments-import-modal.component';
import { PayListActions } from './actions';
import { PayListSelectors } from './selectors';

@Injectable()
export class PayListEffects implements OnRunEffects {
  constructor(
    private actions$: Actions,
    private store: Store,
    private paymentsService: HttpPaymentsService,
    private signService: SignService,
    private translateService: TranslateService,
    private modalService: ModalService
  ) {}

  loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        PayListActions.setTab,
        PayListActions.setRange,
        PayListActions.deletePaymentsSuccess,
        PayListActions.deletePaymentsFailure,
        PayListActions.sendOnSignPaymentsSuccess,
        PayListActions.sendOnSignPaymentsFailure,
        PayListActions.signPaymentsSuccess,
        PayListActions.signPaymentsFailure,
        PayListActions.sendToBankPaymentsSuccess,
        PayListActions.sendToBankPaymentsFailure
      ),
      switchMap((_) => [PayListActions.loadCountRequest(), PayListActions.loadPaymentsRequest()])
    )
  );

  loadPayments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PayListActions.loadPaymentsRequest),
      switchMap((_) => clientIdWithoudData(this.store)),
      withLatestFrom(this.store.select(PayListSelectors.rangeWithStatus)),
      switchMap(([clientId, payload]) =>
        this.paymentsService.getPayments(payload.status, payload.range, clientId).pipe(
          map((payments) => PayListActions.loadPaymentsSuccess(payments)),
          catchError((error) => of(PayListActions.loadPaymentsFailure(error.message)))
        )
      )
    )
  );

  loadCount$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PayListActions.loadCountRequest),
      switchMap((_) => clientIdWithoudData(this.store)),
      switchMap((payload) =>
        this.paymentsService.getCount(payload).pipe(
          map((count) => PayListActions.loadCountSuccess(count)),
          catchError((error) => of(PayListActions.loadCountFailure(error.message)))
        )
      )
    )
  );

  printPayments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PayListActions.printPaymentsRequest),
      switchMap((action) => clientIdWithData(this.store, action.payload)),
      switchMap((payload) =>
        this.paymentsService.printPayments(payload.data, payload.clientId).pipe(
          map((file) => PayListActions.printPaymentsSuccess(file)),
          catchError((error) => of(PayListActions.printPaymentsFailure(error.message)))
        )
      )
    )
  );

  printPaymentsSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PayListActions.printPaymentsSuccess),
      map((file) => SharedActions.printFile({ html: file.payload }))
    )
  );

  deletePayments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PayListActions.deletePaymentsRequest),
      switchMap((action) => clientIdWithData(this.store, action.payload)),
      switchMap((payload) =>
        this.paymentsService.deletePayments(payload.data, payload.clientId).pipe(
          map((results) => PayListActions.deletePaymentsSuccess(results)),
          catchError((error) => of(PayListActions.deletePaymentsFailure(error.message)))
        )
      )
    )
  );

  sendOnSignPayments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PayListActions.sendOnSignPaymentsRequest),
      switchMap((action) => clientIdWithData(this.store, action.payload)),
      switchMap((payload) =>
        this.paymentsService.sendOnSign(payload.data, payload.clientId).pipe(
          map((results) => PayListActions.sendOnSignPaymentsSuccess(results)),
          catchError((error) => of(PayListActions.sendOnSignPaymentsFailure(error.message)))
        )
      )
    )
  );

  sendToBankPayments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PayListActions.sendToBankPaymentsRequest),
      switchMap((action) => clientIdWithData(this.store, action.payload)),
      switchMap((payload) =>
        this.paymentsService.sendToBank(payload.data, payload.clientId).pipe(
          map((results) => PayListActions.sendToBankPaymentsSuccess(results)),
          catchError((error) => of(PayListActions.sendToBankPaymentsFailure(error.message)))
        )
      )
    )
  );

  arraySuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        PayListActions.deletePaymentsSuccess,
        PayListActions.sendOnSignPaymentsSuccess,
        PayListActions.sendToBankPaymentsSuccess
      ),
      map((action) => NotifyActions.arrayNotification({ results: this.mapResults(action.payload) }))
    )
  );

  signApplications$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PayListActions.signPaymentsRequest),
      switchMap((action) => clientIdWithData(this.store, action.payload)),
      switchMap((payload) =>
        this.paymentsService.getBuffers(payload.data, payload.clientId).pipe(
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
                  return this.paymentsService
                    .addSignatures(successSignes, payload.clientId)
                    .pipe(
                      map((saveSignResponse) => PayListActions.signPaymentsSuccess([...saveSignResponse, ...errors]))
                    );
                } else {
                  return of(PayListActions.signPaymentsSuccess(errors));
                }
              }),
              catchError((error) =>
                of(
                  PayListActions.signPaymentsSuccess(error.message),
                  NotifyActions.serverErrorNotification({
                    error,
                    message: this.translateService.instant('components.pay.errors.signPayments'),
                  })
                )
              )
            )
          )
        )
      ),
      catchError((error) =>
        of(
          PayListActions.signPaymentsFailure(error.message),
          NotifyActions.serverErrorNotification({
            error,
            message: this.translateService.instant('components.pay.errors.signPayments'),
          })
        )
      )
    )
  );

  signPaymentsSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PayListActions.signPaymentsSuccess),
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

  showTransaction$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PayListActions.showPayment),
      switchMap((action) => [
        SharedActions.setPaymentLoader({ loader: PayListSelectors.isLoading }),
        SharedActions.showPayment({
          payment: this.mapPayment(action.payment, action.payments),
        }),
        PayListActions.setPayment({ payment: action.payment, payments: action.payments }),
      ])
    )
  );

  // setPaymentPartial$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(PayListActions.setPayment),
  //     map((action) => SharedActions.setPayment({ payment: this.mapPayment(action.payment, action.payments) }))
  //   )
  // );
  setPayment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PayListActions.setPayment),
      switchMap((action) => clientIdWithData(this.store, { payment: action.payment, payments: action.payments })),
      switchMap((payload) =>
        this.paymentsService.getPayment(payload.data.payment.id, payload.clientId).pipe(
          map((payment) =>
            SharedActions.setPayment({
              payment: this.mapPaymentDetails(payment, payload.data.payment, payload.data.payments),
            })
          )
        )
      )
    )
  );

  showHistory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PayListActions.showHistoryRequest),
      switchMap((action) => clientIdWithData(this.store, action.payload)),
      switchMap((payload) =>
        this.paymentsService.getHistory(payload.data.id, payload.clientId).pipe(
          map((history) => {
            const modal = this.modalService.open(B1HistoryModalComponent, {
              windowClass: 'left-modal',
            });
            const config: HistoryModalConfig = {
              title: 'components.pay.PaymentsHistory',
              subtitle: 'components.pay.PaymentDocumentNumber',
              number: payload.data.number,
              createDate: payload.data.dateCreated,
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
            console.log(config.history);
            modal.componentInstance.config = config;
            return PayListActions.showHistorySuccess(history);
          })
        )
      )
    )
  );

  showSignes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PayListActions.showSignesRequest),
      switchMap((action) => clientIdWithData(this.store, action.payload)),
      switchMap((payload) =>
        this.paymentsService.getSignes(payload.data.id, payload.clientId).pipe(
          map((signes) => {
            const modal = this.modalService.open(B1SignModalComponent, {
              windowClass: 'left-modal',
            });
            const config: SignModalConfig = {
              title: 'components.pay.paymentSignatures',
              subtitle: 'components.pay.PaymentDocumentNumber',
              number: payload.data.number,
              createDate: payload.data.dateCreated,
              signes,
            };
            modal.componentInstance.config = config;
            return PayListActions.showSignesSuccess(signes);
          }),
          catchError((error) => of(PayListActions.showSignesFailure(error.message)))
        )
      )
    )
  );

  dublicatePayment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PayListActions.dublicatePaymentRequest),
      switchMap((action) => clientIdWithData(this.store, action.payload)),
      switchMap((payload) =>
        this.paymentsService.getPayment(payload.data.id, payload.clientId).pipe(
          switchMap((payment) => {
            const paymentForm: PaymentForm = {
              amount: payment.amount,
              additionalDetails: payment.additionalDetails,
              paymentDate: payment.paymentDate,
              paymentValueDate: payment.paymentValueDate,
              purpose: payment.purpose,
              sender: {
                accCurrencyCode: payment.sender.accCurrencyCode,
                accNumber: payment.sender.accNumber,
                name: payment.sender.name,
                taxCode: payment.sender.taxCode,
                accCurrencyId: payment.sender.accCurrencyId,
                accId: payment.sender.accId,
                bankCode: payment.sender.bankCode,
              },
              recipient: {
                accCurrencyCode: payment.recipient.accCurrencyCode,
                accNumber: payment.recipient.accNumber,
                name: payment.recipient.name,
                taxCode: payment.recipient.taxCode,
                accCurrencyId: payment.recipient.accCurrencyId,
                accId: payment.recipient.accId,
                bankCode: payment.recipient.bankCode,
              },
            };
            const result: any[] = [
              PayListActions.dublicatePaymentSuccess(),
              SharedActions.setCreatePayment({ payment: paymentForm }),
            ];
            if (payment.typeId.startsWith('INNER')) {
              result.push(RouteActions.routeTo({ route: '/payments/create/my-accounts' }));
            } else if (payment.typeId.startsWith('SWIFT')) {
              result.push(RouteActions.routeTo({ route: '/payments/create/swift' }));
            } else {
              result.push(RouteActions.routeTo({ route: '/payments/create/within-country' }));
            }
            return result;
          })
        )
      )
    )
  );

  openExportModal$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(PayListActions.openExportModal),
        tap((action) => {
          const modal = this.modalService.open(PaymentsExportModalComponent);
          modal.componentInstance.downloadCallback = (format: string) =>
            this.store.dispatch(PayListActions.exportPaymentsRequest({ ids: action.ids, format }));
        })
      ),
    { dispatch: false }
  );

  exportPaymentsRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PayListActions.exportPaymentsRequest),
      switchMap((action) => clientIdWithData(this.store, action.payload)),
      switchMap((payload) =>
        this.paymentsService.exportPayments(payload.data.ids, payload.data.format, payload.clientId).pipe(
          map((file) => PayListActions.exportPaymentsSuccess(file)),
          catchError((error) => of(PayListActions.exportPaymentsFailure(error.message)))
        )
      )
    )
  );

  exportPaymentsSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PayListActions.exportPaymentsSuccess),
      map((action) => {
        this.modalService.close(PaymentsExportModalComponent);
        return SharedActions.saveFile({ file: action.payload });
      })
    )
  );

  openImportModal$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(PayListActions.openImportModal),
        tap((action) => {
          const modal = this.modalService.open(PaymentsImportModalComponent, { windowClass: 'import-modal' });
        })
      ),
    { dispatch: false }
  );

  importPayments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PayListActions.importPaymentsRequest),
      switchMap((action) => clientIdWithData(this.store, action.payload)),
      switchMap((payload) =>
        this.paymentsService.importCommonPayments(payload.data.files, payload.clientId).pipe(
          map((response) => PayListActions.importPaymentsSuccess(response)),
          catchError((error) => of(PayListActions.importPaymentsFailure(error.message)))
        )
      )
    )
  );

  importPaymentsSucess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PayListActions.importPaymentsSuccess),
      map((action) => RouteActions.routeTo({ route: 'payments/import-common', state: action.payload }))
    )
  );

  private mapPaymentDetails(
    paymentDetails: PaymentDetails,
    payment: PaymentsListItem,
    payments: PaymentsListItem[]
  ): PaymentModal {
    const paymentModal: PaymentModal = {
      number: paymentDetails.number,
      documentDate: paymentDetails.paymentDate,
      valueDate: paymentDetails.paymentValueDate,
      statusCode: payment.statusCode,
      payedDate: paymentDetails.bankPayedDate,
      purpose: paymentDetails.purpose,
      amount: paymentDetails.amount,
      amountString: paymentDetails.amountString,
      currencyCode: paymentDetails.sender.accCurrencyCode || paymentDetails.recipient.accCurrencyCode,
      sender: {
        name: paymentDetails.sender.name,
        number: paymentDetails.sender.accNumber,
        taxCode: paymentDetails.sender.taxCode,
      },
      recipient: {
        name: paymentDetails.recipient.name,
        number: paymentDetails.recipient.accNumber,
        taxCode: paymentDetails.recipient.taxCode,
        details: paymentDetails.additionalDetails,
        countryName: paymentDetails.recipientCountryName,
      },
      actions: this.getActions(payment),
      isPaginationAvailable: false,
    };

    const pagination = new PaginationHelper<PaymentsListItem>(payments);

    pagination.startFrom(payment);

    paymentModal.isPaginationAvailable = payments.length > 1;
    paymentModal.next = () => this.store.dispatch(PayListActions.setPayment({ payment: pagination.next(), payments }));
    paymentModal.previous = () =>
      this.store.dispatch(PayListActions.setPayment({ payment: pagination.previous(), payments }));

    return paymentModal;
  }

  private mapPayment(payment: PaymentsListItem, payments: PaymentsListItem[]): PaymentModal {
    const paymentModal: PaymentModal = {
      number: payment.number,
      documentDate: payment.docDate,
      valueDate: payment.valueDate,
      statusCode: payment.statusCode,
      payedDate: payment.dateBankPayed,
      purpose: payment.purpose,
      amount: payment.amount,
      amountString: payment.amountString,
      currencyCode: payment.sender.accCurrencyCode || payment.recipient.accCurrencyCode,
      sender: {
        name: payment.sender.name,
        number: payment.sender.accNumber,
        taxCode: payment.sender.taxCode,
      },
      recipient: {
        name: payment.recipient.name,
        number: payment.recipient.accNumber,
        taxCode: payment.recipient.taxCode,
      },
      actions: this.getActions(payment),
      isPaginationAvailable: false,
    };
    const pagination = new PaginationHelper<PaymentsListItem>(payments);

    pagination.startFrom(payment);

    paymentModal.isPaginationAvailable = payments.length > 1;
    paymentModal.next = () =>
      this.store.dispatch(SharedActions.setPayment({ payment: this.mapPayment(pagination.next(), payments) }));
    paymentModal.previous = () =>
      this.store.dispatch(SharedActions.setPayment({ payment: this.mapPayment(pagination.previous(), payments) }));

    return paymentModal;
  }

  private mapResults(results: PaymentsResponseResult[]): ArrayNotification[] {
    return results.map((result) => {
      const notify: ArrayNotification = {
        number: result.id,
        isSuccess: result.isSuccess,
        message: result.message,
      };
      return notify;
    });
  }

  private getActions(payment: PaymentsListItem): PaymentActionModal {
    const actions: PaymentActionModal = {};
    actions[PaymentAction.print] = () => this.store.dispatch(PayListActions.printPaymentsRequest([payment.id]));
    actions[PaymentAction.dublicate] = (modal) => {
      this.store.dispatch(PayListActions.dublicatePaymentRequest(payment));
      modal.close();
    };

    return actions;
  }

  ngrxOnRunEffects(resolvedEffects$: Observable<EffectNotification>): Observable<EffectNotification> {
    return this.actions$.pipe(
      ofType(PayListActions.init),
      tap((action) => console.log(action)),
      exhaustMap(() => resolvedEffects$.pipe(takeUntil(this.actions$.pipe(ofType(PayListActions.destroy)))))
    );
  }
}
