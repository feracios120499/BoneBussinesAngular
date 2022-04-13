import { createReducer, on } from '@ngrx/store';
import { pushIfNotExist, removeItem } from '@store/shared';
import { CardDetailsActions } from './actions';
import { initialState } from './store';

export const cardDetailsReducer = createReducer(
  initialState,
  on(CardDetailsActions.setTab, (state, action) => ({
    ...state,
    currentTab: action.tab,
  })),
  on(CardDetailsActions.loadCardRequest, (state, _) => ({
    ...state,
    loadings: [...pushIfNotExist(state.loadings, 'info')],
  })),
  on(
    CardDetailsActions.loadCardFailure,
    CardDetailsActions.loadCardSuccess,
    (state, _) => ({
      ...state,
      loadings: [...removeItem(state.loadings, 'info')],
    })
  ),
  on(CardDetailsActions.loadLimitsRequest, (state, _) => ({
    ...state,
    loadings: [...pushIfNotExist(state.loadings, 'limits')],
  })),
  on(
    CardDetailsActions.loadLimitsSuccess,
    CardDetailsActions.loadLimitsFailure,
    (state, _) => ({
      ...state,
      loadings: [...removeItem(state.loadings, 'limits')],
    })
  ),
  on(CardDetailsActions.loadSmsStatusRequest, (state, _) => ({
    ...state,
    loadings: [...pushIfNotExist(state.loadings, 'sms')],
  })),
  on(
    CardDetailsActions.loadSmsStatusSuccess,
    CardDetailsActions.loadSmsStatusFailure,
    (state, _) => ({
      ...state,
      loadings: [...removeItem(state.loadings, 'sms')],
    })
  ),
  on(CardDetailsActions.loadCardSuccess, (state, action) => ({
    ...state,
    card: action.payload,
  })),
  on(CardDetailsActions.loadLimitsSuccess, (state, action) => ({
    ...state,
    limits: action.payload,
  })),
  on(CardDetailsActions.loadSmsStatusSuccess, (state, action) => ({
    ...state,
    smsStatus: action.payload,
  })),
  on(
    CardDetailsActions.updateLimitRequest,
    CardDetailsActions.setDefaultLimitRequest,
    (state, action) => ({
      ...state,
      loadings: [...pushIfNotExist(state.loadings, 'updateLimit')],
    })
  ),
  on(
    CardDetailsActions.updateLimitFailure,
    CardDetailsActions.updateLimitSuccess,
    CardDetailsActions.setDefaultLimitFailure,
    CardDetailsActions.setDefaultLimitSuccess,
    (state, action) => ({
      ...state,
      loadings: [...removeItem(state.loadings, 'updateLimit')],
    })
  )
);
