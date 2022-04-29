import { AccountModel } from '@modules/accounts/models/account.model';
import { FilterCurrency } from '@models/filter.model';
import { AccountTab } from '@modules/accounts/models/acct-tab.enum';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AcctLoadings } from '@modules/accounts/models/acct-loadings.type';

import { ACCT_KEY, AcctState } from './store';

export namespace AcctSelectors {
  export const acctStore = createFeatureSelector<AcctState>(ACCT_KEY);

  export const countActiveAccounts = createSelector(acctStore, (state) =>
    !state.accounts ? 0 : (state.accounts as AccountModel[]).filter((p) => p.status === AccountTab.Active).length
  );

  export const countClosedAccounts = createSelector(acctStore, (state) =>
    !state.accounts ? 0 : (state.accounts as AccountModel[]).filter((p) => p.status === AccountTab.Closed).length
  );

  export const accountsSelector = createSelector(acctStore, (state) => state.accounts);

  export const accountsOnTab = createSelector(
    acctStore,
    (state) => state.accounts?.filter((p) => p.status === state.currentTab) || []
  );

  export const currentTab = createSelector(acctStore, (state) => state.currentTab);

  export const form = createSelector(acctStore, (state) => state.filterForm);

  export const filterAccounts = createSelector(acctStore, (state) => state.filterForm.controls.filter.value);

  export const filterCurrency = createSelector(acctStore, (state) => {
    if (state.filterForm.value.currency.OTHER === true) {
      const result: FilterCurrency = {
        currencies: Object.keys(state.filterForm.value.currency).filter((p) => p !== 'OTHER'),
        type: 'exclude',
      };
      return result;
    } else {
      const result: FilterCurrency = {
        currencies: Object.keys(state.filterForm.value.currency).filter(
          (p) => p !== 'OTHER' && state.filterForm.value.currency[p] === true
        ),
        type: 'include',
      };
      return result;
    }
  });

  export const isLoadingAccounts = createSelector(acctStore, (state) => state.loadings.indexOf('list') >= 0);

  export const isLoading = createSelector(acctStore, (state) => state.loadings.length != 0);

  // фильтруем открытые счета + сортируем сначала по гривне, а потом по дате активности
  export const activeAccounts = createSelector(accountsSelector, (accounts) =>
    accounts
      ?.filter((p) => p.status === AccountTab.Active)
      ?.sort((a, b) =>
        a.currencyCode === b.currencyCode
          ? (a.lastActive || new Date()) > (b.lastActive || new Date())
            ? 1
            : 0
          : a.currencyCode === 'UAH'
          ? -1
          : 1
      )
  );

  // TODO добавить признак что с счета можно списывать в платежах, на беке
  export const senderPaymentAccounts = createSelector(activeAccounts, (accounts) => accounts);

  // TODO добавить признак что с счета можно списывать в платежах, на беке
  export const recipientPaymentAccounts = createSelector(activeAccounts, (accounts) => accounts);
}
