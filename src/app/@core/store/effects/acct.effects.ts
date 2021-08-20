import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { currentAccountRouteParamsSelector, currentAccountSelector, editFormSelector, filterTransactionsSelector, formSelector } from '@selectors/acct.selectors';
import { currentClientIdFilteredSelector } from '@selectors/user.selectors';
import { AcctService } from '@services/acct.service';
import { Boxed, FormGroupState, SetValueAction } from 'ngrx-forms';
import { combineLatest, Observable, of } from 'rxjs';
import { catchError, exhaustMap, filter, first, map, mapTo, mergeMap, switchMap, take, tap, withLatestFrom } from 'rxjs/operators';
import { AccountModel } from 'src/app/@shared/models/account.model';
// import * as AcctActions from './../actions/acct.actions';
import * as notifyActions from '../actions/notify.actions';
import { TranslateService } from '@ngx-translate/core';
import { AcctFilter, AcctTransactionsFilter, ACCT_FILTER_FORM, ACCT_TRANSACTIONS_FILTER_FORM, DateRange } from '@stores/acct.store';
import { setCurrentClientId } from '@actions/user.actions';
import dayjs from 'dayjs';
import { TypedAction } from '@ngrx/store/src/models';
import { clientIdWithData } from '../shared';
import { AcctActions } from '@actions/acct.actions';
// import { waitFor } from '../shared';


// export function waitFor<T>(signal: Observable<any>) {
//     return (source: Observable<T>) => signal.pipe(
//         first(),
//         switchMap(value => [source, value]),
//     );
// }

@Injectable()
export class AcctEffects {

    constructor(
        private actions$: Actions,
        private accountsService: AcctService,
        private store: Store,
        private translateService: TranslateService) { }



    loadAccounts$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AcctActions.loadAccounts),
            switchMap(() => currentClientIdFilteredSelector(this.store).pipe(take(1))),
            tap(console.log),
            // waitFor(currentClientIdFilteredSelector(this.store)),
            switchMap((clientId) => this.accountsService.getAccounts(clientId).pipe(
                map((accounts) => AcctActions.setAccounts({ accounts })))
            )
        )
        // combineLatest([
        //     ofType(AcctActions.loadAccounts),
        //     currentClientIdFilteredSelector(this.store),
        // ]).pipe(
        //     switchMap(([, clientId]) => this.accountsService.getAccounts(clientId).pipe(
        //         map((accounts) => AcctActions.setAccounts({ accounts }))
        //     )))
    );
    // this.actions$.pipe(
    //     ofType(AcctActions.loadAccounts),
    //     // switchMap(() => currentClientIdFilteredSelector(this.store)),
    //     combineLatest([this.actions$.pipe(ofType(setCurrentClientId))]).pipe(
    //         switchMap(() =>
    //             this.accountsService.getAccounts(clientId).pipe(
    //                 map((accounts) => AcctActions.setAccounts({ accounts }))
    //             ))
    //     ),

    //     // switchMap(([clientId]) => this.accountsService.getAccounts(clientId).pipe(
    //     //     map((accounts) => AcctActions.setAccounts({ accounts }))
    //     // ))
    //     // switchMap(([, clientId]) =>
    //     //     this.accountsService.getAccounts(clientId).pipe(
    //     //         map((accounts) => AcctActions.setAccounts({ accounts }))
    //     //     ))


    setCurrencyFilterOther$ = createEffect(() =>
        this.actions$.pipe(
            ofType<SetValueAction<boolean>>(SetValueAction.TYPE),
            filter((formControl: SetValueAction<boolean>) => formControl.controlId.startsWith(ACCT_FILTER_FORM)),
            withLatestFrom(this.store.select(formSelector)),
            filter(([formControl, form]: [SetValueAction<boolean>, FormGroupState<AcctFilter>]) =>
                formControl.controlId === form.controls.currency.controls.OTHER.id && formControl.value === true),
            switchMap(([, form]) => {
                return [
                    new SetValueAction(form.controls.currency.controls.EUR.id, false),
                    new SetValueAction(form.controls.currency.controls.USD.id, false),
                    new SetValueAction(form.controls.currency.controls.UAH.id, false)
                ];
            })
        ));

    setCurrencyFilter$ = createEffect(() =>
        this.actions$.pipe(
            ofType<SetValueAction<boolean>>(SetValueAction.TYPE),
            filter((formControl: SetValueAction<boolean>) => formControl.controlId.startsWith(ACCT_FILTER_FORM)),
            withLatestFrom(this.store.select(formSelector)),
            filter(([formControl, form]: [SetValueAction<boolean>, FormGroupState<AcctFilter>]) =>
                [
                    form.controls.currency.controls.EUR.id,
                    form.controls.currency.controls.USD.id,
                    form.controls.currency.controls.UAH.id
                ].indexOf(formControl.controlId) >= 0 && formControl.value === true),
            switchMap(([, form]) => {
                return [
                    new SetValueAction(form.controls.currency.controls.OTHER.id, false),
                ];
            })
        ));

    setAccountName$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AcctActions.setAccountName),
            withLatestFrom(this.store.select(editFormSelector)),
            map(([action, formControl]) => new SetValueAction(formControl.controls.name.id, action.name))
        ));

    loadCurrentAccount$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AcctActions.loadCurrentAccount),
            withLatestFrom(
                this.store.select(currentAccountSelector),
                this.store.select(currentAccountRouteParamsSelector)
            ),
            map(([, account, routeParams]) => {
                if (account) {
                    return AcctActions.loadAccountSuccess(account);
                }
                else {
                    return AcctActions.loadAccount({ accountId: routeParams.accountId, bankId: routeParams.bankId });
                }
            })
        ));

    loadAccount$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AcctActions.loadAccount),
            switchMap((action) => clientIdWithData(this.store, action.payload)),
            switchMap((payload) =>
                this.accountsService.getAccount(
                    payload.data.bankId,
                    payload.data.accountId,
                    payload.clientId).pipe(
                        map(account => AcctActions.loadAccountSuccess(account))
                    )
            )
        ));

    loadAccountSuccess$ = createEffect(() =>
        this.actions$.pipe(
            ofType(...[
                AcctActions.loadAccountSuccess,
                AcctActions.updateAccountSuccess
            ]),
            map((action) => AcctActions.setCurrentAccount({ account: action.payload }))
        )
    );

    submitEditForm$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AcctActions.sumbitEditForm),
            withLatestFrom(this.store.select(editFormSelector)),
            map(([, form]) => AcctActions.updateAccountRequest(form.value))
        ));

    updateAccountRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AcctActions.updateAccountRequest),
            switchMap((action) => currentClientIdFilteredSelector(this.store).pipe(map((clientId) => ({ clientId, action })))),
            withLatestFrom(this.store.select(currentAccountRouteParamsSelector)),
            switchMap(([payload, routeParams]) =>
                this.accountsService.updateAccount(
                    routeParams.bankId,
                    routeParams.accountId,
                    payload.clientId,
                    payload.action.payload).pipe(
                        withLatestFrom(this.store.select(currentAccountSelector)),
                        filter(([, account]) => account !== undefined),
                        map(([, account]) => account as AccountModel),
                        map((account) => AcctActions.updateAccountSuccess({ ...account, Name: payload.action.payload.name })),
                        catchError((error) => of(AcctActions.updateAccountFailure(error.error.Message)))
                    )
            ))
    );

    updateAccountSuccess$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AcctActions.updateAccountSuccess),
            map(() => notifyActions.successNotification({ message: this.translateService.instant('componets.acct.updateAccountSuccess') }))
        ));

    updateRangeTransactions$ = createEffect(() =>
        this.actions$.pipe(
            ofType<SetValueAction<Boxed<DateRange>>>(SetValueAction.TYPE),
            filter((formControl: SetValueAction<Boxed<DateRange>>) => formControl.controlId.startsWith(ACCT_TRANSACTIONS_FILTER_FORM)),
            withLatestFrom(this.store.select(filterTransactionsSelector)),
            filter(
                ([formControl, form]: [SetValueAction<Boxed<DateRange>>, FormGroupState<AcctTransactionsFilter>]) =>
                    formControl.controlId === form.controls.range.id),
            map(([formControl]) =>
                AcctActions.updateRangeTransactions(
                    {
                        start: dayjs(formControl.value.value.start),
                        end: dayjs(formControl.value.value.end)
                    }
                ))
        ));
    updateRangeTransactionsEffect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AcctActions.updateRangeTransactions),
            switchMap((action) => [AcctActions.loadTurnoversRequest({ start: action.start, end: action.end })])
        ));

    loadTurnovers$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AcctActions.loadTurnoversRequest),
            switchMap(
                action => currentClientIdFilteredSelector(this.store).pipe(
                    take(1),
                    map((clientId) => ({ clientId, data: action.payload }))
                )
            ),
            withLatestFrom(this.store.select(currentAccountRouteParamsSelector)),
            switchMap(([payload, routeParams]) =>
                this.accountsService.getTurnovers(
                    routeParams.bankId,
                    routeParams.accountId,
                    payload.clientId,
                    payload.data.start,
                    payload.data.end
                ).pipe(
                    map(turnovers => AcctActions.loadTurnoversSuccess(turnovers)),
                    catchError(error => of(AcctActions.loadTurnoversFailure(error.error.Message)))
                )
            )
        ));
}
