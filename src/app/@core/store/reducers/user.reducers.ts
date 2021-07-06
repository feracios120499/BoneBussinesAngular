import * as authActions from '@actions/auth.actions';
import * as userActions from '@actions/user.actions';
import { createReducer, on } from '@ngrx/store';
import { Notification } from 'src/app/@shared/models/notification.model';
import { Profile } from 'src/app/@shared/models/profile.model';

export const USER_KEY = 'user';

export interface UserState {
    profile: Profile | undefined;
    notifications: Notification[];
}

export const initialState: UserState = {
    profile: undefined,
    notifications: new Array<Notification>()
};


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
    )
);
