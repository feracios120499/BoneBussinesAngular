import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserSelectors } from '@store/user/selectors';
import dayjs from 'dayjs';

import { SHARED_KEY, SharedState } from './store';

export namespace SharedSelectors {
    export const sharedStore = createFeatureSelector<SharedState>(SHARED_KEY);

    export const payment = createSelector(
        sharedStore,
        (store) => store.currentPayment.payment
    );

    export const loader = createSelector(
        sharedStore,
        (store) => store.currentPayment.loader
    );

    export const bankDate = createSelector(
        UserSelectors.currentCustomer,
        (currentCustomser) => dayjs(currentCustomser?.BankDate)
    );

    export const createPayment = createSelector(
        sharedStore,
        (state) => state.createPayment?.payment
    );
}
