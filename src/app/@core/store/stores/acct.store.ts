import { AccountTab } from '@modules/accounts/models/acct-tab.enum';
import dayjs, { Dayjs } from 'dayjs';
import { box, Boxed, createFormGroupState, FormGroupState, NgrxValueConverter } from 'ngrx-forms';
import { AccountModel } from 'src/app/@shared/models/account.model';
import { Filter } from 'src/app/@shared/models/filter.model';

export const ACCT_KEY = 'acct';
export interface DateRange {
    start: string;
    end: string;
}

export const rangeValueConverter: NgrxValueConverter<any, Boxed<DateRange>> = {
    convertStateToViewValue: value => ({ start: value.value.start, end: value.value.end }),
    convertViewToStateValue: value => box(
        {
            start: dayjs.isDayjs(value.start) ? value.start.toISOString() : value.start,
            end: dayjs.isDayjs(value.end) ? value.end.toISOString() : value.end
        })
};
export interface AcctState {
    accounts: AccountModel[] | undefined;
    currentTab: AccountTab;
    filterForm: FormGroupState<AcctFilter>;
    loadings: Array<string>;
    currentAccount?: AccountModel;
    editForm: FormGroupState<AcctEdit>;
    transactionsFilterForm: FormGroupState<AcctTransactionsFilter>;
    turnovers?: any[];
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

export interface AcctTransactionsFilter {
    range: Boxed<DateRange>;
}
export const ACCT_FILTER_FORM = 'ACCT_FILTER_FORM';
export const ACCT_EDIT_FORM = 'ACCT_EDIT_FORM';
export const ACCT_TRANSACTIONS_FILTER_FORM = 'ACCT_TRANSACTIONS_FILTER_FORM';

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
    editForm: initialEditFormState,
    transactionsFilterForm: createFormGroupState<AcctTransactionsFilter>(ACCT_TRANSACTIONS_FILTER_FORM, {
        range: box({
            start: dayjs(dayjs().format('YYYY-MM-DD'), 'YYYY-MM-DD').toISOString(),
            end: dayjs(dayjs().format('YYYY-MM-DD'), 'YYYY-MM-DD').toISOString()
        })
    }),
    turnovers: []
};
