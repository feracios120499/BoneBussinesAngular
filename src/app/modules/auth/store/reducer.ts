import { createReducer, on } from '@ngrx/store';
import { CryptorKey } from '@services/sign/models/cryptor-key.model';
import { CryptorToken } from '@services/sign/models/cryptor-token.model';
import { pushIfNotExist, removeItem } from '@store/shared';
import { AuthActions } from './actions';
import { initialState } from './store';

export const authReducer = createReducer(
  initialState,
  on(
    AuthActions.loginRequest,
    AuthActions.loginWithOtpRequest,
    AuthActions.tokenRequest,
    AuthActions.loadProfileRequest,
    (state) => ({ ...state, loadings: [...pushIfNotExist(state.loadings, 'login')] })
  ),
  on(
    AuthActions.loginFailure,
    AuthActions.loginSuccess,
    AuthActions.tokenFailure,
    AuthActions.tokenSuccess,
    AuthActions.loadProfileSuccess,
    AuthActions.loadProfileFailure,
    (state) => ({ ...state, loadings: [...removeItem(state.loadings, 'login')] })
  ),
  on(AuthActions.restorePasswordRequest, AuthActions.restorePasswordWithOtpRequest, (state) => ({
    ...state,
    loadings: [...pushIfNotExist(state.loadings, 'passRestore')],
  })),
  on(
    AuthActions.restorePasswordSuccess,
    AuthActions.restorePasswordFailure,
    AuthActions.restorePasswordWithOtpSuccess,
    AuthActions.restorePasswordWithOtpFailure,
    (state) => ({ ...state, loadings: [...removeItem(state.loadings, 'passRestore')] })
  ),
  on(AuthActions.changePasswordRequest, AuthActions.changePasswordWithOtpRequest, (state) => ({
    ...state,
    loadings: [...pushIfNotExist(state.loadings, 'passChange')],
  })),
  on(
    AuthActions.changePasswordSuccess,
    AuthActions.changePasswordFailure,
    AuthActions.changePasswordWithOtpSuccess,
    AuthActions.changePasswordWithOtpFailure,
    (state) => ({ ...state, loadings: [...removeItem(state.loadings, 'passChange')] })
  ),
  on(
    AuthActions.loginRequest,
    AuthActions.loginWithOtpRequest,
    AuthActions.tokenRequest,
    AuthActions.loadProfileRequest,
    AuthActions.restorePasswordRequest,
    AuthActions.restorePasswordWithOtpRequest,
    AuthActions.changePasswordRequest,
    AuthActions.changePasswordWithOtpRequest,
    (state) => ({ ...state, error: '' })
  ),
  on(AuthActions.changePasswordSuccess, (state, { payload }) => ({ ...state, changePasswordData: payload })),
  on(
    AuthActions.loginFailure,
    AuthActions.restorePasswordFailure,
    AuthActions.restorePasswordWithOtpFailure,
    AuthActions.changePasswordFailure,
    AuthActions.changePasswordWithOtpFailure,
    (state, action) => ({
      ...state,
      error: action.payload,
    })
  ),
  on(AuthActions.setToken, (state, action) => ({ ...state, token: action.token })),
  on(AuthActions.setNeedOtp, (state, action) => ({ ...state, isNeedOtp: true, phone: action.phone })),
  on(AuthActions.clearNeedOtp, (state) => ({ ...state, isNeedOtp: false, phone: undefined })),
  on(AuthActions.logout, (state) => ({ ...state, token: undefined })),
  on(AuthActions.resetLogin, () => ({ ...initialState })),
  on(AuthActions.setCryptorKeys, (state, action) => ({ ...state, cryptor: { ...state.cryptor, keys: action.keys } })),
  on(AuthActions.setCryptorTokens, (state, action) => ({
    ...state,
    cryptor: { ...state.cryptor, tokens: action.tokens },
  })),
  on(AuthActions.setCryptorToken, (state, action) => ({
    ...state,
    cryptor: { ...state.cryptor, token: action.token },
  })),
  on(AuthActions.setCryptorKey, (state, action) => ({ ...state, cryptor: { ...state.cryptor, key: action.key } })),
  on(AuthActions.loginCryptorSuccess, (state) => ({
    ...state,
    userKey: { token: state.cryptor.token as CryptorToken, key: state.cryptor.key as CryptorKey },
  })),
  on(AuthActions.setNeedChangeTechPassword, (state, { techPassword }) => ({ ...state, techPassword })),
  on(AuthActions.clearTechPassword, (state) => ({ ...state, techPassword: undefined })),
  on(AuthActions.clearChangePasswordData, (state) => ({ ...state, changePasswordData: undefined })),
  on(AuthActions.loadPassRestrictionsRequest, (state) => ({
    ...state,
    loadings: [...pushIfNotExist(state.loadings, 'loadPassRestrictions')],
  })),
  on(AuthActions.loadPassRestrictionsSuccess, AuthActions.loadPassRestrictionsFailure, (state) => ({
    ...state,
    loadings: [...removeItem(state.loadings, 'loadPassRestrictions')],
  })),
  on(AuthActions.loadPassRestrictionsSuccess, (state, { payload }) => ({
    ...state,
    passRestrictions: payload,
  }))
);
