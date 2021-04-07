import { from, Observable } from 'rxjs';
import { login, loginFailure, loginSuccess, setNeedOtp, loginToken, setIsLoading } from './reducers/auth';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, switchMap } from 'rxjs/operators';
import { LogInModel } from './modules/auth/models/login.model';
import { AuthService } from './@core/services/auth.service';
import { of } from 'rxjs';
import { Action } from '@ngrx/store';


const isLoadedActions = [
    setNeedOtp,
    loginSuccess,
    loginFailure
];
const isLoadingActions = [
    login,
    loginToken
];
@Injectable()
export class AppEffects {

    // login$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(login),
    //         exhaustMap((action) => 
    //             this.authService.logIn(action.model).pipe(
    //                 map(response => loginSuccess),
    //                 catchError((error) => of(loginSuccess))
    //             )
    //         )
    //     ))
    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(login),
            exhaustMap(action =>
                this.authService.logIn(action.model).pipe(
                    map(response => {
                        response.Type = 'Token';
                        if (response.Type === 'Otp') {
                            return setNeedOtp({ isNeedOtp: true, phone: response.Phone });
                        }
                        else {
                            return loginToken({ model: { ...action.model } });
                        }
                    }),
                    catchError((error: any) => of(loginFailure({ message: error.error.Message }))))
            )
        )
    );
    loginToken$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loginToken),
            exhaustMap((action) =>
                this.authService.loginWithData(action.model).pipe(
                    map((response) => {
                        return loginSuccess({ token: response });
                    }),
                    catchError((error: any) => of(loginFailure(({ message: error.error.error_description }))))

                )
            )
        )
    )

    isLoading$ = createEffect(() =>
        this.actions$.pipe(ofType(...isLoadingActions), map(() => setIsLoading({ isLoading: true })))
    )

    isLoaded$ = createEffect(() =>
        this.actions$.pipe(ofType(...isLoadedActions), map(() => setIsLoading({ isLoading: false })))
    )

    constructor(private actions$: Actions, private authService: AuthService) {
    }

}