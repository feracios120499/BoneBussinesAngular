import { AccountTab } from '@modules/accounts/models/acct-tab.enum';
import { createFormGroupState, FormGroupState } from 'ngrx-forms';
import { AcctFilter } from '@modules/accounts/models/acct-filter.model';
import { AcctLoadings } from '@modules/accounts/models/acct-loadings.type';
import { AccountModel } from '../models/account.model';

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
    OTHER: false,
  },
});

export const initialState: AcctState = {
  accounts: undefined,
  currentTab: AccountTab.Active,
  filterForm: initialFormState,
  loadings: [],
};
