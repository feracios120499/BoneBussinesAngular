import { ImportResponse } from '@modules/payments/models/import-response.model';
import { ImportStatus } from '@modules/payments/models/import-status.type';
import { createAction, props } from '@ngrx/store';
import { PAY_IMPORT_COMMON_KEY } from './store';

export namespace PayImportCommonActions {
  export const init = createAction(`[${PAY_IMPORT_COMMON_KEY}] init`);
  export const destroy = createAction(`[${PAY_IMPORT_COMMON_KEY}] destroy`);

  export const setResponse = createAction(
    `[${PAY_IMPORT_COMMON_KEY}] set response`,
    props<{ response: ImportResponse }>()
  );
  export const setTab = createAction(`[${PAY_IMPORT_COMMON_KEY}] set tab`, props<{ tab: ImportStatus }>());
}
