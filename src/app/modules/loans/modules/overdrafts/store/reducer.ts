import { createReducer, on } from '@ngrx/store';

import { OverdraftsActions } from './actions';
import { initialState } from './store';
import { pushIfNotExist, removeItem } from '@store/shared';

export const overdraftsReducer = createReducer(
  initialState,
  on(OverdraftsActions.loadOverdraftsRequest, (state) => ({
    ...state,
    loadings: [...pushIfNotExist(state.loadings, 'list')],
  })),
  on(OverdraftsActions.loadOverdraftsSuccess, OverdraftsActions.loadOverdraftsFailure, (state) => ({
    ...state,
    loadings: [...removeItem(state.loadings, 'list')],
  })),
  on(OverdraftsActions.loadOverdraftsSuccess, (state, action) => ({
    ...state,
    overdrafts: action.payload,
  })),
  on(OverdraftsActions.filterOverdrafts, (state, action) => ({
    ...state,
    filterTerm: action.term,
  })),
  on(OverdraftsActions.resetOverdraftFilter, (state) => ({
    ...state,
    filterTerm: '',
  }))
);
