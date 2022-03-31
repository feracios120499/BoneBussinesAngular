import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CardDetailsState, CARD_DETAILS_KEY } from './store';

export namespace CardDetailsSelectors {
  export const cardDetailsStore =
    createFeatureSelector<CardDetailsState>(CARD_DETAILS_KEY);

  export const currentTab = createSelector(
    cardDetailsStore,
    (store) => store.currentTab
  );
}
