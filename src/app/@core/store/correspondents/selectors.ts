import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CorrespondentsState, CORRESPONDENTS_KEY } from './store';

export namespace CorrespondentsSelectors {
  export const correspondentsStore =
    createFeatureSelector<CorrespondentsState>(CORRESPONDENTS_KEY);

  export const correspondentList = createSelector(
    correspondentsStore,
    (state) => state.correspondents
  );

  export const filterTerm = createSelector(
    correspondentsStore,
    (state) => state.filterTerm
  );

  export const isLoadingCorrespondents = createSelector(
    correspondentsStore,
    (state) => state.loadings.includes('list')
  );
}
