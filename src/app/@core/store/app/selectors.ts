import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserSelectors } from '@store/user/selectors';
import { environment } from 'src/environments/environment';

import { APP_KEY, AppState } from './store';

export namespace AppSelectors {
    export const appStore = createFeatureSelector<AppState>(APP_KEY);

    export const globalLoader = createSelector(
        appStore,
        state => state.globalLoader
    );

    export const bankDate = createSelector(
        UserSelectors.currentCustomer,
        (currentCustomer) => currentCustomer?.BankDate
    );

    export const isMobile = createSelector(
        appStore,
        () => window.innerWidth <= environment.mobileWidth
    );
}

