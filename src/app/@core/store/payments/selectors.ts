import { createFeatureSelector, createSelector } from '@ngrx/store';

import { PAY_KEY, PayState } from './store';

export namespace PaySelectors {

    export const payState = createFeatureSelector<PayState>(PAY_KEY);

    export const paymentLoading = createSelector(
        payState,
        (state) => state.loadings.includes('payment')
    );

    export const onSignLoading = createSelector(
        payState,
        (state) => state.loadings.includes('onSign')
    );

    export const signLoading = createSelector(
        payState,
        (state) => state.loadings.includes('sign')
    );

    export const toBankLoading = createSelector(
        payState,
        (state) => state.loadings.includes('toBank')
    );
}
