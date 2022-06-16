import { LoginModel } from '@modules/auth/models/login.model';
import { LoginResponse } from '@modules/auth/models/login.response';
import { Token } from '@modules/auth/models/token.model';
import { createAction, props } from '@ngrx/store';
import { CryptorKey } from '@services/sign/models/cryptor-key.model';
import { CryptorToken } from '@services/sign/models/cryptor-token.model';
import { createHTTPActions } from '@store/shared';
import { Profile } from 'src/app/@shared/models/profile.model';
import { ChangePasswordModel } from '../models/change-password.model';
import { PasswordRestrictions } from '../models/password-restrictions.model';
import { RestorePasswordModel } from '../models/restore-password.model';

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
  export const setNeedOtp = createAction('[AUTH] set need otp', props<{ phone: string }>());

  export const clearNeedOtp = createAction('[AUTH] clear need otp');

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

  export const [restorePasswordRequest, restorePasswordSuccess, restorePasswordFailure] = createHTTPActions<
    RestorePasswordModel,
    void,
    string
  >('[AUTH] restore password');

  export const [restorePasswordWithOtpRequest, restorePasswordWithOtpSuccess, restorePasswordWithOtpFailure] =
    createHTTPActions<{ confirmCode: string }, void, string>('[AUTH] restore password with otp');

  export const setNeedChangeTechPassword = createAction(
    '[AUTH] set need change tech password',
    props<{ techPassword: string }>()
  );

  export const clearTechPassword = createAction('[AUTH] clear tech password');

  export const [loadPassRestrictionsRequest, loadPassRestrictionsSuccess, loadPassRestrictionsFailure] =
    createHTTPActions<void, PasswordRestrictions, string>('[AUTH] load password restrictions');

  export const [changePasswordRequest, changePasswordSuccess, changePasswordFailure] = createHTTPActions<
    ChangePasswordModel,
    ChangePasswordModel,
    string
  >('[AUTH] change password');

  export const [changePasswordWithOtpRequest, changePasswordWithOtpSuccess, changePasswordWithOtpFailure] =
    createHTTPActions<{ confirmCode: string }, void, string>('[AUTH] change password with otp');

  export const clearChangePasswordData = createAction('[AUTH] clear change password data');
}
