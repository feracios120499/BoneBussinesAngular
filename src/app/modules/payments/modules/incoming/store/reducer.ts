import { createReducer, on } from '@ngrx/store';
import { PayIncomingActions } from './actions';
import { incomingState } from './store';

export const payIncomingReducer = createReducer(
  incomingState,
  on(PayIncomingActions.loadTransactionSuccess, (state, action) => ({ ...state, transactions: action.payload }))
);
