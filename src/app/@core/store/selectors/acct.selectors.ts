import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AcctState, ACCT_KEY } from '@reducers/acct.reducers';
import { AccountModel } from 'src/app/@shared/models/account.model';

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
