import { AccountModel } from '@models/account.model';
import { AccountTab } from '@modules/accounts/models/acct-tab.enum';
import { createFormGroupState, FormGroupState } from 'ngrx-forms';
import { AcctDetailsState } from './details/store';
import { AcctFilter } from './models/acct-filter.model';
import { AcctLoadings } from './models/acct-loadings.enum';



export const ACCT_KEY = 'acct';
export const ACCT_FILTER_FORM = 'ACCT_FILTER_FORM';


export interface AcctState {
    accounts: AccountModel[] | undefined;
    currentTab: AccountTab;
    filterForm: FormGroupState<AcctFilter>;
    loadings: Array<AcctLoadings>;
}

const initialFormState = createFormGroupState<AcctFilter>(ACCT_FILTER_FORM, {
    filter: undefined,
    currency: {
        UAH: false,
        USD: false,
        EUR: false,
        OTHER: false
    }
});

export const initialState: AcctState = {
    accounts: undefined,
    currentTab: AccountTab.Active,
    filterForm: initialFormState,
    loadings: []
};
