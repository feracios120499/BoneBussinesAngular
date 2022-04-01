import { createReducer, on } from '@ngrx/store';
import { CardDetailsActions } from './actions';
import { initialState } from './store';

export const cardDetailsReducer = createReducer(
  initialState,
  on(CardDetailsActions.setTab, (state, action) => ({
    ...state,
    currentTab: action.tab,
  }))
);
