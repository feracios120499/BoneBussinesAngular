import { createReducer, on } from '@ngrx/store';
import { isAnyExist, pushIfNotExist, removeItem } from '@store/shared';
import { CardReissueActions } from './actions';
import { initialState } from './store';

export const cardReissueReducer = createReducer(
  initialState,
  on(CardReissueActions.setTab, (state, action) => ({
    ...state,
    tab: action.tab,
  })),
  on(CardReissueActions.filter, (state, action) => ({
    ...state,
    filter: action.filter,
  })),
  on(CardReissueActions.loadCountSuccess, (state, action) => ({
    ...state,
    count: action.payload,
  })),
  on(CardReissueActions.loadApplicationsSuccess, (state, action) => ({
    ...state,
    applications: action.payload,
  })),
  on(CardReissueActions.loadApplicationsRequest, (state) => ({
    ...state,
    loadings: pushIfNotExist(state.loadings, 'list'),
    applications: [],
    selectAll: false,
    selectedApplications: [],
    filter: '',
  })),
  on(CardReissueActions.loadApplicationsFailure, CardReissueActions.loadApplicationsSuccess, (state) => ({
    ...state,
    loadings: removeItem(state.loadings, 'list'),
  })),
  on(CardReissueActions.loadCountRequest, (state) => ({
    ...state,
    loadings: pushIfNotExist(state.loadings, 'count'),
  })),
  on(CardReissueActions.loadCountFailure, CardReissueActions.loadCountSuccess, (state) => ({
    ...state,
    loadings: removeItem(state.loadings, 'count'),
  })),
  on(CardReissueActions.selectApplication, (state, action) => ({
    ...state,
    selectedApplications: isAnyExist(state.selectedApplications, action.id)
      ? removeItem(state.selectedApplications, action.id)
      : pushIfNotExist(state.selectedApplications, action.id),
  })),
  on(CardReissueActions.selectAll, (state) => ({
    ...state,
    selectAll: !state.selectAll,
    selectedApplications: state.selectAll ? [] : state.applications.map((p) => p.id),
  }))
);
