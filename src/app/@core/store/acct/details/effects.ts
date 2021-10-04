import { Injectable } from '@angular/core';
import { AccountModel } from '@models/account.model';
import { DateRangeString } from '@models/date-range.model';
import { PaymentAction } from '@models/enums/payment-action.enum';
import { StatusCode } from '@models/enums/status-code.enum';
import { PaymentAccountModal, PaymentModal } from '@models/payment-modal.model';
import { StatementModalResult } from '@models/statement-modal-result.model';
import { Actions, createEffect, EffectNotification, ofType, OnRunEffects } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { AcctService } from '@services/acct.service';
import { NotifyActions } from '@store/notify/actions';
import { clientIdWithData, notNullAndUndefined } from '@store/shared';
import { SharedActions } from '@store/shared/actions';
import { UserSelectors } from '@store/user/selectors';
import dayjs from 'dayjs';
import { Boxed, FormGroupState, SetValueAction } from 'ngrx-forms';
import { Observable, of } from 'rxjs';
import { catchError, exhaustMap, filter, map, mergeMap, switchMap, takeUntil, tap, withLatestFrom } from 'rxjs/operators';
import { AcctActions } from '../actions';

import { AcctTransactionsFilter } from '../models/acct-transaction-filter.model';
import { AcctDetailsActions } from './actions';
import { AcctDetailsSelectors } from './selectors';
import { ACCT_TRANSACTIONS_FILTER_FORM } from './store';

@Injectable({
    providedIn: 'root'
})
export class AcctDetailsEffects implements OnRunEffects {
    constructor(
        private actions$: Actions,
        private store: Store,
        private accountsService: AcctService,
        private translateService: TranslateService) { }

    setAccountName$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AcctDetailsActions.setAccountName),
            withLatestFrom(this.store.select(AcctDetailsSelectors.editForm)),
            map(([action, formControl]) => new SetValueAction(formControl.controls.name.id, action.name))
        ));

    loadCurrentAccount$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AcctDetailsActions.loadCurrentAccount),
            withLatestFrom(
                this.store.select(AcctDetailsSelectors.currentAccountRouteParams)
            ),
            map(([, routeParams]) =>
                AcctDetailsActions.loadAccount({ accountId: routeParams.accountId, bankId: routeParams.bankId }))
        ));

    loadAccount$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AcctDetailsActions.loadAccount),
            switchMap((action) => clientIdWithData(this.store, action.payload)),
            switchMap((payload) =>
                this.accountsService.getAccount(
                    payload.data.bankId,
                    payload.data.accountId,
                    payload.clientId).pipe(
                        map(account => AcctDetailsActions.loadAccountSuccess(account))
                    )
            )
        ));

    loadAccountSuccess$ = createEffect(() =>
        this.actions$.pipe(
            ofType(...[
                AcctDetailsActions.loadAccountSuccess,
                AcctDetailsActions.updateAccountSuccess
            ]),
            map((action) => AcctDetailsActions.setCurrentAccount({ account: action.payload }))
        )
    );

    submitEditForm$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AcctDetailsActions.sumbitEditForm),
            withLatestFrom(this.store.select(AcctDetailsSelectors.editForm)),
            map(([, form]) => AcctDetailsActions.updateAccountRequest(form.value))
        ));

    updateAccountRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AcctDetailsActions.updateAccountRequest),
            switchMap(action => clientIdWithData(this.store, action.payload)),
            withLatestFrom(this.store.select(AcctDetailsSelectors.currentAccountRouteParams)),
            switchMap(([payload, routeParams]) =>
                this.accountsService.updateAccount(
                    routeParams.bankId,
                    routeParams.accountId,
                    payload.clientId,
                    payload.data).pipe(
                        withLatestFrom(this.store.select(AcctDetailsSelectors.currentAccount)),
                        filter(([, account]) => account !== undefined),
                        map(([, account]) => account as AccountModel),
                        map((account) => AcctDetailsActions.updateAccountSuccess({ ...account, name: payload.data.name })),
                        catchError((error) => of(AcctDetailsActions.updateAccountFailure(error.error.Message)))
                    )
            ))
    );

    updateAccountSuccess$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AcctDetailsActions.updateAccountSuccess),
            map(() => NotifyActions.successNotification({ message: this.translateService.instant('componets.acct.updateAccountSuccess') }))
        ));

    updateRangeTransactions$ = createEffect(() =>
        this.actions$.pipe(
            ofType<SetValueAction<Boxed<DateRangeString>>>(SetValueAction.TYPE),
            filter(
                (formControl: SetValueAction<Boxed<DateRangeString>>) => formControl.controlId.startsWith(ACCT_TRANSACTIONS_FILTER_FORM)
            ),
            withLatestFrom(
                this.store.select(AcctDetailsSelectors.filterTransactions).pipe(
                    filter(p => !!p),
                    map(p => p as FormGroupState<AcctTransactionsFilter>))
            ),
            filter(
                ([formControl, form]: [SetValueAction<Boxed<DateRangeString>>, FormGroupState<AcctTransactionsFilter>]) =>
                    formControl.controlId === form.controls.range.id),
            map(_ => AcctDetailsActions.loadTurnoversCurrentAccount())
        ));

    loadTurnoversCurrentAccount$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AcctDetailsActions.loadTurnoversCurrentAccount),
            withLatestFrom(
                this.store.select(AcctDetailsSelectors.currentAccountRouteParams),
                this.store.select(AcctDetailsSelectors.transactionsRange)
            ),
            map(([, routeParams, range]) =>
                AcctDetailsActions.loadTurnoversRequest(
                    {
                        accountId: routeParams.accountId,
                        bankId: routeParams.bankId,
                        start: range.start,
                        end: range.end
                    }
                )
            )
        ));

    loadTurnovers$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AcctDetailsActions.loadTurnoversRequest),
            switchMap(action => clientIdWithData(this.store, action.payload)),
            switchMap(payload =>
                this.accountsService.getTurnovers(
                    payload.data.bankId,
                    payload.data.accountId,
                    payload.clientId,
                    payload.data.start,
                    payload.data.end
                ).pipe(
                    map(turnovers => AcctDetailsActions.loadTurnoversSuccess(turnovers)),
                    catchError(error => of(AcctDetailsActions.loadTurnoversFailure(error.error.Message)))
                )
            )
        ));
    openTurnover$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AcctDetailsActions.openTurnovers),
            map((action) => AcctDetailsActions.loadTransactionsRequest(action.id))
        ));

    closeTurnover$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AcctDetailsActions.closeTurnovers),
            withLatestFrom(this.store.select(AcctDetailsSelectors.loadTurnovers)),
            tap(console.log),
            filter(([action, loaders]) => loaders.includes(action.id)),
            map(([action]) => AcctDetailsActions.loadTransactionsCancel({ id: action.id }))
        )
    );

    loadTransactions$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AcctDetailsActions.loadTransactionsRequest),
            switchMap(action =>
                clientIdWithData(this.store, action.payload).pipe(
                    withLatestFrom(notNullAndUndefined(this.store, AcctDetailsSelectors.turnover(action.payload))),
                )
            ),
            mergeMap(([payload, turnover]) => {
                if (turnover.Transactions && turnover.Transactions.length !== 0) {
                    return of(AcctDetailsActions.loadTransactionsSuccess({ id: turnover.Id, transactions: turnover.Transactions }));
                }
                return this.accountsService.getTransactions(
                    turnover.BankId,
                    turnover.AccId,
                    payload.clientId,
                    dayjs(turnover.TurnoverDate),
                    dayjs(turnover.TurnoverDate)
                ).pipe(
                    map(transactions => AcctDetailsActions.loadTransactionsSuccess({ id: turnover.Id, transactions })),
                    takeUntil(
                        this.actions$.pipe(ofType(AcctDetailsActions.loadTransactionsCancel), filter(p => p.payload.id === turnover.Id))
                    ),
                    catchError(error => of(
                        AcctDetailsActions.loadTransactionsFailure({ id: turnover.Id, error: error.error.Message }),
                    ))
                );
            }
            )
        ));

    loadTransactionsFailure$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AcctDetailsActions.loadTransactionsFailure),
            map((action) => AcctDetailsActions.closeTurnovers({ id: action.payload.id }))
        ));

    loadTransactionDetail$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AcctDetailsActions.loadTransactionDetailRequest),
            switchMap(action => clientIdWithData(this.store, action.payload)),
            switchMap(payload =>
                this.accountsService.getTransaction(
                    payload.data.bankId,
                    payload.data.id,
                    payload.clientId
                ).pipe(
                    map((transaction) => AcctDetailsActions.loadTransactionDetailSuccess(transaction)),
                    catchError((error) => of(AcctDetailsActions.loadTransactionDetailFailure(error.error.Message)))
                )
            )
        ));

    showTransactionPartial$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AcctDetailsActions.showTransactionPartial),
            withLatestFrom(this.store.select(AcctDetailsSelectors.currentAccount)),
            switchMap(([action, account]) => {
                const transacion = action.transaction;
                const currentAccount: Partial<PaymentAccountModal> = {
                    taxCode: account?.taxCode,
                    number: account?.number,
                    name: account?.name
                };
                const correspondentAccount: Partial<PaymentAccountModal> = {
                    number: transacion.correspondentAccountNumber,
                    name: transacion.correspondentName
                };
                const payment: Partial<PaymentModal> = {
                    purpose: transacion.purpose,
                    payedDate: transacion.payedDate,
                    documentDate: transacion.createDate,
                    amount: transacion.credit || transacion.debit,
                    sender: transacion.credit > transacion.debit ? correspondentAccount : currentAccount,
                    recipient: transacion.credit > transacion.debit ? currentAccount : correspondentAccount,
                    number: transacion.documentNumber,
                    statusCode: StatusCode.bankPaid,
                    currencyCode: account?.currencyCode
                };
                return [
                    SharedActions.setPaymentLoader({ loader: AcctDetailsSelectors.isLoadingTransaction }),
                    SharedActions.showPayment({ payment })
                ];
            })
        ));

    loadTransactionDetailSuccess$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AcctDetailsActions.loadTransactionDetailSuccess),
            withLatestFrom(notNullAndUndefined(this.store, AcctDetailsSelectors.currentAccount)),
            map(([action, account]) => {
                const transaction = action.payload;
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
                        taxCode: transaction.sender.taxCode
                    },
                    recipient: {
                        name: transaction.recipient.name,
                        number: transaction.recipient.accNumber,
                        taxCode: transaction.recipient.taxCode
                    },
                    actions: {}
                };
                payment.actions[PaymentAction.print] = () =>
                    this.store.dispatch(AcctDetailsActions.printTransactionRequest({
                        transactionId: transaction.id, bankId: account?.bankId
                    }));

                return SharedActions.setPayment({ payment });
            })
        ));

    printTransactionRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AcctDetailsActions.printTransactionRequest),
            switchMap(action => clientIdWithData(this.store, action.payload)),
            switchMap(payload => this.accountsService.getPrintTransaction(
                payload.data.bankId,
                payload.data.transactionId,
                payload.clientId
            ).pipe(
                map(html => AcctDetailsActions.printTransactionSuccess(html))
            ))
        ));

    printTransactionSuccess$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AcctDetailsActions.printTransactionSuccess),
            map(action => SharedActions.printFile({ html: action.payload }))
        ));

    showStatement$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AcctDetailsActions.showStatement),
            withLatestFrom(
                notNullAndUndefined(this.store, AcctDetailsSelectors.currentAccount),
                this.store.select(UserSelectors.userEmail),
                this.store.select(AcctDetailsSelectors.transactionsRange)
            ),
            map(([, account, email, range]) => SharedActions.showStatement({
                config: {
                    formats: account.statementTypesList,
                    isFree: account.isStatementFree,
                    email,
                    start: range.start,
                    end: range.end,
                    callback: (data: StatementModalResult) => this.store.dispatch(AcctDetailsActions.loadStatement({ data }))
                }
            }))
        ));

    loadStatement$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AcctDetailsActions.loadStatement),
            map((action) =>
                action.data.sendToEmail ?
                    AcctDetailsActions.sendStatementRequest(action.data) :
                    AcctDetailsActions.downloadStatementRequest(action.data)
            )
        ));

    downloadStatement$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AcctDetailsActions.downloadStatementRequest),
            switchMap(action => clientIdWithData(this.store, action.payload).pipe(
                withLatestFrom(notNullAndUndefined(this.store, AcctDetailsSelectors.currentAccount))
            )),
            switchMap(([payload, account]) => this.accountsService.getStatement(
                account.bankId,
                account.id,
                payload.clientId,
                payload.data.range.start,
                payload.data.range.end,
                payload.data.format
            ).pipe(map((file) => AcctDetailsActions.downloadStatementSuccess(file))))
        ));

    downloadStatementSucess$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AcctDetailsActions.downloadStatementSuccess),
            map(action => SharedActions.saveFile({ file: action.payload }))
        ));

    sendStatement$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AcctDetailsActions.sendStatementRequest),
            switchMap(action => clientIdWithData(this.store, action.payload).pipe(
                withLatestFrom(notNullAndUndefined(this.store, AcctDetailsSelectors.currentAccount))
            )),
            switchMap(([payload, account]) => this.accountsService.sendStatement(
                account.bankId,
                account.id,
                payload.clientId,
                payload.data.range.start,
                payload.data.range.end,
                payload.data.format,
                payload.data.email as string
            ).pipe(map(() => AcctDetailsActions.sendStatementSuccess(undefined))))
        ));

    sendStatementSuccess$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AcctDetailsActions.sendStatementSuccess),
            map(() => NotifyActions.successNotification({ message: 'sucess', title: 'success' }))
        ));


    showRequisitesModal$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AcctDetailsActions.showRequisitesModal),
            withLatestFrom(notNullAndUndefined(this.store, AcctDetailsSelectors.currentAccount)),
            map(([, account]) => AcctActions.openRequisitesModal({ account }))
        ));

    showExportModal$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AcctDetailsActions.showExportModal),
            withLatestFrom(
                notNullAndUndefined(this.store, AcctDetailsSelectors.currentAccount),
                this.store.select(AcctDetailsSelectors.transactionsRange)
            ),
            map(([, account, range]) => AcctActions.openExportModal({ account, range }))
        ));
    ngrxOnRunEffects(resolvedEffects$: Observable<EffectNotification>): Observable<EffectNotification> {
        return this.actions$.pipe(
            ofType(AcctDetailsActions.initDetails),
            tap((action) => console.log(action)),
            exhaustMap(() =>
                resolvedEffects$.pipe(
                    takeUntil(this.actions$.pipe(ofType(AcctDetailsActions.destroyDetails))))
            )
        );
    }
}

