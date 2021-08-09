import { AccountTab } from '@modules/accounts/models/acct-tab.enum';
import { createFormGroupState, FormGroupState } from 'ngrx-forms';
import { AccountModel } from 'src/app/@shared/models/account.model';
import { Filter } from 'src/app/@shared/models/filter.model';

export const ACCT_KEY = 'acct';

export interface AcctState {
    accounts: AccountModel[] | undefined;
    currentTab: AccountTab;
    filterForm: FormGroupState<AcctFilter>;
    loadings: Array<string>;
    currentAccount?: AccountModel;
    editForm: FormGroupState<AcctEdit>;
}

export interface CurrencyFilter {
    UAH: boolean;
    USD: boolean;
    EUR: boolean;
    OTHER: boolean;
    [key: string]: boolean;
}
export interface AcctFilter extends Filter {
    currency: CurrencyFilter;
}
export interface AcctEdit {
    name: string;
}
export const ACCT_FILTER_FORM = 'ACCT_FILTER_FORM';
export const ACCT_EDIT_FORM = 'ACCT_EDIT_FORM';

const initialFormState = createFormGroupState<AcctFilter>(ACCT_FILTER_FORM, {
    filter: undefined,
    currency: {
        UAH: false,
        USD: false,
        EUR: false,
        OTHER: false
    }
});

export const initialEditFormState = createFormGroupState<AcctEdit>(ACCT_EDIT_FORM, {
    name: ''
});

export const initialState: AcctState = {
    accounts: undefined,
    currentTab: AccountTab.Active,
    filterForm: initialFormState,
    loadings: [],
    currentAccount: undefined,
    editForm: initialEditFormState
};
