import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserSelectors } from '@store/user/selectors';

import { APP_KEY, AppState } from './store';

export namespace AppSelectors {
    export const appStore = createFeatureSelector<AppState>(APP_KEY);

    export const globalLoader = createSelector(
        appStore,
        state => state.globalLoader
    );

    export const bankDate = createSelector(
        UserSelectors.currentCustomer,
        (currentCustomer) => currentCustomer?.bankDate
    );

    export const pageLoader = createSelector(
        appStore,
        state => state.pageLoader
    );
}

