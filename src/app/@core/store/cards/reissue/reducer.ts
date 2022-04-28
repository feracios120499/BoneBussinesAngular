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
  })),
  on(CardReissueActions.showApplicationHistoryRequest, (state) => ({
    ...state,
    loadings: pushIfNotExist(state.loadings, 'history'),
  })),
  on(CardReissueActions.showApplicationHistoryFailure, CardReissueActions.showApplicationHistorySuccess, (state) => ({
    ...state,
    loadings: removeItem(state.loadings, 'history'),
  })),
  on(CardReissueActions.showApplicationSignRequest, (state) => ({
    ...state,
    loadings: pushIfNotExist(state.loadings, 'signes'),
  })),
  on(CardReissueActions.showApplicationSignFailure, CardReissueActions.showApplicationSignSuccess, (state) => ({
    ...state,
    loadings: removeItem(state.loadings, 'signes'),
  })),
  on(CardReissueActions.removeApplicationsRequest, (state) => ({
    ...state,
    loadings: pushIfNotExist(state.loadings, 'delete'),
  })),
  on(CardReissueActions.removeApplicationsFailure, CardReissueActions.removeApplicationsSuccess, (state) => ({
    ...state,
    loadings: removeItem(state.loadings, 'delete'),
  })),
  on(CardReissueActions.sendToBankApplicationsRequest, (state) => ({
    ...state,
    loadings: pushIfNotExist(state.loadings, 'bankSend'),
  })),
  on(CardReissueActions.sendToBankApplicationsFailure, CardReissueActions.sendToBankApplicationsSuccess, (state) => ({
    ...state,
    loadings: removeItem(state.loadings, 'bankSend'),
  })),
  on(CardReissueActions.signApplicationsRequest, (state) => ({
    ...state,
    loadings: pushIfNotExist(state.loadings, 'sign'),
  })),
  on(CardReissueActions.signApplicationsFailure, CardReissueActions.signApplicationsSuccess, (state) => ({
    ...state,
    loadings: removeItem(state.loadings, 'sign'),
  }))
);
