import { createReducer, on } from '@ngrx/store';
import { AuthActions } from './actions';
import { initialState } from './store';



export const authReducer = createReducer(
    initialState,
    on(
        AuthActions.loginFailure,
        AuthActions.loginSuccess,
        AuthActions.tokenFailure,
        AuthActions.tokenSuccess,
        AuthActions.authLoadProfileSuccess,
        AuthActions.authLoadProfileFailure,
        state => ({ ...state, isLoading: false }),
    ),
    on(
        AuthActions.loginRequest,
        AuthActions.tokenLoginRequest,
        AuthActions.tokenOtpRequest,
        AuthActions.authLoadProfileRequest,
        state => ({ ...state, isLoading: true, error: '' })
    ),
    on(
        AuthActions.loginFailure,
        AuthActions.tokenFailure,
        (state, action) => ({ ...state, error: action.message })
    ),
    on(
        AuthActions.setToken,
        (state, action) => ({ ...state, token: action.token })
    ),
    on(
        AuthActions.setNeedOtp,
        (state, action) => ({ ...state, isNeedOtp: true, phone: action.phone })
    ),
    on(
        AuthActions.loginRequest,
        (state, actions) => ({ ...state, loginData: actions.data })
    ),
    on(
        AuthActions.logout,
        (state) => ({ ...state, token: undefined })
    ),
    on(
        AuthActions.resetLogin,
        () => ({ ...initialState })
    )
);
