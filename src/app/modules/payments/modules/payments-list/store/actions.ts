import { DateRange } from '@models/date-range.model';
import { StatusCount } from '@models/status-count.model';
import { PaymentStatuses } from '@modules/payments/models/payment-status.type';
import { PaymentsListItem } from '@modules/payments/models/payments-list-item.model';
import { createAction, props } from '@ngrx/store';
import { createHTTPActions } from '@store/shared';
import { PAY_LIST_KEY } from './store';

export namespace PayListActions {
  export const init = createAction(`[${PAY_LIST_KEY}] init`);
  export const destroy = createAction(`[${PAY_LIST_KEY}] destroy`);

  export const setTab = createAction(`[${PAY_LIST_KEY}] set tab`, props<{ tab: PaymentStatuses }>());

  export const filter = createAction(`[${PAY_LIST_KEY}] filter`, props<{ filter: string }>());

  export const setRange = createAction(`[${PAY_LIST_KEY}] set range`, props<{ range: DateRange }>());

  export const selectAll = createAction(`[${PAY_LIST_KEY}] select all`, props<{ payments: PaymentsListItem[] }>());

  export const selectPayment = createAction(`[${PAY_LIST_KEY}] select payment`, props<{ payment: PaymentsListItem }>());

  export const [loadCountRequest, loadCountSuccess, loadCountFailure] = createHTTPActions<void, StatusCount, string>(
    `[${PAY_LIST_KEY}] load count`
  );

  export const [loadPaymentsRequest, loadPaymentsSuccess, loadPaymentsFailure] = createHTTPActions<
    void,
    PaymentsListItem[],
    string
  >(`[${PAY_LIST_KEY}] load payments`);
}
