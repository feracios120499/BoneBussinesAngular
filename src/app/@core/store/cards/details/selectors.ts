import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouteSelectors } from '@store/route/selectors';
import { CardDetailsState, CARD_DETAILS_KEY } from './store';

export namespace CardDetailsSelectors {
  export const cardDetailsStore =
    createFeatureSelector<CardDetailsState>(CARD_DETAILS_KEY);

  export const currentTab = createSelector(
    cardDetailsStore,
    (store) => store.currentTab
  );

  export const cardRouteParams = createSelector(
    RouteSelectors.selectRouteNestedParams,
    ({ cardId, accountId }) => ({
      cardId: (cardId as string) || '',
      accountId: parseInt(accountId || '', 10),
    })
  );

  export const card = createSelector(cardDetailsStore, (store) => store.card);
}
