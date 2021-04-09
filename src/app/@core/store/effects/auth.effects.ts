import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import { catchError, exhaustMap, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { AuthService } from '@services/auth.service';

import * as authActions from '@actions/auth.actions';
import { select, Store } from '@ngrx/store';
import { LogInModel } from '@modules/auth/models/login.model';
import { loginDataSelector } from '@selectors/auth.selectors';
import { LoginOtpModel } from '@modules/auth/models/login-otp.model';

@Injectable()
export class AuthEffects {
    constructor(private action$: Actions, private authService: AuthService, private store: Store) { }

    loginRequest$ = this.action$.pipe(
        ofType(authActions.loginRequest),
        switchMap((action) => {
            return this.authService.logIn(action.data).pipe(
                map(response => authActions.loginSuccess({ response })),
                catchError(error => of(authActions.loginFailure({ message: error.error.Message })))
            );
        })
    );

    tokenOtp$ = this.action$.pipe(
        ofType(authActions.tokenOtpRequest),
        withLatestFrom(this.store.pipe<LogInModel | undefined>(select(loginDataSelector))),
        switchMap(([action, model]) => this.authService.loginOtp(new LoginOtpModel(action.code, model)).pipe(
            map((token) => authActions.tokenSuccess({ token })),
            catchError((error) => of(authActions.tokenFailure({ message: error.error.error_description })))
        ))
    )

    needOtp$ = this.action$.pipe(
        ofType(authActions.loginSuccess),
        withLatestFrom(this.store.pipe<LogInModel | undefined>(select(loginDataSelector))),
        map(([action, model]) => {
            if (action.response.Type === 'Otp') {
                return authActions.setNeedOtp({ phone: action.response.Phone });
            }
            else {
                return authActions.tokenLoginRequest({ data: model });
            }
        }
        )
    )

    tokenLogin$ = this.action$.pipe(
        ofType(authActions.tokenLoginRequest),
        switchMap((action) =>
            this.authService.loginWithData(action.data!).pipe(
                map((token) => authActions.tokenSuccess({ token })),
                catchError((error) => of(authActions.loginFailure({ message: error.error.error_description })))))
    )
}
