import { createFeatureSelector, createSelector } from '@ngrx/store';

import { OverdraftsState, OVERDRAFTS_KEY } from './store';

export namespace OverdraftsSelectors {
  export const overdraftsStore = createFeatureSelector<OverdraftsState>(OVERDRAFTS_KEY);

  export const overdraftList = createSelector(overdraftsStore, (state) => state.overdrafts);

  export const filterTerm = createSelector(overdraftsStore, (state) => state.filterTerm);

  export const isInitialLoadingOverdrafts = createSelector(
    overdraftsStore,
    (state) => !state.overdrafts.length && state.loadings.includes('list')
  );

  export const isLoading = createSelector(overdraftsStore, (state) => !!state.loadings.length);
}
