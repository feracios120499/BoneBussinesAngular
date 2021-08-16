import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState, APP_KEY } from '@stores/app.store';
import { environment } from 'src/environments/environment';
import { currentCustomerSelector } from './user.selectors';

export const appStoreSelector = createFeatureSelector<AppState>(APP_KEY);

export const globalLoaderSelector = createSelector(
    appStoreSelector,
    state => state.globalLoader
);

export const bankDateSelector = createSelector(
    currentCustomerSelector,
    (currentCustomer) => currentCustomer?.BankDate
);

export const isMobileSelector = createSelector(
    appStoreSelector,
    () => window.innerWidth <= environment.mobileWidth
);
