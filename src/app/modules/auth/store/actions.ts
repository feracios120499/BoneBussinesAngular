import { LoginModel } from '@modules/auth/models/login.model';
import { LoginResponse } from '@modules/auth/models/login.response';
import { Token } from '@modules/auth/models/token.model';
import { createAction, props } from '@ngrx/store';
import { CryptorKey } from '@services/sign/models/cryptor-key.model';
import { CryptorToken } from '@services/sign/models/cryptor-token.model';
import { createHTTPActions } from '@store/shared';
import { Profile } from 'src/app/@shared/models/profile.model';

export namespace AuthActions {
  export const [loginRequest, loginSuccess, loginFailure] = createHTTPActions<LoginModel, LoginResponse, string>(
    '[AUTH] login'
  );

  export const [loginWithOtpRequest, loginWithOtpSuccess, loginWithOtpFailure] = createHTTPActions<
    string,
    Token,
    string
  >('[AUTH] login with otp');

  export const [tokenRequest, tokenSuccess, tokenFailure] = createHTTPActions<LoginModel, Token, string>(
    '[AUTH] token'
  );

  export const resetLogin = createAction('[AUTH] reset login data');

  // setNeedOtp action
  export const setNeedOtp = createAction('[AUTH] sett need otp', props<{ phone: string }>());

  export const [loadProfileRequest, loadProfileSuccess, loadProfileFailure] = createHTTPActions<void, Profile, string>(
    '[AUTH] load profile'
  );

  // setToken action
  export const setToken = createAction('[AUTH] set token', props<{ token: Token }>());

  // logout action
  export const logout = createAction('[AUTH] logout');

  export const logoutByUser = createAction('[AUTH] logout by user');

  export const [loadCryptorTokens, loadCryptorTokensSuccess, loadCryptorTokensFailure] = createHTTPActions<
    void,
    CryptorToken[],
    string
  >('[AUTH] load cryptor tokens');

  export const setCryptorTokens = createAction('[AUTH] set cryptor tokens', props<{ tokens: CryptorToken[] }>());
  export const setCryptorToken = createAction('[AUTH] set cryptor token', props<{ token?: CryptorToken }>());

  export const [loadCryptorKeys, loadCryptorKeysSuccess, loadCryptorKeysFailure] = createHTTPActions<
    CryptorToken,
    CryptorKey[],
    string
  >('[AUTH] load cryptor keys');

  export const setCryptorKeys = createAction('[AUTH] set cryptor keys', props<{ keys: CryptorKey[] }>());
  export const setCryptorKey = createAction('[AUTH] set cryptor key', props<{ key?: CryptorKey }>());

  export const [loginCryptor, loginCryptorSuccess, loginCryptorFailure] = createHTTPActions<
    { key: CryptorKey; token: CryptorToken },
    Token,
    string
  >('[AUTH] login cryptor');
}
