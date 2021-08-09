import { AccountTab } from '@modules/accounts/models/acct-tab.enum';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AccountModel } from 'src/app/@shared/models/account.model';
import { FilterCurrency, FilterCurrencyType } from 'src/app/@shared/models/filter.model';
import { AcctState, ACCT_KEY } from '@stores/acct.store';
import { selectRouteNestedParams } from './router.selectors';

export const featureSelector = createFeatureSelector<AcctState>(ACCT_KEY);

export const countActiveAccountsSelector = createSelector(
    featureSelector,
    state => !state.accounts ? 0 : (state.accounts as AccountModel[]).filter(p => p.Status === AccountTab.Active).length
);

export const countClosedAccountsSelector = createSelector(
    featureSelector,
    state => !state.accounts ? 0 : (state.accounts as AccountModel[]).filter(p => p.Status === AccountTab.Closed).length
);

export const accountsSelector = createSelector(
    featureSelector,
    state => state.accounts
);

export const accountsOnTabSelector = createSelector(
    featureSelector,
    state => state.accounts?.filter(p => p.Status === state.currentTab) || []
);

export const currentTabSelector = createSelector(
    featureSelector,
    state => state.currentTab
);

export const formSelector = createSelector(
    featureSelector,
    state => state.filterForm
);

export const editFormSelector = createSelector(
    featureSelector,
    state => state.editForm
);

export const filterAccountsSelector = createSelector(
    featureSelector,
    state => state.filterForm.controls.filter.value
);

export const FilterCurrencySelector = createSelector(
    featureSelector,
    state => {
        if (state.filterForm.value.currency.OTHER === true) {
            const result: FilterCurrency = {
                currencies: Object.keys(
                    state.filterForm.value.currency
                ).filter(p => p !== 'OTHER'),
                type: FilterCurrencyType.Exclude
            };
            return result;
        }
        else {
            const result: FilterCurrency = {
                currencies: Object.keys(
                    state.filterForm.value.currency
                ).filter(p => p !== 'OTHER' && state.filterForm.value.currency[p] === true),
                type: FilterCurrencyType.Include
            };
            return result;
        }
    }
);

export const isLoadingAccountsSelector = createSelector(
    featureSelector,
    state => state.loadings.indexOf('list') >= 0
);

export const isLoadingCurrentAccountSelector = createSelector(
    featureSelector,
    state => state.loadings.indexOf('account') >= 0
);


export const currentAccountSelector = createSelector(
    featureSelector,
    state => state.currentAccount
);

export const currentAccountRouteParamsSelector = createSelector(
    selectRouteNestedParams,
    ({ bankId, accountId }) => ({ bankId: (bankId as string) || '', accountId: parseInt(accountId || '', 10) })
);

