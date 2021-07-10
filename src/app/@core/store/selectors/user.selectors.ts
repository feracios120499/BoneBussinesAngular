import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { USER_KEY, UserState } from '@reducers/user.reducers';
import { pipe } from 'rxjs';
import { filter, map } from 'rxjs/operators';
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

export const currentClientIdSelector = createSelector(
    featureSelector,
    state => state.currentClientId
);

export const currentClientIdFilteredSelector = (store: Store) => {
    return store.select(currentClientIdSelector).pipe(filter(value => !!value), map(value => value as string));
};

export const currentCustomerSelector = createSelector(
    profileSelector,
    currentClientIdSelector,
    (profile, currentClientId) => profile?.Customers?.find(p => p.ClientId === currentClientId)
);

export const currentCustomerNameSelector = createSelector(
    currentCustomerSelector,
    (currentCustomer) => currentCustomer?.Name
);

export const menuSelector = createSelector(
    featureSelector,
    state => state.menu
);

export const subMenuSelector = createSelector(
    featureSelector,
    state => state.subMenu
);
