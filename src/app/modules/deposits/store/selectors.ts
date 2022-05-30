import { createFeatureSelector, createSelector } from '@ngrx/store';

import { DepositsState, DEPOSITS_KEY } from './store';

export namespace DepositsSelectors {
  export const depositsStore = createFeatureSelector<DepositsState>(DEPOSITS_KEY);

  export const depositList = createSelector(depositsStore, (state) => state.deposits);

  export const filterTerm = createSelector(depositsStore, (state) => state.filterTerm);

  export const isInitialLoadingDeposits = createSelector(
    depositsStore,
    (state) => !state.deposits.length && state.loadings.includes('list')
  );

  export const isLoading = createSelector(depositsStore, (state) => !!state.loadings.length);
}
