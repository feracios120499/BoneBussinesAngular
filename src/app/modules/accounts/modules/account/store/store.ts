import { AccountModel } from '@modules/accounts/models/account.model';
import dayjs from 'dayjs';
import { box, createFormGroupState, FormGroupState } from 'ngrx-forms';
import { AcctTransactionsFilter } from '@modules/accounts/models/acct-transaction-filter.model';
import { AcctEdit } from '@modules/accounts/models/acct-edit.model';
import { Turnovers } from '@modules/accounts/models/turnovers.model';

export const ACCT_DETAILS_KEY = 'acct_details';
export const ACCT_EDIT_FORM = 'ACCT_EDIT_FORM';
export const ACCT_TRANSACTIONS_FILTER_FORM = 'ACCT_TRANSACTIONS_FILTER_FORM';

export interface AcctDetailsState {
  account?: AccountModel;
  turnovers?: Turnovers[];
  openTurnovers: string[];
  loadTurnovers: string[];
  editForm: FormGroupState<AcctEdit>;
  transactionsFilterForm: FormGroupState<AcctTransactionsFilter>;
}

export const initialEditFormState = createFormGroupState<AcctEdit>(ACCT_EDIT_FORM, {
  name: '',
});

export const initialTransactions = createFormGroupState<AcctTransactionsFilter>(ACCT_TRANSACTIONS_FILTER_FORM, {
  range: box({
    start: dayjs(dayjs().format('YYYY-MM-DD'), 'YYYY-MM-DD').toISOString(),
    end: dayjs(dayjs().format('YYYY-MM-DD'), 'YYYY-MM-DD').toISOString(),
  }),
});

export const initialAcctDetailsState: AcctDetailsState = {
  account: undefined,
  turnovers: undefined,
  openTurnovers: [],
  loadTurnovers: [],
  editForm: initialEditFormState,
  transactionsFilterForm: initialTransactions,
};
