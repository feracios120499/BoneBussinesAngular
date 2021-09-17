
import { createReducer, on } from '@ngrx/store';
import { AuthActions } from '@store/auth/actions';
import { UserActions } from './actions';
import { initialState } from './store';





export const userReducer = createReducer(
    initialState,
    on(
        AuthActions.loadProfileSuccess,
        UserActions.loadProfileSuccess,
        (state, action) => ({ ...state, profile: action.payload })
    ),
    on(
        UserActions.setNotifications,
        (state, action) => ({ ...state, notifications: action.notifications })
    ),
    on(
        UserActions.setCurrentClientId,
        (state, action) => ({ ...state, currentClientId: action.clientId })
    )
);
