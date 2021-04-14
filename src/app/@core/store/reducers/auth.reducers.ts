import * as authActions from '@actions/auth.actions';
import { LogInModel } from '@modules/auth/models/login.model';
import { Token } from '@modules/auth/models/token.model';
import { createReducer, on } from '@ngrx/store';

export const AUTH_KEY = 'auth';

export interface AuthState {
    isLoading: boolean;
    loginData: LogInModel | undefined;
    phone: string | undefined;
    error: string | undefined;
    isNeedOtp: boolean;
    token: Token | undefined;
}

export const initialState: AuthState = {
    isLoading: false,
    loginData: undefined,
    phone: undefined,
    error: undefined,
    isNeedOtp: false,
    token: undefined
};

export const authReducer = createReducer(
    initialState,
    on(
        authActions.loginFailure,
        authActions.loginSuccess,
        authActions.tokenFailure,
        authActions.tokenSuccess,
        state => ({ ...state, isLoading: false }),
    ),
    on(
        authActions.loginRequest,
        authActions.tokenLoginRequest,
        authActions.tokenOtpRequest,
        state => ({ ...state, isLoading: true, error: '' })
    ),
    on(
        authActions.loginFailure,
        authActions.tokenFailure,
        (state, action) => ({ ...state, error: action.message })
    ),
    on(
        authActions.tokenSuccess,
        (state, action) => ({ ...state, token: action.token })
    ),
    on(
        authActions.setNeedOtp,
        (state, action) => ({ ...state, isNeedOtp: true, phone: action.phone })
    ),
    on(
        authActions.loginRequest,
        (state, actions) => ({ ...state, loginData: actions.data })),
);
