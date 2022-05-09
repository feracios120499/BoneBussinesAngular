import { DatePipe } from '@angular/common';
import { UiTransaction } from '@modules/accounts/models/transaction.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TransactionsFilterPipe } from '@pipes/transactions-filter/transactions-filter.pipe';
import { FilterService } from '@services/filter.service';
import { isAnyExist } from '@store/shared';
import { PayIncomingState, PAY_INCOMING_KEY } from './store';

export namespace PayIncomingSelectors {
  export const incomingState = createFeatureSelector<PayIncomingState>(PAY_INCOMING_KEY);

  export const list = createSelector(incomingState, (store) => store.transactions);

  export const range = createSelector(incomingState, (store) => store.range);

  export const transactions = createSelector(incomingState, (store) =>
    store.transactions.map((transaction) => {
      const uiTransaction: UiTransaction = {
        ...transaction,
        selected: isAnyExist(store.selectedIds, transaction.id),
      };
      return uiTransaction;
    })
  );

  export const filteredTransactions = createSelector(transactions, incomingState, (transactions, store) => {
    const transactionFilter = new TransactionsFilterPipe(new FilterService(new DatePipe(window.navigator.language)));

    return transactionFilter.transform(transactions, store.filter);
  });

  export const isLoadingList = createSelector(incomingState, (store) => isAnyExist(store.loadings, 'list'));

  export const filter = createSelector(incomingState, (store) => store.filter);

  export const selectAll = createSelector(incomingState, (store) => store.selectAll);

  export const selectedTransactions = createSelector(transactions, (items) => items.filter((p) => p.selected));

  export const isLoading = createSelector(incomingState, (store) => store.loadings.length !== 0);
}
