import * as authActions from '@actions/auth.actions';
import * as routeActions from '@actions/route.actions';
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
            ofType(authActions.authLoadProfileSuccess),
            map(() => routeActions.routeTo({ route: 'dashboard' }))
        )
    );

    logoutEffect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(authActions.logout),
            map(() => routeActions.routeTo({ route: 'auth' }))
        )
    );
}
