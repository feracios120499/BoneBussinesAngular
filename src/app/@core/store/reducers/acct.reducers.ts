
import {
    goToDetail,
    loadAccounts,
    loadCurrentAccount,
    loadCurrentAccountFailure,
    loadCurrentAccountSuccess,
    setAccounts,
    setCurrentAccount,
    setEditFormInitState,
    setTab
} from '@actions/acct.actions';
import { AccountTab } from '@modules/accounts/models/acct-tab.enum';
import { combineReducers, createReducer, on } from '@ngrx/store';
import {
    createFormGroupState,
    createFormStateReducerWithUpdate,
    FormGroupState, onNgrxForms,
    updateGroup,
    validate,
    wrapReducerWithFormStateUpdate
} from 'ngrx-forms';
import { required, greaterThanOrEqualTo, lessThan, maxLength } from 'ngrx-forms/validation';
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

const initialEditFormState = createFormGroupState<AcctEdit>(ACCT_EDIT_FORM, {
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

export const validateAndUpdateEditForm = updateGroup<AcctEdit>({
    name: validate(required, maxLength(70))
});


export const acctReducers = wrapReducerWithFormStateUpdate(
    createReducer(
        initialState,
        onNgrxForms(),

        on(
            setAccounts,
            (state, action) => ({ ...state, accounts: action.accounts })
        ),
        on(
            setTab,
            (state, action) => ({ ...state, currentTab: action.tab })
        ),
        on(
            loadAccounts,
            (state) => ({ ...state, loadings: [...state.loadings, 'list'] })
        ),
        on(
            setAccounts,
            (state) => ({ ...state, loadings: state.loadings.filter(p => p !== 'list') })
        ),
        on(
            goToDetail,
            setCurrentAccount,
            (state, action) => ({ ...state, currentAccount: action.account })
        ),
        on(
            loadCurrentAccount,
            (state) => ({ ...state, loadings: [...state.loadings, 'account'] })
        ),
        on(
            loadCurrentAccountSuccess,
            loadCurrentAccountFailure,
            (state) => ({ ...state, loadings: state.loadings.filter(p => p !== 'account') })
        ),
        on(
            setEditFormInitState,
            (state) => ({ ...state, editForm: initialEditFormState })
        )

    ),
    s => s.editForm,
    validateAndUpdateEditForm
);
