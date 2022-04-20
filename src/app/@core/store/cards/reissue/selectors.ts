import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CardReissueState, CARD_REISSUE_KEY } from './store';

export namespace CardReissueSelectors {
  export const reissueStore =
    createFeatureSelector<CardReissueState>(CARD_REISSUE_KEY);

  export const tab = createSelector(reissueStore, (store) => store.tab);
  export const count = createSelector(reissueStore, (store) => store.count);

  export const isLoading = createSelector(
    reissueStore,
    (store) => store.loadings.length !== 0
  );
}
