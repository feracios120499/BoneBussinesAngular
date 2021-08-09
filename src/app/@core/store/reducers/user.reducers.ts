import * as authActions from '@actions/auth.actions';
import * as userActions from '@actions/user.actions';
import { createReducer, on } from '@ngrx/store';
import { initialState } from '@stores/user.store';




export const userReducer = createReducer(
    initialState,
    on(
        authActions.authLoadProfileSuccess,
        userActions.loadProfileSuccess,
        (state, action) => ({ ...state, profile: action.profile })
    ),
    on(
        userActions.setNotifications,
        (state, action) => ({ ...state, notifications: action.notifications })
    ),
    on(
        userActions.setCurrentClientId,
        (state, action) => ({ ...state, currentClientId: action.clientId })
    )
);
