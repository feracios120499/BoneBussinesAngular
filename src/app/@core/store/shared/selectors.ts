import { createFeatureSelector, createSelector } from '@ngrx/store';

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
}
