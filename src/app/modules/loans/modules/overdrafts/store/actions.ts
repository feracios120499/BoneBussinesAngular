import { createAction, props } from '@ngrx/store';

import { createHTTPActions } from '@store/shared';
import { Overdraft } from '../../../models/overdraft.model';
import { OVERDRAFTS_KEY } from './store';

export namespace OverdraftsActions {
  export const init = createAction(`[${OVERDRAFTS_KEY}] init`);

  export const destroy = createAction(`[${OVERDRAFTS_KEY}] destroy`);

  export const [loadOverdraftsRequest, loadOverdraftsSuccess, loadOverdraftsFailure] = createHTTPActions<
    void,
    Overdraft[],
    string
  >(`[${OVERDRAFTS_KEY}] load overdrafts`);

  export const filterOverdrafts = createAction(`[${OVERDRAFTS_KEY}] filter overdrafts`, props<{ term: string }>());

  export const resetOverdraftFilter = createAction(`[${OVERDRAFTS_KEY}] reset overdraft filter`);
}
