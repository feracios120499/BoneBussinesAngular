import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AcctFilter, ACCT_FILTER_FORM } from '@reducers/acct.reducers';
import { currentAccountRouteParamsSelector, currentAccountSelector, editFormSelector, formSelector } from '@selectors/acct.selectors';
import { currentClientIdFilteredSelector, currentClientIdSelector } from '@selectors/user.selectors';
import { AcctService } from '@services/acct.service';
import { SettingsService } from '@services/settings.service';
import { FormGroupState, setValue, SetValueAction } from 'ngrx-forms';
import { from, of } from 'rxjs';
import { catchError, delay, filter, map, switchMap, tap, timeout, withLatestFrom } from 'rxjs/operators';
import { AccountModel } from 'src/app/@shared/models/account.model';
import * as acctActions from './../actions/acct.actions';
import * as notifyActions from '../actions/notify.actions';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class AcctEffects {

    constructor(
        private actions$: Actions,
        private accountsService: AcctService,
        private store: Store,
        private translateService: TranslateService) { }

    loadAccounts$ = createEffect(() =>
        this.actions$.pipe(
            ofType(acctActions.loadAccounts),
            switchMap(() => currentClientIdFilteredSelector(this.store)),
            switchMap((clientId) =>
                this.accountsService.getAccounts(clientId).pipe(
                    map((accounts) => acctActions.setAccounts({ accounts }))
                ))
        ));

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
            ofType(acctActions.setAccountName),
            withLatestFrom(this.store.select(editFormSelector)),
            map(([action, formControl]) => new SetValueAction(formControl.controls.name.id, action.name))
        ));

    loadCurrentAccount$ = createEffect(() =>
        this.actions$.pipe(
            ofType(acctActions.loadCurrentAccount),
            // delay(9000),
            switchMap(() => currentClientIdFilteredSelector(this.store)),
            withLatestFrom(
                this.store.select(currentAccountSelector),
                this.store.select(currentAccountRouteParamsSelector)
            ),
            switchMap(([clientId, account, routeParams]) => {
                if (account) {
                    return of(acctActions.loadCurrentAccountSuccess(account));
                }
                else {
                    return this.accountsService.getAccount(routeParams.bankId, routeParams.accountId, clientId).pipe(
                        map(currentAccount => acctActions.loadCurrentAccountSuccess(currentAccount)),
                        catchError(error => of(acctActions.loadCurrentAccountFailure(error.error.Message)))
                    );
                }
            })
        ));

    loadCurrentAccountSuccess$ = createEffect(() =>
        this.actions$.pipe(
            ofType(...[
                acctActions.loadCurrentAccountSuccess,
                acctActions.updateAccountSuccess
            ]),
            map((action) => acctActions.setCurrentAccount({ account: action.payload }))
        )
    );

    submitEditForm$ = createEffect(() =>
        this.actions$.pipe(
            ofType(acctActions.sumbitEditForm),
            withLatestFrom(this.store.select(editFormSelector)),
            map(([, form]) => acctActions.updateAccountRequest(form.value))
        ));

    updateAccountRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(acctActions.updateAccountRequest),
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
                        map((account) => acctActions.updateAccountSuccess({ ...account, Name: payload.action.payload.name })),
                        catchError((error) => of(acctActions.updateAccountFailure(error.error.Message)))
                    )
            ))
    );

    updateAccountSuccess$ = createEffect(() =>
        this.actions$.pipe(
            ofType(acctActions.updateAccountSuccess),
            map(() => notifyActions.successNotification({ message: this.translateService.instant('componets.acct.updateAccountSuccess') }))
        ));
}
