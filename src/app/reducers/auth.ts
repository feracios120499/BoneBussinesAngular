import { Token } from './../modules/auth/models/token.model';
import { LogInModel } from './../modules/auth/models/login.model';
import { createAction, createFeatureSelector, createReducer, createSelector, on, props } from '@ngrx/store';
import { LoginResponse } from '../modules/auth/models/login.response';

export const AUTH_KEY = 'auth';

export interface AuthState {
    isLoading: boolean;
    loginData: LogInModel | undefined;
    loginResponse: LoginResponse | undefined;
    error: string | undefined;
    isNeedOtp: boolean;
    token: Token | undefined;
}
export const initialState: AuthState = {
    isLoading: false,
    loginData: undefined,
    loginResponse: undefined,
    error: undefined,
    isNeedOtp: false,
    token: undefined
};

export const resetLogin = createAction(
    '[AUTH] reset login data'
);

export const login = createAction(
    '[AUTH] login by login',
    props<{ model: LogInModel }>()
);

export const loginToken = createAction(
    '[AUTH] login token',
    props<{ model: LogInModel }>()
);



export const loginSuccess = createAction(
    '[AUTH] login success',
    props<{ token: Token }>()
);
export const loginFailure = createAction(
    '[AUTH] login error',
    props<{ message: string }>()
);

export const setNeedOtp = createAction(
    '[AUTH] set need otp',
    props<{ isNeedOtp: boolean, phone: string | undefined }>()
);

export const setIsLoading = createAction(
    '[AUTH] set is loaidng',
    props<{ isLoading: boolean }>()
);

export const authReducer = createReducer(
    initialState,
    on(resetLogin, (state, action) => ({
        ...initialState
    })),
    on(login, (state, action) => ({
        ...state,
        loginData: { ...action.model }
    })),
    on(loginFailure, (state, action) => ({
        ...state,
        error: action.message
    })),
    on(setNeedOtp, (state, action) => ({
        ...state,
        isNeedOtp: action.isNeedOtp
    })),
    on(setIsLoading, (state, action) => ({
        ...state,
        isLoading: action.isLoading
    }))
);

export const featureSelector = createFeatureSelector<AuthState>(AUTH_KEY);

export const loginResponseSelector = createSelector(
    featureSelector,
    state => state.loginResponse
);

export const errorSelector = createSelector(
    featureSelector,
    state => state.error
);

export const isLoadingSelector = createSelector(
    featureSelector,
    state => state.isLoading
)



