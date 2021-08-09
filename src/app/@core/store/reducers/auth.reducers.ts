import * as authActions from '@actions/auth.actions';
import { createReducer, on } from '@ngrx/store';
import { initialState } from '@stores/auth.store';



export const authReducer = createReducer(
    initialState,
    on(
        authActions.loginFailure,
        authActions.loginSuccess,
        authActions.tokenFailure,
        authActions.tokenSuccess,
        authActions.authLoadProfileSuccess,
        authActions.authLoadProfileFailure,
        state => ({ ...state, isLoading: false }),
    ),
    on(
        authActions.loginRequest,
        authActions.tokenLoginRequest,
        authActions.tokenOtpRequest,
        authActions.authLoadProfileRequest,
        state => ({ ...state, isLoading: true, error: '' })
    ),
    on(
        authActions.loginFailure,
        authActions.tokenFailure,
        (state, action) => ({ ...state, error: action.message })
    ),
    on(
        authActions.setToken,
        (state, action) => ({ ...state, token: action.token })
    ),
    on(
        authActions.setNeedOtp,
        (state, action) => ({ ...state, isNeedOtp: true, phone: action.phone })
    ),
    on(
        authActions.loginRequest,
        (state, actions) => ({ ...state, loginData: actions.data })
    ),
    on(
        authActions.logout,
        (state) => ({ ...state, token: undefined })
    ),
    on(
        authActions.resetLogin,
        () => ({ ...initialState })
    )
);
