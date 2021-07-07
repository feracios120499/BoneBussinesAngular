import * as authActions from '@actions/auth.actions';
import * as userActions from '@actions/user.actions';
import { createReducer, on } from '@ngrx/store';
import { MenuItem } from 'src/app/@shared/models/menu-item.model';
import { Notification } from 'src/app/@shared/models/notification.model';
import { Profile } from 'src/app/@shared/models/profile.model';

export const USER_KEY = 'user';

export interface UserState {
    profile: Profile | undefined;
    notifications: Notification[];
    currentClientId: string | undefined;
    menu: MenuItem[] | undefined;
    subMenu: MenuItem[] | undefined;
}

export const initialState: UserState = {
    profile: undefined,
    notifications: new Array<Notification>(),
    currentClientId: undefined,
    menu: undefined,
    subMenu: undefined
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
    ),
    on(
        userActions.setCurrentClientId,
        (state, action) => ({ ...state, currentClientId: action.clientId })
    ),
    on(
        userActions.setMenu,
        (state, action) => ({ ...state, menu: action.menu })
    ),
    on(
        userActions.setSubMenu,
        (state, action) => ({ ...state, subMenu: action.menu })
    )
);
