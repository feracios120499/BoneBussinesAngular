import { createFeatureSelector, createSelector } from '@ngrx/store';

import { PUBLIC_KEY, PublicState } from './store';

export namespace PublicSelectors {
    export const publicStore = createFeatureSelector<PublicState>(PUBLIC_KEY);

    export const banks = createSelector(
        publicStore,
        state => state.banks
    );

    export const bank = (bankCode: string) => createSelector(
        banks,
        (state) => state.find(p => p.BankCode === bankCode)
    );
}
