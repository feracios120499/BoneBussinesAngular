import { createReducer, on } from '@ngrx/store';

import { pushIfNotExist, removeItem } from '@store/shared';
import { PublicActions } from './actions';
import { initialState } from './store';

export const publicReducer = createReducer(
  initialState,
  on(PublicActions.loadBanksSuccess, (state, action) => ({ ...state, banks: action.payload })),
  on(PublicActions.loadBankSuccess, (state, action) => ({ ...state, banks: [...state.banks, action.payload] })),
  on(PublicActions.loadResourcesSuccess, (state, action) => ({ ...state, resources: action.payload })),
  on(PublicActions.loadPayTypesSuccess, (state, action) => ({ ...state, payTypes: action.payload })),
  on(PublicActions.loadMobileAppLinksSuccess, (state, action) => ({ ...state, mobileAppLinks: action.payload })),
  on(PublicActions.sendFeedbackRequest, (state) => ({
    ...state,
    loadings: [...pushIfNotExist(state.loadings, 'send')],
  })),
  on(PublicActions.sendFeedbackSuccess, PublicActions.sendFeedbackFailure, (state) => ({
    ...state,
    loadings: [...removeItem(state.loadings, 'send')],
  }))
);
