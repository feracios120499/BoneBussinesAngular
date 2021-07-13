import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AcctState, ACCT_KEY } from '@reducers/acct.reducers';
import { AccountModel } from 'src/app/@shared/models/account.model';
import { FilterCurrency, FilterCurrencyType } from 'src/app/@shared/models/filter.model';

export const featureSelector = createFeatureSelector<AcctState>(ACCT_KEY);

export const countActiveAccountsSelector = createSelector(
    featureSelector,
    state => !state.accounts ? 0 : (state.accounts as AccountModel[]).filter(p => !p.ClosingDate).length
);

export const countClosedAccountsSelector = createSelector(
    featureSelector,
    state => !state.accounts ? 0 : (state.accounts as AccountModel[]).filter(p => p.ClosingDate).length
);

export const accountsSelector = createSelector(
    featureSelector,
    state => state.accounts
);

export const currentTabSelector = createSelector(
    featureSelector,
    state => state.currentTab
);

export const formSelector = createSelector(
    featureSelector,
    state => state.filterForm
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
