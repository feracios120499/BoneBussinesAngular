import { Injectable } from '@angular/core';
import { PaginationHelper } from '@helpers/pagination.helper';
import { PaymentAction } from '@models/enums/payment-action.enum';
import { StatusCode } from '@models/enums/status-code.enum';
import { PaymentModal } from '@models/payment-modal.model';
import { Transaction } from '@modules/accounts/models/transaction.model';
import { AcctService } from '@modules/accounts/services/acct-service/acct.service';
import { Actions, createEffect, EffectNotification, ofType, OnRunEffects } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { NotifyActions } from '@store/notify/actions';
import { clientIdWithData } from '@store/shared';
import { SharedActions } from '@store/shared/actions';
import { Observable, of } from 'rxjs';
import { catchError, exhaustMap, map, switchMap, takeUntil, tap, withLatestFrom } from 'rxjs/operators';
import { PayIncomingActions } from './actions';
import { PayIncomingSelectors } from './selectors';

@Injectable({
  providedIn: 'root',
})
export class PayIncomingEffects implements OnRunEffects {
  constructor(
    private actions$: Actions,
    private store: Store,
    private acctService: AcctService,
    private translateService: TranslateService
  ) {}

  setDateRange$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PayIncomingActions.setDateRange),
      map((action) => PayIncomingActions.loadTransactionsRequest(action.range))
    )
  );

  loadTransactions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PayIncomingActions.loadTransactionsRequest),
      switchMap((action) => clientIdWithData(this.store, action.payload)),
      switchMap((payload) =>
        this.acctService.getIncomingTransactions(payload.clientId, payload.data.start, payload.data.end).pipe(
          map((transactions) => PayIncomingActions.loadTransactionSuccess(transactions)),
          catchError((error) => of(PayIncomingActions.loadTransactionsFailure(error.message)))
        )
      )
    )
  );

  printSelectedTransactions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PayIncomingActions.printTransactions),
      withLatestFrom(this.store.select(PayIncomingSelectors.selectedTransactions)),
      map(([, selectedTransactions]) => {
        if (selectedTransactions.length === 0) {
          return NotifyActions.warningNotification({
            message: this.translateService.instant('shared.selectDocumentsBeforePrint'),
          });
        } else {
          return PayIncomingActions.printTransactionsRequest(selectedTransactions);
        }
      })
    )
  );

  printTransactions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PayIncomingActions.printTransactionsRequest),
      switchMap((action) => clientIdWithData(this.store, action.payload)),
      switchMap((payload) =>
        this.acctService.getPrintTransactions(payload.data, payload.clientId).pipe(
          map((printFile) => PayIncomingActions.printTransactionsSuccess(printFile)),
          catchError((error) => of(PayIncomingActions.printTransactionsFailure(error.message)))
        )
      )
    )
  );

  printTransactionsSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PayIncomingActions.printTransactionsSuccess),
      map((action) => SharedActions.printFile({ html: action.payload }))
    )
  );

  showTransaction$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PayIncomingActions.showTransaction),
      switchMap((action) => [
        SharedActions.setPaymentLoader({ loader: PayIncomingSelectors.isLoading }),
        SharedActions.showPayment({
          payment: this.mapTransactionToPayment(action.transaction, action.transactions),
        }),
      ])
    )
  );

  private mapTransactionToPayment(transaction: Transaction, transactions: Transaction[]): PaymentModal {
    const payment: PaymentModal = {
      number: transaction.number,
      documentDate: transaction.documentDate,
      valueDate: transaction.valueDate,
      statusCode: StatusCode.bankPaid,
      payedDate: transaction.payedDate,
      purpose: transaction.purpose,
      amount: transaction.amount,
      amountString: transaction.amountString,
      currencyCode: transaction.sender.accCurrencyCode || transaction.recipient.accCurrencyCode,
      sender: {
        name: transaction.sender.name,
        number: transaction.sender.accNumber,
        taxCode: transaction.sender.taxCode,
      },
      recipient: {
        name: transaction.recipient.name,
        number: transaction.recipient.accNumber,
        taxCode: transaction.recipient.taxCode,
      },
      actions: {},
      isPaginationAvailable: false,
      isNeedMySign: false,
    };
    payment.actions[PaymentAction.print] = () =>
      this.store.dispatch(PayIncomingActions.printTransactionsRequest([transaction]));

    const pagination = new PaginationHelper<Transaction>(transactions);

    pagination.startFrom(transaction);

    payment.isPaginationAvailable = transactions.length > 1;
    payment.next = () =>
      this.store.dispatch(
        SharedActions.setPayment({ payment: this.mapTransactionToPayment(pagination.next(), transactions) })
      );
    payment.previous = () =>
      this.store.dispatch(
        SharedActions.setPayment({ payment: this.mapTransactionToPayment(pagination.previous(), transactions) })
      );

    return payment;
  }

  ngrxOnRunEffects(resolvedEffects$: Observable<EffectNotification>): Observable<EffectNotification> {
    return this.actions$.pipe(
      ofType(PayIncomingActions.init),
      exhaustMap(() => resolvedEffects$.pipe(takeUntil(this.actions$.pipe(ofType(PayIncomingActions.destroy)))))
    );
  }
}
