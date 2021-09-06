import { createAction, createFeatureSelector, createSelector } from '@ngrx/store';
import { SharedState, SHARED_KEY } from './store';

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
