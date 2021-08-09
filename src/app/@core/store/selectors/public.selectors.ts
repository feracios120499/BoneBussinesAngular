import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PublicState, PUBLIC_KEY } from '@stores/public.store';


export const featureSelector = createFeatureSelector<PublicState>(PUBLIC_KEY);

export const banksSelector = createSelector(
    featureSelector,
    state => state.banks
);

export const bankSelector = (bankCode: string) => createSelector(
    banksSelector,
    (state) => state.find(p => p.BankCode === bankCode)
);
