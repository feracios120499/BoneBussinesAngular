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
        AuthActions.loadProfileSuccess,
        AuthActions.loadProfileFailure,
        state => ({ ...state, isLoading: false }),
    ),
    on(
        AuthActions.loginRequest,
        AuthActions.loginWithOtpRequest,
        AuthActions.tokenRequest,
        AuthActions.loadProfileRequest,
        state => ({ ...state, isLoading: true, error: '' })
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
        AuthActions.logout,
        (state) => ({ ...state, token: undefined })
    ),
    on(
        AuthActions.resetLogin,
        () => ({ ...initialState })
    )
);
