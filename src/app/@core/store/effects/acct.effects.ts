import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { currentClientIdFilteredSelector, currentClientIdSelector } from '@selectors/user.selectors';
import { AcctService } from '@services/acct.service';
import { SettingsService } from '@services/settings.service';
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
}
