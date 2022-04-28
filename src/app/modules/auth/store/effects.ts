import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '@modules/auth/services/auth-service/auth.service';
import { BarsCryptorService } from '@services/sign/bars-cryptor.service';
import { CryptorToken } from '@services/sign/models/cryptor-token.model';
import { UserService } from '@services/user.service';
import { NotifyActions } from '@store/notify/actions';
import { of } from 'rxjs';
import { catchError, filter, map, switchMap } from 'rxjs/operators';

import { AuthActions } from './actions';

@Injectable()
export class AuthEffects {
  constructor(
    private action$: Actions,
    private authService: AuthService,
    private userService: UserService,
    private cryptorService: BarsCryptorService
  ) {}

  loginRequest$ = createEffect(() =>
    this.action$.pipe(
      ofType(AuthActions.loginRequest),
      switchMap((action) =>
        this.authService.logIn(action.payload).pipe(
          map((response) => AuthActions.loginSuccess(response)),
          catchError((error) => of(AuthActions.loginFailure(error.message)))
        )
      )
    )
  );

  loginError$ = createEffect(() =>
    this.action$.pipe(
      ofType(AuthActions.loginFailure),
      map((action) =>
        NotifyActions.errorNotification({
          message: action.payload,
          title: 'error',
        })
      )
    )
  );

  loginWithOtp$ = createEffect(() =>
    this.action$.pipe(
      ofType(AuthActions.loginRequest),
      switchMap((action) =>
        this.action$.pipe(
          ofType(AuthActions.loginWithOtpRequest),
          switchMap((otpAction) =>
            this.authService.loginWithOtp(action.payload, otpAction.payload).pipe(
              map((token) => AuthActions.loginWithOtpSuccess(token)),
              catchError((error) => of(AuthActions.loginWithOtpFailure(error.error.errorDescription)))
            )
          )
        )
      )
    )
  );

  needOtp$ = createEffect(() =>
    this.action$.pipe(
      ofType(AuthActions.loginRequest),
      switchMap((action) =>
        this.action$.pipe(
          ofType(AuthActions.loginSuccess),
          map((response) =>
            response.payload.type === 'Otp'
              ? AuthActions.setNeedOtp({
                  phone: response.payload.phone as string,
                })
              : AuthActions.tokenRequest(action.payload)
          )
        )
      )
    )
  );

  tokenLogin$ = createEffect(() =>
    this.action$.pipe(
      ofType(AuthActions.tokenRequest),
      switchMap((action) =>
        this.authService.loginWithData(action.payload).pipe(
          map((token) => AuthActions.tokenSuccess(token)),
          catchError((error) => of(AuthActions.tokenFailure(error.error.errorDescription)))
        )
      )
    )
  );

  loginCryptorSuccess$ = createEffect(() =>
    this.action$.pipe(
      ofType(AuthActions.loginCryptorSuccess),
      map((action) => AuthActions.tokenSuccess(action.payload))
    )
  );

  setToken$ = createEffect(() =>
    this.action$.pipe(
      ofType(AuthActions.loginWithOtpSuccess, AuthActions.tokenSuccess),
      map((action) => AuthActions.setToken({ token: action.payload }))
    )
  );

  tokenSuccessEffect$ = createEffect(() =>
    this.action$.pipe(
      ofType(AuthActions.loginWithOtpSuccess, AuthActions.tokenSuccess),
      map(() => AuthActions.loadProfileRequest())
    )
  );

  loadProfileRequestEffect$ = createEffect(() =>
    this.action$.pipe(
      ofType(AuthActions.loadProfileRequest),
      switchMap(() =>
        this.userService.getProfile().pipe(
          map((profile) => AuthActions.loadProfileSuccess(profile)),
          catchError((error) => of(AuthActions.loadProfileFailure(error.error.Message)))
        )
      )
    )
  );

  logoutByUser$ = createEffect(() =>
    this.action$.pipe(
      ofType(AuthActions.logoutByUser),
      map(() => AuthActions.logout())
    )
  );

  loadCryptorTokens$ = createEffect(() =>
    this.action$.pipe(
      ofType(AuthActions.loadCryptorTokens),
      switchMap((_) =>
        this.cryptorService.getTokens().pipe(
          map((tokens) => AuthActions.loadCryptorTokensSuccess(tokens)),
          catchError((error) => of(AuthActions.loadCryptorTokensFailure(error.message)))
        )
      )
    )
  );

  loadCryptorTokensSuccess$ = createEffect(() =>
    this.action$.pipe(
      ofType(AuthActions.loadCryptorTokensSuccess),
      switchMap((action) => [
        AuthActions.setCryptorTokens({ tokens: action.payload }),
        AuthActions.setCryptorToken({ token: action.payload[0] }),
      ])
    )
  );

  setCryptorToken$ = createEffect(() =>
    this.action$.pipe(
      ofType(AuthActions.setCryptorToken),
      filter((action) => !!action.token),
      map((action) => AuthActions.loadCryptorKeys(action.token as CryptorToken))
    )
  );

  loadCryptorKeys$ = createEffect(() =>
    this.action$.pipe(
      ofType(AuthActions.loadCryptorKeys),
      switchMap((action) =>
        this.cryptorService.init(action.payload).pipe(
          switchMap((_) =>
            this.cryptorService.getKeys(action.payload).pipe(
              map((keys) => AuthActions.loadCryptorKeysSuccess(keys)),
              catchError((error) => of(AuthActions.loadCryptorKeysFailure(error.message)))
            )
          ),
          catchError((error) => of(AuthActions.loadCryptorKeysFailure(error.message)))
        )
      )
    )
  );

  loadCryptorKeysSuccess$ = createEffect(() =>
    this.action$.pipe(
      ofType(AuthActions.loadCryptorKeysSuccess),
      switchMap((action) => [
        AuthActions.setCryptorKeys({ keys: action.payload }),
        AuthActions.setCryptorKey({ key: action.payload[0] }),
      ])
    )
  );

  loadCryptorKeysError$ = createEffect(() =>
    this.action$.pipe(
      ofType(AuthActions.loadCryptorKeysFailure),
      switchMap((action) => [AuthActions.setCryptorKeys({ keys: [] }), AuthActions.setCryptorKey({ key: undefined })])
    )
  );

  loginCryptor$ = createEffect(() =>
    this.action$.pipe(
      ofType(AuthActions.loginCryptor),
      switchMap((action) =>
        this.cryptorService
          .signBufferByKey(this.toHex(this.guid()).toUpperCase(), action.payload.key, action.payload.token)
          .pipe(
            switchMap((sign) =>
              this.authService
                .loginBySign({
                  keyId: action.payload.key.id,
                  tokenId: action.payload.token.tokenId,
                  moduleName: action.payload.token.moduleName || 'vega2',
                  buffer: sign.buffer,
                  sign: sign.sign,
                })
                .pipe(
                  map((token) => AuthActions.loginCryptorSuccess(token)),
                  catchError((error) => of(AuthActions.loginCryptorFailure(error.error.errorDescription)))
                )
            ),
            catchError((error) => of(AuthActions.loginCryptorFailure(error.message)))
          )
      )
    )
  );

  guid(): string {
    function s4(): string {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }

  toHex(str: string): string {
    let hex = '';
    for (let i = 0; i < str.length; i++) {
      hex += '' + str.charCodeAt(i).toString(16);
    }
    return hex;
  }
  // initCryptor$ = createEffect(() =>
  //     this.action$.pipe(
  //         ofType(AuthActions.initCryptor),
  //         switchMap(_ => this.cryptorService.getTokens().pipe(
  //             switchMap(tokens => this.cryptorService.init(tokens[0]).pipe(
  //                 switchMap(_ => this.cryptorService.getKeys(tokens[0]).pipe(
  //                     map(keys => AuthActions.initCryptorSuccess({ tokens, keys })),
  //                     catchError(error => of(AuthActions.initCryptorFailure(error.message)))
  //                 ))
  //             ))
  //         ))
  //     ));
}
