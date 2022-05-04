import { UiTransaction } from '@modules/accounts/models/transaction.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { isAnyExist } from '@store/shared';
import { PayIncomingState, PAY_INCOMING_KEY } from './store';

export namespace PayIncomingSelectors {
  export const incomingState = createFeatureSelector<PayIncomingState>(PAY_INCOMING_KEY);

  export const transactions = createSelector(incomingState, (store) =>
    store.transactions.map((transaction) => {
      const uiTransaction: UiTransaction = {
        ...transaction,
        selected: isAnyExist(store.selectedIds, transaction.id),
      };
      return uiTransaction;
    })
  );
}
