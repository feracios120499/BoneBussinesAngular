import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AcctActions } from '@modules/accounts/store/actions';
import { AuthActions } from '@modules/auth/store/actions';
import { CardsActions } from '@modules/cards/store/actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserActions } from '@store/user/actions';
import { map, tap } from 'rxjs/operators';

import { RouteActions } from './actions';

@Injectable()
export class RouteEffects {
  constructor(private actions$: Actions, private router: Router) {}

  routToEffect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(RouteActions.routeTo),
        tap((action) => this.router.navigateByUrl(action.route))
      ),
    { dispatch: false }
  );

  dashboardEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loadProfileSuccess, UserActions.selectCurrentClientId),
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
      map((payload) =>
        RouteActions.routeTo({
          route: `accounts/${payload.account.bankId}/${payload.account.id}`,
        })
      )
    )
  );

  detailCard$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CardsActions.goToDetail),
      map((payload) =>
        RouteActions.routeTo({
          route: `cards/${payload.cardId}/${payload.accountId}`,
        })
      )
    )
  );
}
