import * as authActions from '@actions/auth.actions';
import * as acctActions from '@actions/acct.actions';
import * as routeActions from '@actions/route.actions';
import * as userActions from '@actions/user.actions';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class RouteEffects {
    constructor(private actions$: Actions, private router: Router) { }

    routToEffect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(routeActions.routeTo),
            tap((action) => this.router.navigateByUrl(action.route))
        ),
        { dispatch: false }
    );

    dashboardEffect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(...[authActions.authLoadProfileSuccess, userActions.selectCurrentClientId]),
            map(() => routeActions.routeTo({ route: 'accounts' }))
        )
    );

    logoutEffect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(authActions.logout),
            map(() => routeActions.routeTo({ route: 'auth' }))
        )
    );

    detailAccount$ = createEffect(() =>
        this.actions$.pipe(
            ofType(acctActions.goToDetail),
            map((payload) => routeActions.routeTo({ route: `accounts/${payload.account.BankId}/${payload.account.Id}` }))
        ));
}
