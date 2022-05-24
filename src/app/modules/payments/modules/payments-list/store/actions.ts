import { DateRange } from '@models/date-range.model';
import { DocumentHistory } from '@models/document-history.model';
import { DocumentSign } from '@models/document-sign.model';
import { SignSaveResponse } from '@models/sign-response.model';
import { StatusCount } from '@models/status-count.model';
import { PaymentHistory } from '@modules/payments/models/payment-history.model';
import { PaymentStatuses } from '@modules/payments/models/payment-status.type';
import { PaymentsListItem } from '@modules/payments/models/payments-list-item.model';
import { PaymentsResponseResult } from '@modules/payments/models/payments-response.model';
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

  export const [printPaymentsRequest, printPaymentsSuccess, printPaymentsFailure] = createHTTPActions<
    number[],
    string,
    string
  >(`[${PAY_LIST_KEY}] print payments`);

  export const [deletePaymentsRequest, deletePaymentsSuccess, deletePaymentsFailure] = createHTTPActions<
    number[],
    PaymentsResponseResult[],
    string
  >(`[${PAY_LIST_KEY}] delete payments`);

  export const [sendOnSignPaymentsRequest, sendOnSignPaymentsSuccess, sendOnSignPaymentsFailure] = createHTTPActions<
    number[],
    PaymentsResponseResult[],
    string
  >(`[${PAY_LIST_KEY}] send on sign payments`);

  export const [signPaymentsRequest, signPaymentsSuccess, signPaymentsFailure] = createHTTPActions<
    number[],
    SignSaveResponse[],
    string
  >(`[${PAY_LIST_KEY}] sign payments`);

  export const [sendToBankPaymentsRequest, sendToBankPaymentsSuccess, sendToBankPaymentsFailure] = createHTTPActions<
    number[],
    PaymentsResponseResult[],
    string
  >(`[${PAY_LIST_KEY}] send to bank payments`);

  export const showPayment = createAction(
    `[${PAY_LIST_KEY}] show payment`,
    props<{ payment: PaymentsListItem; payments: PaymentsListItem[] }>()
  );

  export const setPayment = createAction(
    `[${PAY_LIST_KEY}] set payment`,
    props<{ payment: PaymentsListItem; payments: PaymentsListItem[] }>()
  );

  export const [showHistoryRequest, showHistorySuccess, showHistoryFailue] = createHTTPActions<
    PaymentsListItem,
    PaymentHistory[],
    string
  >(`[${PAY_LIST_KEY}] show history`);

  export const [showSignesRequest, showSignesSuccess, showSignesFailure] = createHTTPActions<
    PaymentsListItem,
    DocumentSign[],
    string
  >(`[${PAY_LIST_KEY}] show signes`);

  export const [dublicatePaymentRequest, dublicatePaymentSuccess, dublicatePaymentFailure] = createHTTPActions<
    PaymentsListItem,
    void,
    string
  >(`[${PAY_LIST_KEY}] dublicate payment`);
}
