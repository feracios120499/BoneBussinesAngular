import { Injectable } from '@angular/core';
import { AuthActions } from '@modules/auth/store/actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { NotificationsService } from '@services/notifications.service';
import { UserService } from '@services/user-service/user.service';
import { of } from 'rxjs';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';

import { UserActions } from './actions';
import { UserSelectors } from './selectors';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private store: Store,
    private userService: UserService,
    private notificationsService: NotificationsService
  ) {}

  checkProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.checkProfile),
      withLatestFrom(this.store.select(UserSelectors.profile)),
      map(([, profile]) => {
        console.log(profile);
        if (profile !== undefined) {
          return UserActions.profileExist();
        } else {
          return UserActions.loadProfileRequest();
        }
      })
    )
  );

  loadProfileRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadProfileRequest),
      switchMap(() =>
        this.userService.getProfile().pipe(
          map((profile) => UserActions.loadProfileSuccess(profile)),
          catchError((error) => of(UserActions.loadProfileFailure(error.error.Message)))
        )
      )
    )
  );

  loadNotifications$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadNotifications),
      withLatestFrom(this.store.select(UserSelectors.profile)),
      switchMap(([, profile]) =>
        this.notificationsService
          .getNotifications(profile?.userId || '')
          .pipe(map((notifications) => UserActions.setNotifications({ notifications })))
      )
    )
  );

  loadProfileSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadProfileSuccess, AuthActions.loadProfileSuccess),
      withLatestFrom(this.store.select(UserSelectors.currentClientIdSelector)),
      map(([action, currentClientId]) => {
        if (currentClientId === undefined) {
          return UserActions.setCurrentClientId({ clientId: action.payload.customers[0].clientId });
        } else {
          return UserActions.setCurrentClientId({ clientId: currentClientId });
        }
      })
    )
  );

  selectCurrentClientId$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.selectCurrentClientId),
      map((action) => UserActions.setCurrentClientId({ clientId: action.clientId }))
    )
  );
}
