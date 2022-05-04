import { createReducer, on } from '@ngrx/store';
import { isAnyExist, pushIfNotExist, removeItem } from '@store/shared';
import { PayIncomingActions } from './actions';
import { incomingState } from './store';

export const payIncomingReducer = createReducer(
  incomingState,
  on(PayIncomingActions.loadTransactionSuccess, (state, action) => ({ ...state, transactions: action.payload })),
  on(PayIncomingActions.selectTransaction, (state, action) => ({
    ...state,
    selectedIds: isAnyExist(state.selectedIds, action.transaction.id)
      ? removeItem(state.selectedIds, action.transaction.id)
      : pushIfNotExist(state.selectedIds, action.transaction.id),
  }))
);
