import { AccountTab } from '@modules/accounts/models/acct-tab.enum';
import { createAction, props } from '@ngrx/store';
import { AccountModel } from 'src/app/@shared/models/account.model';


export namespace AcctActions {
    // loadAccounts action
    export const loadAccounts = createAction('[ACCT] load accounts', props<{ reload: boolean }>());


    // setAccounts action
    export const setAccounts = createAction('[ACCT] set accounts', props<{ accounts: AccountModel[] }>());

    // setTab action
    export const setTab = createAction('[ACCT] set tab', props<{ tab: AccountTab }>());

    export const goToDetail = createAction('[ACCT] go to detail', props<{ account: AccountModel }>());
}
