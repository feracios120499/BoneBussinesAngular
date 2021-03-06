import * as authActions from '@actions/auth.actions';
import { Injectable } from '@angular/core';
import { LoginOtpModel } from '@modules/auth/models/login-otp.model';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { loginDataSelector } from '@selectors/auth.selectors';
import { AuthService } from '@services/auth.service';
import { of } from 'rxjs';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';

@Injectable()
export class AuthEffects {
  constructor(private action$: Actions, private authService: AuthService, private store: Store) { }

  loginRequest$ = createEffect(() => this.action$.pipe(
    ofType(authActions.loginRequest),
    switchMap(action => this.authService.logIn(action.data).pipe(
      map(response => authActions.loginSuccess({ response })),
      catchError(error => of(authActions.loginFailure({ message: error.error.Message })))
    ))
  ));

  tokenOtp$ = createEffect(() => this.action$.pipe(
    ofType(authActions.tokenOtpRequest),
    withLatestFrom(this.store.select(loginDataSelector)),

    switchMap(([action, model]) => this.authService.loginOtp(new LoginOtpModel(action.code, model)).pipe(
      map(token => authActions.tokenSuccess({ token })),
      catchError(error => of(authActions.tokenFailure({ message: error.error.error_description })))
    ))
  ));

  needOtp$ = createEffect(() => this.action$.pipe(
    ofType(authActions.loginSuccess),
    withLatestFrom(this.store.select(loginDataSelector)),
    map(([action, model]) => action.response.Type === 'Otp' ?
      authActions.setNeedOtp({ phone: action.response.Phone }) :
      authActions.tokenLoginRequest({ data: model })
    )
  ));

  tokenLogin$ = createEffect(() => this.action$.pipe(
    ofType(authActions.tokenLoginRequest),
    switchMap(action => this.authService.loginWithData(action.data).pipe(
      map(token => authActions.tokenSuccess({ token })),
      catchError(error => of(authActions.loginFailure({ message: error.error.error_description })))
    ))
  ));

}
