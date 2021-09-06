import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { AcctService } from '@services/acct.service';
import { clientIdWithoudData } from '@store/shared';
import { FormGroupState, SetValueAction } from 'ngrx-forms';
import { filter, map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { AcctFilter } from './models/acct-filter.model';

import { AcctActions } from './actions';
import { AcctSelectors } from './selectors';
import { ACCT_FILTER_FORM } from './store';


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
            switchMap(() => clientIdWithoudData(this.store)),
            tap(console.log),
            // waitFor(currentClientIdFilteredSelector(this.store)),
            switchMap((clientId) => this.accountsService.getAccounts(clientId).pipe(
                map((accounts) => AcctActions.setAccounts({ accounts })))
            )
        )
    );

    setCurrencyFilterOther$ = createEffect(() =>
        this.actions$.pipe(
            ofType<SetValueAction<boolean>>(SetValueAction.TYPE),
            filter((formControl: SetValueAction<boolean>) => formControl.controlId.startsWith(ACCT_FILTER_FORM)),
            withLatestFrom(this.store.select(AcctSelectors.form)),
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
            withLatestFrom(this.store.select(AcctSelectors.form)),
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
