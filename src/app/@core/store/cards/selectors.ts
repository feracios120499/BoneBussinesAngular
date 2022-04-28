import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CardsState, CARDS_KEY } from './store';

export namespace CardsSelectors {
  export const cardsStore = createFeatureSelector<CardsState>(CARDS_KEY);

  export const viewStateSelector = createSelector(cardsStore, (state) => state.viewState);

  export const form = createSelector(cardsStore, (state) => state.filterForm);

  export const openCardAccounts = createSelector(cardsStore, (state) => state.openAccounts);

  export const uiCardAccountsSelector = createSelector(cardsStore, openCardAccounts, (state, openAccounts) =>
    state.cardAccounts.map((p) => ({ ...p, isOpen: openAccounts.includes(p.id) }))
  );

  export const isLoading = createSelector(cardsStore, (state) => state.loadings.length !== 0);
}
