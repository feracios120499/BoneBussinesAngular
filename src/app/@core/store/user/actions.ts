import { Profile } from '@models/profile.model';
import { Notification } from '@models/notification.model';
import { createAction, props } from '@ngrx/store';
import { createHTTPActions } from '@store/shared';

export namespace UserActions {

    export const [
        loadProfileRequest,
        loadProfileSuccess,
        loadProfileFailure
    ] = createHTTPActions<void, Profile, string>('[USER] load profile');

    export const checkProfile = createAction(
        '[USER] check profile'
    );

    export const profileExist = createAction(
        '[USER] profile exist'
    );

    export const loadNotifications = createAction(
        '[USER] load notifications'
    );

    export const setNotifications = createAction(
        '[USER] set notifications',
        props<{ notifications: Notification[] }>()
    );

    export const setCurrentClientId = createAction(
        '[USER] set current client id',
        props<{ clientId: string }>()
    );

    export const selectCurrentClientId = createAction(
        '[USER] select current client id',
        props<{ clientId: string }>()
    );
}



