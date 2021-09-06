import { Injectable } from '@angular/core';
import { LoginOtpModel } from '@modules/auth/models/login-otp.model';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AuthService } from '@services/auth.service';
import { UserService } from '@services/user.service';
import { of } from 'rxjs';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { AuthActions } from './actions';
import { AuthSelectors } from './selectors';

@Injectable()
export class AuthEffects {
    constructor(
        private action$: Actions,
        private authService: AuthService,
        private store: Store,
        private userService: UserService) { }

    loginRequest$ = createEffect(() => this.action$.pipe(
        ofType(AuthActions.loginRequest),
        switchMap(action => this.authService.logIn(action.data).pipe(
            map(response => AuthActions.loginSuccess({ response })),
            catchError(error => of(AuthActions.loginFailure({ message: error.error.Message })))
        ))
    ));

    tokenOtp$ = createEffect(() => this.action$.pipe(
        ofType(AuthActions.tokenOtpRequest),
        withLatestFrom(this.store.select(AuthSelectors.loginData)),

        switchMap(([action, model]) => this.authService.loginOtp(new LoginOtpModel(action.code, model)).pipe(
            switchMap(token => [AuthActions.setToken({ token }), AuthActions.tokenSuccess({ token })]),
            catchError(error => of(AuthActions.tokenFailure({ message: error.error.error_description })))
        ))
    ));

    needOtp$ = createEffect(() => this.action$.pipe(
        ofType(AuthActions.loginSuccess),
        withLatestFrom(this.store.select(AuthSelectors.loginData)),
        map(([action, model]) => action.response.Type === 'Otp' ?
            AuthActions.setNeedOtp({ phone: action.response.Phone }) :
            AuthActions.tokenLoginRequest({ data: model })
        )
    ));

    tokenLogin$ = createEffect(() => this.action$.pipe(
        ofType(AuthActions.tokenLoginRequest),
        switchMap(action => this.authService.loginWithData(action.data).pipe(
            switchMap(token => [AuthActions.setToken({ token }), AuthActions.tokenSuccess({ token })]),
            catchError(error => of(AuthActions.loginFailure({ message: error.error.error_description })))
        ))
    ));

    tokenSuccessEffect$ = createEffect(() =>
        this.action$.pipe(
            ofType(AuthActions.tokenSuccess),
            map(() => AuthActions.authLoadProfileRequest())
        )
    );

    loadProfileRequestEffect$ = createEffect(() =>
        this.action$.pipe(
            ofType(AuthActions.authLoadProfileRequest),
            switchMap(() => this.userService.getProfile().pipe(
                map(profile => AuthActions.authLoadProfileSuccess({ profile })),
                catchError(error => of(AuthActions.authLoadProfileFailure({ error: error.error.Message })))
            ))
        )
    );

    logoutByUser$ = createEffect(() =>
        this.action$.pipe(
            ofType(AuthActions.logoutByUser),
            map(() => AuthActions.logout())
        ));
}
