import { LogInModel } from '@modules/auth/models/login.model';
import { LoginResponse } from '@modules/auth/models/login.response';
import { Token } from '@modules/auth/models/token.model';
import { createAction, props } from '@ngrx/store';
import { Profile } from 'src/app/@shared/models/profile.model';


export const loginRequest = createAction(
  '[AUTH] login request',
  props<{ data: LogInModel }>()
);

export const tokenLoginRequest = createAction(
  '[AUTH] token with login request',
  props<{ data: LogInModel | undefined }>()
);

export const tokenOtpRequest = createAction(
  '[AUTH] token with otp request',
  props<{ code: string }>()
);

export const resetLogin = createAction(
  '[AUTH] reset login data'
);

export const loginSuccess = createAction(
  '[AUTH] login success',
  props<{ response: LoginResponse }>()
);

export const loginFailure = createAction(
  '[AUTH] login error',
  props<{ message: string }>()
);

// tokenSuccess action
export const tokenSuccess = createAction(
  '[AUTH] token success',
  props<{ token: Token }>()
);

// tokenFailure action
export const tokenFailure = createAction(
  '[AUTH] token error',
  props<{ message: string }>()
);

export const setIsLoading = createAction(
  '[AUTH] set is loading',
  props<{ isLoading: boolean }>()
);

// setNeedOtp action
export const setNeedOtp = createAction(
  '[AUTH] sett need otp',
  props<{ phone: string | undefined }>()
);


// authLoadProfile action
export const authLoadProfileRequest = createAction(
  '[AUTH] load profile request'
);

// authLoadProfileSuccess action
export const authLoadProfileSuccess = createAction(
  '[AUTH] load profile success',
  props<{ profile: Profile }>()
);

// authLoadProfileFailure action
export const authLoadProfileFailure = createAction(
  '[AUTH] load profile failure',
  props<{ error: string }>()
);

// setToken action
export const setToken = createAction(
  '[AUTH] set token',
  props<{ token: Token }>()
);

// logout action
export const logout = createAction(
  '[AUTH] logout'
);

export const logoutByUser = createAction(
  '[AUTH] logout by user'
);





