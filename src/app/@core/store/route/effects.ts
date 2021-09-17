import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AcctActions } from '@store/acct/actions';
import { AuthActions } from '@store/auth/actions';
import { UserActions } from '@store/user/actions';
import { map, tap } from 'rxjs/operators';

import { RouteActions } from './actions';

@Injectable()
export class RouteEffects {
    constructor(private actions$: Actions, private router: Router) { }

    routToEffect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(RouteActions.routeTo),
            tap((action) => this.router.navigateByUrl(action.route))
        ),
        { dispatch: false }
    );

    dashboardEffect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(...[AuthActions.loadProfileSuccess, UserActions.selectCurrentClientId]),
            map(() => RouteActions.routeTo({ route: 'accounts' }))
        )
    );

    logoutEffect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.logout),
            map(() => RouteActions.routeTo({ route: 'auth' }))
        )
    );

    detailAccount$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AcctActions.goToDetail),
            map((payload) => RouteActions.routeTo({ route: `accounts/${payload.account.BankId}/${payload.account.Id}` }))
        ));
}
