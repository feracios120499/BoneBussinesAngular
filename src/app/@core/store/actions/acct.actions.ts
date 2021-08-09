
import { AccountTab } from '@modules/accounts/models/acct-tab.enum';
import { createAction, props } from '@ngrx/store';
import { AccountModel } from 'src/app/@shared/models/account.model';
import { createHTTPActions } from '../shared';
import { AcctEdit } from '@stores/acct.store';
// loadAccounts action
export const loadAccounts = createAction('[ACCT] load accounts', props<{ reload: boolean }>());


// setAccounts action
export const setAccounts = createAction('[ACCT] set accounts', props<{ accounts: AccountModel[] }>());

// setTab action
export const setTab = createAction('[ACCT] set tab', props<{ tab: AccountTab }>());

export const goToDetail = createAction('[ACCT] go to detail', props<{ account: AccountModel }>());

export const [
    loadCurrentAccount,
    loadCurrentAccountSuccess,
    loadCurrentAccountFailure
] = createHTTPActions<void, AccountModel, string>('[ACCT] load current account');

export const setCurrentAccount = createAction(
    '[ACCT] set current account',
    props<{ account: AccountModel }>()
);

// setAccountName action
export const setAccountName = createAction(
    '[ACCT] set account name',
    props<{ name: string }>()
);

// setEditFormInitState action
export const setEditFormInitState = createAction('[ACCT] set edit form init state');

// sumbitEditForm action
export const sumbitEditForm = createAction(
    '[ACCT] submit edit form'
);


export const [
    updateAccountRequest,
    updateAccountSuccess,
    updateAccountFailure
] = createHTTPActions<AcctEdit, AccountModel, string>('[ACCT] update account');
