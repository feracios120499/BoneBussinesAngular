import { createReducer, on } from '@ngrx/store';
import { isAnyExist, pushIfNotExist, removeItem } from '@store/shared';
import { PayIncomingActions } from './actions';
import { incomingState } from './store';

export const payIncomingReducer = createReducer(
  incomingState,
  on(PayIncomingActions.setDateRange, (state, action) => ({ ...state, range: action.range })),
  on(PayIncomingActions.loadTransactionSuccess, (state, action) => ({ ...state, transactions: action.payload })),
  on(PayIncomingActions.selectTransaction, (state, action) => ({
    ...state,
    selectedIds: isAnyExist(state.selectedIds, action.transaction.id)
      ? removeItem(state.selectedIds, action.transaction.id)
      : pushIfNotExist(state.selectedIds, action.transaction.id),
  })),
  on(PayIncomingActions.loadTransactionsRequest, (state, action) => ({
    ...state,
    loadings: pushIfNotExist(state.loadings, 'list'),
    transactions: [],
    selectAll: false,
    selectedIds: [],
  })),
  on(PayIncomingActions.loadTransactionSuccess, PayIncomingActions.loadTransactionsFailure, (state, action) => ({
    ...state,
    loadings: removeItem(state.loadings, 'list'),
  })),
  on(PayIncomingActions.printTransactionsRequest, (state, action) => ({
    ...state,
    loadings: pushIfNotExist(state.loadings, 'print'),
  })),
  on(PayIncomingActions.printTransactionsFailure, PayIncomingActions.printTransactionsSuccess, (state, action) => ({
    ...state,
    loadings: removeItem(state.loadings, 'print'),
  })),
  on(PayIncomingActions.filter, (state, action) => ({
    ...state,
    filter: action.filter,
    selectAll: false,
    selectedIds: [],
  })),
  on(PayIncomingActions.selectAll, (state, action) => ({
    ...state,
    selectAll: !state.selectAll,
    selectedIds: state.selectAll ? [] : action.transactions.map((p) => p.id),
  }))
);
