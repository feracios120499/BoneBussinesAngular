
import { setAccounts, setTab } from '@actions/acct.actions';
import { AccountTab } from '@modules/accounts/models/acct-tab.enum';
import { createReducer, on } from '@ngrx/store';
import { AccountModel } from 'src/app/@shared/models/account.model';

export const ACCT_KEY = 'acct';

export interface AcctState {
    accounts: AccountModel[] | undefined;
    currentTab: AccountTab;
}

export const initialState: AcctState = {
    accounts: undefined,
    currentTab: AccountTab.Active
};

export const acctReducers = createReducer(
    initialState,
    on(
        setAccounts,
        (state, action) => ({ ...state, accounts: action.accounts })
    ),
    on(
        setTab,
        (state, action) => ({ ...state, currentTab: action.tab })
    )
);
