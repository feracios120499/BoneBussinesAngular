import { createAction, props } from '@ngrx/store';
import { Profile } from 'src/app/@shared/models/profile.model';
import { Notification } from 'src/app/@shared/models/notification.model';
import { MenuItem } from 'src/app/@shared/models/menu-item.model';

// loadProfileRequest action
export const loadProfileRequest = createAction('[USER] load profile');

// loadProfileSuccess action
export const loadProfileSuccess = createAction(
    '[USER] load profile success',
    props<{ profile: Profile }>()
);

// loadProfileFailure action
export const loadProfileFailure = createAction(
    '[USER] load profile failure',
    props<{ error: string }>()
);

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


