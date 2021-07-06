import { createFeatureSelector, createSelector } from '@ngrx/store';
import { USER_KEY, UserState } from '@reducers/user.reducers';
import { environment } from 'src/environments/environment';

export const featureSelector = createFeatureSelector<UserState>(USER_KEY);

export const profileSelector = createSelector(
    featureSelector,
    state => state.profile
);

export const countCustomersSelector = createSelector(
    featureSelector,
    state => state.profile?.Customers.length ?? 0
);

export const notificationsSelector = createSelector(
    featureSelector,
    state => state.notifications
);

export const countNotificationsSelector = createSelector(
    featureSelector,
    state => state.notifications.length
);

export const userNameSelector = createSelector(
    featureSelector,
    state => state.profile?.UserDisplayName || state.profile?.UserInternationalName || state.profile?.Email
);

// TODO fix this shit
export const userPictureSelector = createSelector(
    featureSelector,
    state => state.profile?.UserPictureUrl ? `http://10.10.10.130/Bars.API.Web.Client/api/v1${state.profile?.UserPictureUrl}` : environment.defaultUserPictureUrl
);
