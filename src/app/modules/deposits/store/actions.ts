import { createAction, props } from '@ngrx/store';

import { createHTTPActions } from '@store/shared';
import { Deposit } from '../models/deposit.model';
import { DEPOSITS_KEY } from './store';

export namespace DepositsActions {
  export const init = createAction(`[${DEPOSITS_KEY}] init`);

  export const destroy = createAction(`[${DEPOSITS_KEY}] destroy`);

  export const [loadDepositsRequest, loadDepositsSuccess, loadDepositsFailure] = createHTTPActions<
    void,
    Deposit[],
    string
  >(`[${DEPOSITS_KEY}] load deposits`);

  export const filterDeposits = createAction(`[${DEPOSITS_KEY}] filter deposits`, props<{ term: string }>());

  export const resetDepositFilter = createAction(`[${DEPOSITS_KEY}] reset deposit filter`);

  export const makeDepositPayment = createAction(
    `[${DEPOSITS_KEY}] make deposit payment`,
    props<{ deposit: Deposit }>()
  );
}
