import { ActionCreator, createReducer, Creator, on, ReducerTypes } from '@ngrx/store';
import { isAnyExist, pushIfNotExist, removeItem } from '@store/shared';
import { PayListActions } from './actions';
import { PayListState, payListState } from './store';

const reducer: ReducerTypes<PayListState, ActionCreator<string, Creator<any[], object>>[]>[] = [
  on(PayListActions.setTab, (state, action) => ({ ...state, currentTab: action.tab })),
  on(PayListActions.loadCountSuccess, (state, action) => ({ ...state, count: action.payload })),
  on(PayListActions.loadPaymentsSuccess, (state, action) => ({ ...state, payments: action.payload })),
  on(PayListActions.filter, (state, action) => ({ ...state, filter: action.filter })),
  on(PayListActions.setRange, (state, action) => ({ ...state, range: action.range, payments: [] })),
  on(PayListActions.selectPayment, (state, action) => ({
    ...state,
    selectedIds: isAnyExist(state.selectedIds, action.payment.id)
      ? removeItem(state.selectedIds, action.payment.id)
      : pushIfNotExist(state.selectedIds, action.payment.id),
  })),
  on(PayListActions.selectAll, (state, action) => ({
    ...state,
    selectAll: !state.selectAll,
    selectedIds: state.selectAll ? [] : action.payments.map((p) => p.id),
  })),
];

const loadings: ReducerTypes<PayListState, ActionCreator<string, Creator<any[], object>>[]>[] = [
  on(PayListActions.loadCountRequest, (state) => ({ ...state, loadings: pushIfNotExist(state.loadings, 'count') })),
  on(PayListActions.loadCountSuccess, PayListActions.loadCountFailure, (state) => ({
    ...state,
    loadings: removeItem(state.loadings, 'count'),
  })),

  on(PayListActions.loadPaymentsRequest, (state) => ({ ...state, loadings: pushIfNotExist(state.loadings, 'list') })),
  on(PayListActions.loadPaymentsFailure, PayListActions.loadPaymentsSuccess, (state) => ({
    ...state,
    loadings: removeItem(state.loadings, 'list'),
  })),
];

export const payListReducer = createReducer(payListState, ...reducer, ...loadings);
