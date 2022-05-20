import { ActionCreator, createReducer, Creator, on, ReducerTypes } from '@ngrx/store';
import { isAnyExist, pushIfNotExist, removeItem } from '@store/shared';
import { PayListActions } from './actions';
import { PayListState, payListState } from './store';

const reducer: ReducerTypes<PayListState, ActionCreator<string, Creator<any[], object>>[]>[] = [
  on(PayListActions.setTab, (state, action) => ({
    ...state,
    currentTab: action.tab,
    payments: [],
    selectedIds: [],
    selectAll: false,
  })),
  on(PayListActions.loadCountSuccess, (state, action) => ({ ...state, count: action.payload })),
  on(PayListActions.loadPaymentsSuccess, (state, action) => ({
    ...state,
    payments: action.payload,
    selectedIds: [],
    selectAll: false,
  })),
  on(PayListActions.filter, (state, action) => ({
    ...state,
    filter: action.filter,
    selectedIds: [],
    selectAll: false,
  })),
  on(PayListActions.setRange, (state, action) => ({
    ...state,
    range: action.range,
    payments: [],
    selectedIds: [],
    selectAll: false,
  })),
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

  on(PayListActions.printPaymentsRequest, (state) => ({
    ...state,
    loadings: pushIfNotExist(state.loadings, 'print'),
  })),
  on(PayListActions.printPaymentsSuccess, PayListActions.printPaymentsFailure, (state) => ({
    ...state,
    loadings: removeItem(state.loadings, 'print'),
  })),

  on(PayListActions.deletePaymentsRequest, (state) => ({
    ...state,
    loadings: pushIfNotExist(state.loadings, 'delete'),
  })),
  on(PayListActions.deletePaymentsSuccess, PayListActions.deletePaymentsFailure, (state) => ({
    ...state,
    loadings: removeItem(state.loadings, 'delete'),
  })),

  on(PayListActions.sendOnSignPaymentsRequest, (state) => ({
    ...state,
    loadings: pushIfNotExist(state.loadings, 'onSign'),
  })),
  on(PayListActions.sendOnSignPaymentsSuccess, PayListActions.sendOnSignPaymentsFailure, (state) => ({
    ...state,
    loadings: removeItem(state.loadings, 'onSign'),
  })),

  on(PayListActions.signPaymentsRequest, (state) => ({
    ...state,
    loadings: pushIfNotExist(state.loadings, 'sign'),
  })),
  on(PayListActions.signPaymentsFailure, PayListActions.signPaymentsSuccess, (state) => ({
    ...state,
    loadings: removeItem(state.loadings, 'sign'),
  })),

  on(PayListActions.sendToBankPaymentsRequest, (state) => ({
    ...state,
    loadings: pushIfNotExist(state.loadings, 'toBank'),
  })),
  on(PayListActions.sendToBankPaymentsSuccess, PayListActions.sendToBankPaymentsFailure, (state) => ({
    ...state,
    loadings: removeItem(state.loadings, 'toBank'),
  })),
];

export const payListReducer = createReducer(payListState, ...reducer, ...loadings);
