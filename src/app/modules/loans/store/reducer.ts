import { createReducer, on } from '@ngrx/store';

import { LoansActions } from './actions';
import { initialState } from './store';
import { pushIfNotExist, removeItem } from '@store/shared';

export const loansReducer = createReducer(
  initialState,
  on(LoansActions.loadLoansRequest, (state) => ({
    ...state,
    loadings: [...pushIfNotExist(state.loadings, 'loan-list')],
  })),
  on(LoansActions.loadLoansSuccess, LoansActions.loadLoansFailure, (state) => ({
    ...state,
    loadings: [...removeItem(state.loadings, 'loan-list')],
  })),
  on(LoansActions.loadLoansSuccess, (state, action) => ({
    ...state,
    loans: action.payload,
  })),
  on(LoansActions.filterLoans, (state, action) => ({
    ...state,
    filterTerm: action.term,
  })),
  on(LoansActions.resetLoanFilter, (state) => ({
    ...state,
    filterTerm: '',
  })),
  on(LoansActions.setCurrentLoan, (state, { loan }) => ({ ...state, currentLoan: loan })),
  on(LoansActions.loadLoanSchedulesRequest, (state) => ({
    ...state,
    loadings: [...pushIfNotExist(state.loadings, 'loan-schedule-list')],
  })),
  on(LoansActions.loadLoanSchedulesSuccess, LoansActions.loadLoanSchedulesFailure, (state) => ({
    ...state,
    loadings: [...removeItem(state.loadings, 'loan-schedule-list')],
  })),
  on(LoansActions.loadLoanSchedulesSuccess, (state, action) => ({
    ...state,
    loanSchedules: action.payload,
  }))
);
