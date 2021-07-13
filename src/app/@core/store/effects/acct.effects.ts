import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AcctFilter, ACCT_FILTER_FORM } from '@reducers/acct.reducers';
import { formSelector } from '@selectors/acct.selectors';
import { currentClientIdFilteredSelector, currentClientIdSelector } from '@selectors/user.selectors';
import { AcctService } from '@services/acct.service';
import { SettingsService } from '@services/settings.service';
import { FormGroupState, setValue, SetValueAction } from 'ngrx-forms';
import { from } from 'rxjs';
import { filter, map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import * as acctActions from './../actions/acct.actions';
@Injectable()
export class AcctEffects {

    constructor(private actions$: Actions, private accountsService: AcctService, private store: Store) { }

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
}
