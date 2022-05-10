import { DateRange } from '@models/date-range.model';
import { Transaction } from '@modules/accounts/models/transaction.model';
import { createAction, props } from '@ngrx/store';
import { createHTTPActions } from '@store/shared';
import { PAY_INCOMING_KEY } from './store';

export namespace PayIncomingActions {
  export const init = createAction(`[${PAY_INCOMING_KEY}] init`);

  export const [loadTransactionsRequest, loadTransactionSuccess, loadTransactionsFailure] = createHTTPActions<
    DateRange,
    Transaction[],
    string
  >(`[${PAY_INCOMING_KEY}] load transactions`);

  export const destroy = createAction(`[${PAY_INCOMING_KEY}] destroy`);

  export const selectTransaction = createAction(
    `[${PAY_INCOMING_KEY}] select transaction`,
    props<{ transaction: Transaction }>()
  );

  export const filter = createAction(`[${PAY_INCOMING_KEY}] filter`, props<{ filter: string }>());

  export const selectAll = createAction(`[${PAY_INCOMING_KEY}] select all`, props<{ transactions: Transaction[] }>());

  export const setDateRange = createAction(`[${PAY_INCOMING_KEY}] set date range`, props<{ range: DateRange }>());

  export const printTransactions = createAction(`[${PAY_INCOMING_KEY}] print selected transactions`);

  export const [printTransactionsRequest, printTransactionsSuccess, printTransactionsFailure] = createHTTPActions<
    Transaction[],
    string,
    string
  >(`[${PAY_INCOMING_KEY}] print transactions`);

  export const showTransaction = createAction(
    `[${PAY_INCOMING_KEY}] show transaction`,
    props<{ transaction: Transaction; transactions: Transaction[] }>()
  );
}
