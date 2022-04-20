import { createReducer, on } from '@ngrx/store';
import { pushIfNotExist, removeItem } from '@store/shared';
import { CardReissueActions } from './actions';
import { initialState } from './store';

export const cardReissueReducer = createReducer(
  initialState,
  on(CardReissueActions.setTab, (state, action) => ({
    ...state,
    tab: action.tab,
    applications: [],
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
  })),
  on(
    CardReissueActions.loadApplicationsFailure,
    CardReissueActions.loadApplicationsSuccess,
    (state) => ({ ...state, loadings: removeItem(state.loadings, 'list') })
  ),
  on(CardReissueActions.loadCountRequest, (state) => ({
    ...state,
    loadings: pushIfNotExist(state.loadings, 'count'),
  })),
  on(
    CardReissueActions.loadCountFailure,
    CardReissueActions.loadCountSuccess,
    (state) => ({ ...state, loadings: removeItem(state.loadings, 'count') })
  )
);
