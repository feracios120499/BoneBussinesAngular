import { createReducer, on } from '@ngrx/store';

import { CorrespondentsActions } from './actions';
import { initialState } from './store';
import { pushIfNotExist, removeItem } from '@store/shared';

export const correspondentsReducer = createReducer(
  initialState,
  on(CorrespondentsActions.loadCorrespondentsRequest, (state) => ({
    ...state,
    loadings: [...pushIfNotExist(state.loadings, 'list')],
  })),
  on(CorrespondentsActions.loadCorrespondentsSuccess, CorrespondentsActions.loadCorrespondentsFailure, (state) => ({
    ...state,
    loadings: [...removeItem(state.loadings, 'list')],
  })),
  on(CorrespondentsActions.loadCorrespondentsSuccess, (state, action) => ({
    ...state,
    correspondents: action.payload,
  })),
  on(CorrespondentsActions.filterCorrespondents, (state, action) => ({
    ...state,
    filterTerm: action.term,
  })),
  on(CorrespondentsActions.resetCorrespondentFilter, (state) => ({
    ...state,
    filterTerm: '',
  })),
  on(CorrespondentsActions.createCorrespondentRequest, CorrespondentsActions.updateCorrespondentRequest, (state) => ({
    ...state,
    loadings: [...pushIfNotExist(state.loadings, 'create')],
  })),
  on(
    CorrespondentsActions.createCorrespondentSuccess,
    CorrespondentsActions.createCorrespondentFailure,
    CorrespondentsActions.updateCorrespondentSuccess,
    CorrespondentsActions.updateCorrespondentFailure,
    (state) => ({
      ...state,
      loadings: [...removeItem(state.loadings, 'create')],
    })
  )
);
