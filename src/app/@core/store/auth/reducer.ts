import { createReducer, on } from '@ngrx/store';
import { CryptorKey } from '@services/sign/models/cryptor-key.model';
import { CryptorToken } from '@services/sign/models/cryptor-token.model';
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
    ),
    on(
        AuthActions.setCryptorKeys,
        (state, action) => ({ ...state, cryptor: { ...state.cryptor, keys: action.keys } })
    ),
    on(
        AuthActions.setCryptorTokens,
        (state, action) => ({ ...state, cryptor: { ...state.cryptor, tokens: action.tokens } })
    ),
    on(
        AuthActions.setCryptorToken,
        (state, action) => ({ ...state, cryptor: { ...state.cryptor, token: action.token } })
    ),
    on(
        AuthActions.setCryptorKey,
        (state, action) => ({ ...state, cryptor: { ...state.cryptor, key: action.key } })
    ),
    on(
        AuthActions.loginCryptorSuccess,
        (state) => ({ ...state, userKey: { token: state.cryptor.token as CryptorToken, key: state.cryptor.key as CryptorKey } })
    )
);
