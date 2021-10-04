import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { filter, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { USER_KEY, UserState } from './store';

export namespace UserSelectors {
    export const userStore = createFeatureSelector<UserState>(USER_KEY);

    export const profile = createSelector(
        userStore,
        state => state.profile
    );

    export const countCustomers = createSelector(
        userStore,
        state => state.profile?.customers.length ?? 0
    );

    export const customers = createSelector(
        profile,
        state => state?.customers
    );

    export const notifications = createSelector(
        userStore,
        state => state.notifications
    );

    export const countNotifications = createSelector(
        userStore,
        state => state.notifications.length
    );

    export const userName = createSelector(
        userStore,
        state => state.profile?.userDisplayName || state.profile?.userInternationalName || state.profile?.email
    );

    // TODO fix this shit
    export const userPicture = createSelector(
        userStore,
        state => state.profile?.userPictureUrl ? `http://10.10.10.130/Bars.API.Web.Client/api/v1${state.profile?.userPictureUrl}` : environment.defaultUserPictureUrl
    );

    export const currentClientIdSelector = createSelector(
        userStore,
        state => state.currentClientId
    );

    export const currentClientIdFiltered = (store: Store) => {
        return store.select(currentClientIdSelector).pipe(filter(value => !!value), map(value => value as string));
    };

    export const currentCustomer = createSelector(
        profile,
        currentClientIdSelector,
        (profile, currentClientId) => profile?.customers?.find(p => p.clientId === currentClientId)
    );

    export const currentCustomerName = createSelector(
        currentCustomer,
        (currentCustomer) => currentCustomer?.name
    );

    export const userEmail = createSelector(
        profile,
        (profile) => profile?.email
    );

    export const userPhone = createSelector(
        profile,
        (profile) => profile?.phoneNumber
    );

    export const isAvailableChange = createSelector(
        countCustomers,
        (countCustomers) => countCustomers >= 2
    );

}

