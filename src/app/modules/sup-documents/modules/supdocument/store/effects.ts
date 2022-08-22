import { Injectable } from '@angular/core';
import { Actions, createEffect, EffectNotification, ofType, OnRunEffects } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { NotifyActions } from '@store/notify/actions';
import { clientIdWithData } from '@store/shared';
import { Observable, of } from 'rxjs';
import { catchError, exhaustMap, filter, map, switchMap, takeUntil, tap, withLatestFrom } from 'rxjs/operators';
import { ServerError } from '@models/errors/server-error.model';
import { SupDocumentsService } from '@services/sup-documents/sup-documents.service';
import { SupDocumentDetailsActions } from './actions';
import { SupDocument } from '@models/sup-documents/sup-document.model';
import { SupDocumentDetailsSelectors } from './selectors';
import { SetValueAction } from 'ngrx-forms';
import { SharedActions } from '@store/shared/actions';
import { SupDocumentPayment } from '../types/supdocument-payments.model';
import { PaymentActionModal, PaymentModal } from '@models/payment-modal.model';
import { RecursivePartial } from '@b1-types/recursive-partial.type';
import { SwiftModal } from '@models/swift-modal.model';
import { PaymentsService } from '@services/payments/payments.service';
import { PaymentCommon } from '@models/payments/payment-common.model';
import { PaymentAction } from '@models/enums/payment-action.enum';
import { PayListActions } from '@modules/payments/modules/payments-list/store/actions';
import { PaymentDetails } from '@modules/payments/models/payment-details.model';

@Injectable({
  providedIn: 'root',
})
export class SupDocumentDetailsEffects implements OnRunEffects {
  constructor(
    private actions$: Actions,
    private store: Store,
    private supdocumentService: SupDocumentsService,
    private paymentService: PaymentsService,
    private translateService: TranslateService
  ) {}

  private mapPayment(payment: PaymentDetails): PaymentModal | RecursivePartial<SwiftModal> {
    const paymentModal = this.isSwift(payment)
      ? this.mapPaymentListItemToSwiftModal(payment)
      : this.mapPaymentListItemToPaymentModal(payment);

    this.store.dispatch(SharedActions.setPayment({ payment }));

    return paymentModal;
  }

  private mapPaymentListItemToSwiftModal(payment: any): RecursivePartial<SwiftModal> {
    const swiftModal: RecursivePartial<SwiftModal> = {
      amount: payment.amount,
      purpose: payment.purpose,
      paymentDate: payment.paymentDate,
      paymentValueDate: payment.paymentValueDate,
      paymentFee: payment.paymentFee,
      id: payment.id,
      number: payment.number,
      actions: {},
      typePay: payment.typePay,
      isPaginationAvailable: false,
      senderAccount: {
        ...payment.senderAccount,
        accId: payment.senderAccount.accId || 0,
        bankName: payment.senderAccount.bankName || '',
      },
      senderBank: {
        ...payment.senderBank,
      },
      benificiary: {
        ...payment.benificiary,
        name: payment.benificiary.name,
      },
      intermediaryBank: {
        ...payment.intermediaryBank,
      },
    };

    return swiftModal;
  }

  private mapPaymentListItemToPaymentModal(payment: any): PaymentModal {
    const paymentModal: PaymentModal = {
      number: payment.number,
      documentDate: payment.paymentDate,
      valueDate: payment.paymentValueDate,
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
      actions: {},
      isPaginationAvailable: false,
      isNeedMySign: payment.isNeedMySign,
    };

    return paymentModal;
  }

  private isSwift(payment: any): boolean {
    return payment.typeId?.startsWith('SWIFT');
  }

  setDocumentId$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SupDocumentDetailsActions.setSupdocumentId),
      withLatestFrom(this.store.select(SupDocumentDetailsSelectors.editForm)),
      map(([action, formControl]) => new SetValueAction(formControl.controls.id.id, action.id))
    )
  );

  setDocumentName$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SupDocumentDetailsActions.setSupdocumentName),
      withLatestFrom(this.store.select(SupDocumentDetailsSelectors.editForm)),
      map(([action, formControl]) => new SetValueAction(formControl.controls.fileName.id, action.name))
    )
  );

  setDocumentDescription$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SupDocumentDetailsActions.setSupdocumentDescription),
      withLatestFrom(this.store.select(SupDocumentDetailsSelectors.editForm)),
      map(([action, formControl]) => new SetValueAction(formControl.controls.description.id, action.description))
    )
  );

  loadCurrentSupdocument$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SupDocumentDetailsActions.loadCurrentSupdocument),
      withLatestFrom(this.store.select(SupDocumentDetailsSelectors.currentSupdocumentRouteParams)),
      map(([_, routeParams]) => {
        return SupDocumentDetailsActions.loadSupdocumentRequest({
          supdocumentId: routeParams.supdocumentId,
        });
      })
    )
  );

  loadSupdocumentRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SupDocumentDetailsActions.loadSupdocumentRequest),
      switchMap((action) => clientIdWithData(this.store, action.payload)),
      switchMap((payload) =>
        this.supdocumentService
          .getSupdocument(payload.clientId, payload.data.supdocumentId)
          .pipe(map((supdocument) => SupDocumentDetailsActions.loadSupdocumentSuccess(supdocument)))
      ),
      catchError((error) => of(SupDocumentDetailsActions.loadSupdocumentFailure(error.error.message)))
    );
  });

  loadSupdocumentSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(...[SupDocumentDetailsActions.loadSupdocumentSuccess, SupDocumentDetailsActions.updateSupdocumentSuccess]),
      map((action) => SupDocumentDetailsActions.setCurrentSupdocument({ supdocument: action.payload }))
    )
  );

  loadSupdocumentFailure$ = createEffect(() =>
    this.actions$.pipe(
      ofType(...[SupDocumentDetailsActions.loadSupdocumentFailure, SupDocumentDetailsActions.updateSupdocumentFailure]),
      switchMap(() => [
        NotifyActions.errorNotification({
          message: this.translateService.instant('load supdocument failure'),
        }),
      ])
    )
  );

  submitEditForm$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SupDocumentDetailsActions.sumbitEditForm),
      withLatestFrom(this.store.select(SupDocumentDetailsSelectors.editForm)),
      map(([, form]) => SupDocumentDetailsActions.updateSupdocumentRequest(form.value))
    )
  );

  updateSupdocumentRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SupDocumentDetailsActions.updateSupdocumentRequest),
      switchMap((action) => clientIdWithData(this.store, action.payload)),
      withLatestFrom(this.store.select(SupDocumentDetailsSelectors.currentSupdocumentRouteParams)),
      switchMap(([payload]) =>
        this.supdocumentService.updateSupdocument(payload.clientId, payload.data).pipe(
          withLatestFrom(this.store.select(SupDocumentDetailsSelectors.currentSupdocument)),
          filter(([, supdocument]) => supdocument !== undefined),
          map(([, supdocument]) => supdocument as SupDocument),
          map((supdocument) =>
            SupDocumentDetailsActions.updateSupdocumentSuccess({
              ...supdocument,
              fileName: payload.data.fileName,
              description: payload.data.description,
            })
          ),
          catchError((error: ServerError) =>
            of(
              SupDocumentDetailsActions.updateSupdocumentFailure(error.message),
              NotifyActions.serverErrorNotification({
                error,
                message: this.translateService.instant('errors.updateSupdocument'),
              })
            )
          )
        )
      )
    )
  );

  updateSupdocumentSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SupDocumentDetailsActions.updateSupdocumentSuccess),
      map(() =>
        NotifyActions.successNotification({
          message: this.translateService.instant('componets.acct.updateSupdocumentSuccess'),
        })
      )
    )
  );

  loadPaymentsCurrentSupdocument$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SupDocumentDetailsActions.loadPaymentsCurrentSupdocument),
      withLatestFrom(this.store.select(SupDocumentDetailsSelectors.currentSupdocumentRouteParams)),
      map(([, routeParams]) =>
        SupDocumentDetailsActions.loadPaymentsRequest({
          supdocumentId: routeParams.supdocumentId,
        })
      )
    )
  );

  loadPaymentsRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SupDocumentDetailsActions.loadPaymentsRequest),
      switchMap((action) => clientIdWithData(this.store, action.payload)),
      switchMap((payload) =>
        this.supdocumentService.getPayments(payload.clientId, payload.data.supdocumentId).pipe(
          map((payments) => SupDocumentDetailsActions.loadPaymentsSuccess(payments)),
          catchError((error) => {
            return of(
              SupDocumentDetailsActions.loadPaymentsFailure(error.message),
              NotifyActions.serverErrorNotification({
                error,
                message: this.translateService.instant('errors.loadTurnovers'),
              })
            );
          })
        )
      )
    )
  );

  getPaymentInfo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SupDocumentDetailsActions.getPaymentInfo),
      switchMap((action) => clientIdWithData(this.store, action.payment)),
      switchMap((payload) =>
        this.supdocumentService.getPayment(payload.data, payload.clientId).pipe(
          map((payment) => SupDocumentDetailsActions.showPayment({ payment })),
          catchError((error) => {
            return of(
              NotifyActions.serverErrorNotification({
                error,
                message: this.translateService.instant('errors.loadPayment'),
              })
            );
          })
        )
      )
    )
  );

  showPaymentInfo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SupDocumentDetailsActions.showPayment),
      switchMap((action) => [
        SharedActions.showPayment({
          payment: this.mapPayment(action.payment),
          // payment: action.payment,
        }),
        SupDocumentDetailsActions.setPayment({ payment: action.payment }),
      ])
    )
  );

  // openPayments$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(SupDocumentDetailsActions.openPayments),
  //     map((action) => SupDocumentDetailsActions.loadPaymentsRequest(action.supdocumentId))
  //   )
  // );

  // closePayments$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(SupDocumentDetailsActions.closePayments),
  //     withLatestFrom(this.store.select(SupDocumentDetailsSelectors.loadPayments)),
  //     tap(console.log),
  //     filter(([action, loaders]) => loaders.includes(action.id)),
  //     map(([action]) => SupDocumentDetailsActions.loadTransactionsCancel({ id: action.id }))
  //   )
  // );

  // loadTransactions$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(AcctDetailsActions.loadTransactionsRequest),
  //     switchMap((action) =>
  //       clientIdWithData(this.store, action.payload).pipe(
  //         withLatestFrom(notNullAndUndefined(this.store, AcctDetailsSelectors.turnover(action.payload)))
  //       )
  //     ),
  //     mergeMap(([payload, turnover]) => {
  //       if (turnover.transactions && turnover.transactions.length !== 0) {
  //         return of(
  //           AcctDetailsActions.loadTransactionsSuccess({
  //             id: turnover.id,
  //             transactions: turnover.transactions,
  //           })
  //         );
  //       }
  //       return this.accountsService
  //         .getTransactions(
  //           turnover.bankId,
  //           turnover.accId,
  //           payload.clientId,
  //           dayjs(turnover.turnoverDate),
  //           dayjs(turnover.turnoverDate)
  //         )
  //         .pipe(
  //           map((transactions) =>
  //             AcctDetailsActions.loadTransactionsSuccess({
  //               id: turnover.id,
  //               transactions,
  //             })
  //           ),
  //           takeUntil(
  //             this.actions$.pipe(
  //               ofType(AcctDetailsActions.loadTransactionsCancel),
  //               filter((p) => p.payload.id === turnover.id)
  //             )
  //           ),
  //           catchError((error) =>
  //             of(
  //               AcctDetailsActions.loadTransactionsFailure({
  //                 id: turnover.id,
  //                 error: error.error.Message,
  //               }),
  //               NotifyActions.serverErrorNotification({
  //                 error,
  //                 message: this.translateService.instant('errors.loadTurnovers'),
  //               })
  //             )
  //           )
  //         );
  //     })
  //   )
  // );

  // loadTransactionsFailure$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(AcctDetailsActions.loadTransactionsFailure),
  //     map((action) => AcctDetailsActions.closeTurnovers({ id: action.payload.id }))
  //   )
  // );

  // loadTransactionDetail$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(AcctDetailsActions.loadTransactionDetailRequest),
  //     switchMap((action) => clientIdWithData(this.store, action.payload)),
  //     switchMap((payload) =>
  //       this.accountsService.getTransaction(payload.data.bankId, payload.data.id, payload.clientId).pipe(
  //         map((transaction) => AcctDetailsActions.loadTransactionDetailSuccess(transaction)),
  //         catchError((error) => of(AcctDetailsActions.loadTransactionDetailFailure(error.error.Message)))
  //       )
  //     )
  //   )
  // );

  // showTransactionPartial$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(AcctDetailsActions.showTransactionPartial),
  //     withLatestFrom(this.store.select(AcctDetailsSelectors.currentAccount)),
  //     switchMap(([action, account]) => {
  //       const transacion = action.transaction;
  //       const currentAccount: Partial<PaymentAccountModal> = {
  //         taxCode: account?.taxCode,
  //         number: account?.number,
  //         name: account?.name,
  //       };
  //       const correspondentAccount: Partial<PaymentAccountModal> = {
  //         number: transacion.correspondentAccountNumber,
  //         name: transacion.correspondentName,
  //       };
  //       const payment: Partial<PaymentModal> = {
  //         purpose: transacion.purpose,
  //         payedDate: transacion.payedDate,
  //         documentDate: transacion.createDate,
  //         amount: transacion.credit || transacion.debit,
  //         sender: transacion.credit > transacion.debit ? correspondentAccount : currentAccount,
  //         recipient: transacion.credit > transacion.debit ? currentAccount : correspondentAccount,
  //         number: transacion.documentNumber,
  //         statusCode: StatusCode.bankPaid,
  //         currencyCode: account?.currencyCode,
  //       };
  //       return [
  //         SharedActions.setPaymentLoader({
  //           loader: AcctDetailsSelectors.isLoadingTransaction,
  //         }),
  //         SharedActions.showPayment({ payment }),
  //       ];
  //     })
  //   )
  // );

  // loadTransactionDetailSuccess$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(AcctDetailsActions.loadTransactionDetailSuccess),
  //     withLatestFrom(notNullAndUndefined(this.store, AcctDetailsSelectors.currentAccount)),
  //     map(([action, account]) => {
  //       const transaction = action.payload;
  //       const payment: PaymentModal = {
  //         number: transaction.number,
  //         documentDate: transaction.documentDate,
  //         valueDate: transaction.valueDate,
  //         statusCode: StatusCode.bankPaid,
  //         payedDate: transaction.payedDate,
  //         purpose: transaction.purpose,
  //         amount: transaction.amount,
  //         amountString: transaction.amountString,
  //         currencyCode: transaction.sender.accCurrencyCode || transaction.recipient.accCurrencyCode,
  //         isPaginationAvailable: false,
  //         sender: {
  //           name: transaction.sender.name,
  //           number: transaction.sender.accNumber,
  //           taxCode: transaction.sender.taxCode,
  //         },
  //         recipient: {
  //           name: transaction.recipient.name,
  //           number: transaction.recipient.accNumber,
  //           taxCode: transaction.recipient.taxCode,
  //         },
  //         actions: {},
  //         isNeedMySign: false,
  //       };
  //       payment.actions[PaymentAction.print] = () =>
  //         this.store.dispatch(
  //           AcctDetailsActions.printTransactionRequest({
  //             transactionId: transaction.id,
  //             bankId: account?.bankId,
  //           })
  //         );

  //       return SharedActions.setPayment({ payment });
  //     })
  //   )
  // );

  // printTransactionRequest$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(AcctDetailsActions.printTransactionRequest),
  //     switchMap((action) => clientIdWithData(this.store, action.payload)),
  //     switchMap((payload) =>
  //       this.accountsService
  //         .getPrintTransaction(payload.data.bankId, payload.data.transactionId, payload.clientId)
  //         .pipe(
  //           map((html) => AcctDetailsActions.printTransactionSuccess(html)),
  //           catchError((error: ServerError) =>
  //             of(
  //               AcctDetailsActions.printTransactionFailure(error.message),
  //               NotifyActions.serverErrorNotification({
  //                 error,
  //                 message: this.translateService.instant('errors.printTransaction'),
  //               })
  //             )
  //           )
  //         )
  //     )
  //   )
  // );

  // printTransactionSuccess$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(AcctDetailsActions.printTransactionSuccess),
  //     map((action) => SharedActions.printFile({ html: action.payload }))
  //   )
  // );

  // showStatement$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(AcctDetailsActions.showStatement),
  //     withLatestFrom(
  //       notNullAndUndefined(this.store, AcctDetailsSelectors.currentAccount),
  //       this.store.select(UserSelectors.userEmail),
  //       this.store.select(AcctDetailsSelectors.transactionsRange)
  //     ),
  //     map(([, account, email, range]) =>
  //       SharedActions.showStatement({
  //         config: {
  //           formats: account.statementTypesList,
  //           isFree: account.isStatementFree,
  //           email,
  //           start: range.start,
  //           end: range.end,
  //           callback: (data: StatementModalResult) =>
  //             this.store.dispatch(
  //               AcctDetailsActions.loadStatement({
  //                 data,
  //                 accountId: account.id,
  //                 bankId: account.bankId,
  //               })
  //             ),
  //         },
  //       })
  //     )
  //   )
  // );

  // loadStatement$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(AcctDetailsActions.loadStatement),
  //     map((action) =>
  //       action.data.sendToEmail
  //         ? AcctActions.sendStatementRequest({
  //             result: action.data,
  //             accountId: action.accountId,
  //             bankId: action.bankId,
  //           })
  //         : AcctActions.downloadStatementRequest({
  //             result: action.data,
  //             accountId: action.accountId,
  //             bankId: action.bankId,
  //           })
  //     )
  //   )
  // );

  // showRequisitesModal$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(AcctDetailsActions.showRequisitesModal),
  //     withLatestFrom(notNullAndUndefined(this.store, AcctDetailsSelectors.currentAccount)),
  //     map(([, account]) => AcctActions.openRequisitesModal({ account }))
  //   )
  // );

  // showExportModal$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(AcctDetailsActions.showExportModal),
  //     withLatestFrom(
  //       notNullAndUndefined(this.store, AcctDetailsSelectors.currentAccount),
  //       this.store.select(AcctDetailsSelectors.transactionsRange)
  //     ),
  //     map(([, account, range]) => AcctActions.openExportModal({ account, range }))
  //   )
  // );
  ngrxOnRunEffects(resolvedEffects$: Observable<EffectNotification>): Observable<EffectNotification> {
    console.log('onRun');
    return this.actions$.pipe(
      ofType(SupDocumentDetailsActions.initDetails),
      tap((action) => console.log(action)),
      exhaustMap(() =>
        resolvedEffects$.pipe(takeUntil(this.actions$.pipe(ofType(SupDocumentDetailsActions.destroyDetails))))
      )
    );
  }
}
