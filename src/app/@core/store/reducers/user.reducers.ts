import * as authActions from '@actions/auth.actions';
import * as userActions from '@actions/user.actions';
import { createReducer, on } from '@ngrx/store';
import { Profile } from 'src/app/@shared/models/profile.model';

export const USER_KEY = 'user';

export interface UserState {
    profile: Profile | undefined;
}

export const initialState: UserState = {
    profile: undefined
};


export const userReducer = createReducer(
    initialState,
    on(
        authActions.authLoadProfileSuccess,
        userActions.loadProfileSuccess,
        (state, action) => ({ ...state, profile: action.profile })
    ),
);
