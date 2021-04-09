import { LoginResponse } from '@modules/auth/models/login.response';
import { LogInModel } from '@modules/auth/models/login.model';
import { createAction, props } from '@ngrx/store';
import { Token } from '@modules/auth/models/token.model';


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





