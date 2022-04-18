import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouteSelectors } from '@store/route/selectors';
import { isAnyExist, isAnyExistArray } from '@store/shared';
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

  export const isLoading = createSelector(
    cardDetailsStore,
    (store) => store.loadings.length !== 0
  );

  export const isCardLoading = createSelector(cardDetailsStore, (store) =>
    isAnyExistArray(store.loadings, ['info', 'lockCard', 'unlockCard'])
  );

  export const limits = createSelector(
    cardDetailsStore,
    (store) => store.limits
  );

  export const isLimitsLoading = createSelector(
    cardDetailsStore,
    (store) =>
      store.loadings.indexOf('limits') !== -1 &&
      (!store.limits || store.limits.length === 0)
  );

  export const cardCurrency = createSelector(cardDetailsStore, (store) =>
    store.card ? store.card.currency : 'UAH'
  );

  export const isLimitEditable = createSelector(cardDetailsStore, (store) =>
    store.card
      ? !(
          store.card.status === 'UserBlocked' ||
          store.card.status === 'Blocked' ||
          store.card.status === 'Closed' ||
          store.card.status === 'Undefined'
        )
      : false
  );

  export const smsStatus = createSelector(
    cardDetailsStore,
    (store) => store.smsStatus
  );

  export const isSmsLoading = createSelector(
    cardDetailsStore,
    (store) =>
      store.loadings.indexOf('sms') !== -1 ||
      store.loadings.indexOf('updateSms') !== -1
  );

  export const lastApplication = createSelector(
    cardDetailsStore,
    (store) => store.lastApplication
  );

  export const isAbleToReissue = createSelector(
    cardDetailsStore,
    (store) =>
      store.card !== undefined &&
      store.card.isAbleToReissue &&
      store.card.status !== 'Blocked' &&
      store.card.status !== 'Closed' &&
      !isAnyExist(store.loadings, 'reissueApplication') &&
      store.lastApplication === undefined
  );
}
