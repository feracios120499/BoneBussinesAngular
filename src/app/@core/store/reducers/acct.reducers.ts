
import { setAccounts, setTab } from '@actions/acct.actions';
import { AccountTab } from '@modules/accounts/models/acct-tab.enum';
import { createReducer, on } from '@ngrx/store';
import { createFormGroupState, FormGroupState, onNgrxForms } from 'ngrx-forms';
import { AccountModel } from 'src/app/@shared/models/account.model';
import { Filter } from 'src/app/@shared/models/filter.model';

export const ACCT_KEY = 'acct';

export interface AcctState {
    accounts: AccountModel[] | undefined;
    currentTab: AccountTab;
    filterForm: FormGroupState<Filter>;
}


const initalFromState = createFormGroupState<Filter>('TEST', {
    filter: undefined
});

export const initialState: AcctState = {
    accounts: undefined,
    currentTab: AccountTab.Active,
    filterForm: initalFromState
};



export const acctReducers = createReducer(
    initialState,
    onNgrxForms(),
    on(
        setAccounts,
        (state, action) => ({ ...state, accounts: action.accounts })
    ),
    on(
        setTab,
        (state, action) => ({ ...state, currentTab: action.tab })
    )
);
