import { createReducer, on } from '@ngrx/store';

import { DepositsActions } from './actions';
import { initialState } from './store';
import { pushIfNotExist, removeItem } from '@store/shared';

export const depositsReducer = createReducer(
  initialState,
  on(DepositsActions.loadDepositsRequest, (state) => ({
    ...state,
    loadings: [...pushIfNotExist(state.loadings, 'list')],
  })),
  on(DepositsActions.loadDepositsSuccess, DepositsActions.loadDepositsFailure, (state) => ({
    ...state,
    loadings: [...removeItem(state.loadings, 'list')],
  })),
  on(DepositsActions.loadDepositsSuccess, (state, action) => ({
    ...state,
    deposits: action.payload,
  })),
  on(DepositsActions.filterDeposits, (state, action) => ({
    ...state,
    filterTerm: action.term,
  })),
  on(DepositsActions.resetDepositFilter, (state) => ({
    ...state,
    filterTerm: '',
  }))
);
