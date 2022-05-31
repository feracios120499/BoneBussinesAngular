import { StatusResponse } from '@models/status-response.model';
import { ImportResponse, ImportResponsRow } from '@modules/payments/models/import-response.model';
import { ImportStatus } from '@modules/payments/models/import-status.type';
import { PaymentDetails } from '@modules/payments/models/payment-details.model';
import { createAction, props } from '@ngrx/store';
import { createHTTPActions } from '@store/shared';
import { PAY_IMPORT_COMMON_KEY } from './store';

export namespace PayImportCommonActions {
  export const init = createAction(`[${PAY_IMPORT_COMMON_KEY}] init`);
  export const destroy = createAction(`[${PAY_IMPORT_COMMON_KEY}] destroy`);

  export const setResponse = createAction(
    `[${PAY_IMPORT_COMMON_KEY}] set response`,
    props<{ response: ImportResponse }>()
  );
  export const setTab = createAction(`[${PAY_IMPORT_COMMON_KEY}] set tab`, props<{ tab: ImportStatus }>());

  export const showPayment = createAction(
    `[${PAY_IMPORT_COMMON_KEY}] show payment`,
    props<{ payment: ImportResponsRow; payments: ImportResponsRow[] }>()
  );

  export const editPayment = createAction(
    `[${PAY_IMPORT_COMMON_KEY}] edit payment`,
    props<{ payment: ImportResponsRow }>()
  );

  export const saveEditPayment = createAction(
    `[${PAY_IMPORT_COMMON_KEY}] save edit payment`,
    props<{ payment: ImportResponsRow }>()
  );

  export const toSuccess = createAction(
    `[${PAY_IMPORT_COMMON_KEY}] to success`,
    props<{ payment: ImportResponsRow }>()
  );

  export const filter = createAction(`[${PAY_IMPORT_COMMON_KEY}] filter`, props<{ filter: string }>());

  export const saveResultFile = createAction(`[${PAY_IMPORT_COMMON_KEY}] save result file`);

  export const savePayments = createAction(`[${PAY_IMPORT_COMMON_KEY}] save payments preview`);

  export const [savePaymentsRequest, savePaymentsSuccess, savePaymentsFailure] = createHTTPActions<
    PaymentDetails[],
    StatusResponse[],
    string
  >(`[${PAY_IMPORT_COMMON_KEY}] save payments`);
}
