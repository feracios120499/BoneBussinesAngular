import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '@services/auth.service';
import { UserService } from '@services/user.service';
import { NotifyActions } from '@store/notify/actions';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { AuthActions } from './actions';

@Injectable()
export class AuthEffects {
    constructor(
        private action$: Actions,
        private authService: AuthService,
        private userService: UserService) { }

    loginRequest$ = createEffect(() => this.action$.pipe(
        ofType(AuthActions.loginRequest),
        switchMap(action => this.authService.logIn(action.payload).pipe(
            map(response => AuthActions.loginSuccess(response)),
            catchError(error => of(AuthActions.loginFailure(error.error.Message)))
        ))
    ));

    loginError$ = createEffect(() =>
        this.action$.pipe(
            ofType(AuthActions.loginFailure),
            map((action) => NotifyActions.errorNotification({ message: action.payload, title: 'error' }))
        ));

    loginWithOtp$ = createEffect(() =>
        this.action$.pipe(
            ofType(AuthActions.loginRequest),
            switchMap(action => this.action$.pipe(
                ofType(AuthActions.loginWithOtpRequest),
                switchMap(otpAction => this.authService.loginWithOtp(action.payload, otpAction.payload).pipe(
                    map(token => AuthActions.loginWithOtpSuccess(token)),
                    catchError(error => of(AuthActions.loginWithOtpFailure(error.error.error_description)))
                ))
            ))
        ));


    needOtp$ = createEffect(() =>
        this.action$.pipe(
            ofType(AuthActions.loginRequest),
            switchMap(action => this.action$.pipe(
                ofType(AuthActions.loginSuccess),
                map(response => response.payload.type === 'Otp' ?
                    AuthActions.setNeedOtp({ phone: response.payload.phone as string }) :
                    AuthActions.tokenRequest(action.payload)
                )))
        ));


    tokenLogin$ = createEffect(() => this.action$.pipe(
        ofType(AuthActions.tokenRequest),
        switchMap(action => this.authService.loginWithData(action.payload).pipe(
            map(token => AuthActions.tokenSuccess(token)),
            catchError(error => of(AuthActions.tokenFailure(error.error.error_description)))
        ))
    ));

    setToken$ = createEffect(() =>
        this.action$.pipe(
            ofType(AuthActions.loginWithOtpSuccess, AuthActions.tokenSuccess),
            map((action) => AuthActions.setToken({ token: action.payload }))
        ));

    tokenSuccessEffect$ = createEffect(() =>
        this.action$.pipe(
            ofType(AuthActions.loginWithOtpSuccess, AuthActions.tokenSuccess),
            map(() => AuthActions.loadProfileRequest())
        )
    );

    loadProfileRequestEffect$ = createEffect(() =>
        this.action$.pipe(
            ofType(AuthActions.loadProfileRequest),
            switchMap(() => this.userService.getProfile().pipe(
                map(profile => AuthActions.loadProfileSuccess(profile)),
                catchError(error => of(AuthActions.loadProfileFailure(error.error.Message)))
            ))
        )
    );

    logoutByUser$ = createEffect(() =>
        this.action$.pipe(
            ofType(AuthActions.logoutByUser),
            map(() => AuthActions.logout())
        ));


}
