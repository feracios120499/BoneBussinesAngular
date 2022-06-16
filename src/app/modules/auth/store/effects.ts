import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { BarsCryptorService } from '@services/sign/bars-cryptor.service';
import { CryptorToken } from '@services/sign/models/cryptor-token.model';
import { UserService } from '@services/user-service/user.service';
import { AppActions } from '@store/app/actions';
import { of } from 'rxjs';
import { catchError, filter, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { AuthService } from '../services/auth-service/auth.service';
import { required } from '@store/shared';
import { AuthActions } from './actions';
import { AuthSelectors } from './selectors';
import { NotifyActions } from '@store/notify/actions';
import { TranslateService } from '@ngx-translate/core';
import { RouteActions } from '@store/route/actions';
import { PasswordRestrictions } from '../models/password-restrictions.model';
import { ServerError } from '@models/errors/server-error.model';

@Injectable()
export class AuthEffects {
  constructor(
    private action$: Actions,
    private store: Store,
    private authService: AuthService,
    private userService: UserService,
    private cryptorService: BarsCryptorService,
    private translateService: TranslateService
  ) {}

  activateDemo$ = createEffect(() =>
    this.action$.pipe(
      ofType(AppActions.activateDemo),
      map(() => AuthActions.loginRequest({ password: 'demo', userName: 'demo' }))
    )
  );

  loginRequest$ = createEffect(() =>
    this.action$.pipe(
      ofType(AuthActions.loginRequest),
      switchMap((action) =>
        this.authService.logIn(action.payload).pipe(
          map((response) => AuthActions.loginSuccess(response)),
          catchError((error) => {
            if (error.status === 426) {
              return of(
                AuthActions.loginFailure(''),
                AuthActions.setNeedChangeTechPassword({ techPassword: action.payload.password })
              );
            }
            return of(AuthActions.loginFailure(error.message));
          })
        )
      )
    )
  );

  setNeedChangeTechPassword$ = createEffect(() =>
    this.action$.pipe(
      ofType(AuthActions.setNeedChangeTechPassword),
      switchMap(() => [
        RouteActions.routeTo({ route: '/auth/changePassword' }),
        NotifyActions.warningNotification({
          title: this.translateService.instant('components.auth.passChangingWarningHead'),
          message: this.translateService.instant('components.auth.passwordChangeWarning'),
        }),
      ])
    )
  );

  // loginError$ = createEffect(() =>
  //   this.action$.pipe(
  //     ofType(AuthActions.loginFailure),
  //     map((action) =>
  //       NotifyActions.errorNotification({
  //         message: action.payload,
  //         title: 'error',
  //       })
  //     )
  //   )
  // );

  loginWithOtp$ = createEffect(() =>
    this.action$.pipe(
      ofType(AuthActions.loginRequest),
      switchMap((action) =>
        this.action$.pipe(
          ofType(AuthActions.loginWithOtpRequest),
          switchMap((otpAction) =>
            this.authService.loginWithOtp(action.payload, otpAction.payload).pipe(
              map((token) => AuthActions.loginWithOtpSuccess(token)),
              catchError((error) => of(AuthActions.loginWithOtpFailure(error.message)))
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
          catchError((error) => of(AuthActions.tokenFailure(error.message)))
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
          catchError((error) => of(AuthActions.loadProfileFailure(error.message)))
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
                  catchError((error) => of(AuthActions.loginCryptorFailure(error.message)))
                )
            ),
            catchError((error) => of(AuthActions.loginCryptorFailure(error.message)))
          )
      )
    )
  );

  restorePasswordRequest$ = createEffect(() =>
    this.action$.pipe(
      ofType(AuthActions.restorePasswordRequest),
      switchMap(({ payload }) =>
        this.authService.restorePassword(payload).pipe(
          switchMap(() => [AuthActions.restorePasswordSuccess(), AuthActions.setNeedOtp(payload)]),
          catchError((error) => of(AuthActions.restorePasswordFailure(error.message)))
        )
      )
    )
  );

  restorePasswordWithOtpRequest$ = createEffect(() =>
    this.action$.pipe(
      ofType(AuthActions.restorePasswordWithOtpRequest),
      withLatestFrom(required(this.store.select(AuthSelectors.phone))),
      switchMap(([{ payload }, phone]) =>
        this.authService.restorePasswordWithOtp({ phone }, payload.confirmCode).pipe(
          map(() => AuthActions.restorePasswordWithOtpSuccess()),
          catchError((error) => of(AuthActions.restorePasswordWithOtpFailure(error.message)))
        )
      )
    )
  );

  restorePasswordWithOtpSuccess$ = createEffect(() =>
    this.action$.pipe(
      ofType(AuthActions.restorePasswordWithOtpSuccess),
      switchMap(() => [
        NotifyActions.successNotification({
          title: this.translateService.instant('shared.success'),
          message: this.translateService.instant('components.auth.PasswordSuccessfullyChangedAndSMSSended'),
        }),
        AuthActions.clearNeedOtp(),
        RouteActions.routeTo({ route: '/auth/logon' }),
      ])
    )
  );

  loadPassRestrictions$ = createEffect(() =>
    this.action$.pipe(
      ofType(AuthActions.loadPassRestrictionsRequest),
      switchMap(() =>
        this.authService.getPassRestrictions().pipe(
          map((restrictions: PasswordRestrictions) => AuthActions.loadPassRestrictionsSuccess(restrictions)),
          catchError((error: ServerError) =>
            of(
              AuthActions.loadPassRestrictionsFailure(error.message),
              NotifyActions.serverErrorNotification({
                error,
                message: this.translateService.instant('components.auth.errors.loadPassRestrictions'),
              })
            )
          )
        )
      )
    )
  );

  changePasswordRequest$ = createEffect(() =>
    this.action$.pipe(
      ofType(AuthActions.changePasswordRequest),
      switchMap(({ payload }) =>
        this.authService.changePassword(payload).pipe(
          switchMap(() => [
            AuthActions.changePasswordSuccess(payload),
            AuthActions.setNeedOtp({ phone: payload.userName }),
          ]),
          catchError((error) => of(AuthActions.changePasswordFailure(error.message)))
        )
      )
    )
  );

  changePasswordWithOtpRequest$ = createEffect(() =>
    this.action$.pipe(
      ofType(AuthActions.changePasswordWithOtpRequest),
      withLatestFrom(required(this.store.select(AuthSelectors.changePasswordData))),
      switchMap(([{ payload }, data]) =>
        this.authService.changePasswordWithOtp(data, payload.confirmCode).pipe(
          map(() => AuthActions.changePasswordWithOtpSuccess()),
          catchError((error) => of(AuthActions.changePasswordWithOtpFailure(error.message)))
        )
      )
    )
  );

  changePasswordWithOtpSuccess$ = createEffect(() =>
    this.action$.pipe(
      ofType(AuthActions.changePasswordWithOtpSuccess),
      switchMap(() => [
        NotifyActions.successNotification({
          title: this.translateService.instant('shared.success'),
          message: this.translateService.instant('components.auth.PasswordSuccessfullyChanged'),
        }),
        AuthActions.clearNeedOtp(),
        AuthActions.clearTechPassword(),
        AuthActions.clearChangePasswordData(),
        RouteActions.routeTo({ route: '/auth/logon' }),
      ])
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
