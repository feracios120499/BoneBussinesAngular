import { createReducer, on } from '@ngrx/store';
import { PayImportCommonActions } from './actions';
import { payImportCommonInitialState } from './store';

export const payImportCommonReducer = createReducer(
  payImportCommonInitialState,
  on(PayImportCommonActions.setTab, (state, action) => ({ ...state, status: action.tab })),
  on(PayImportCommonActions.setResponse, (state, action) => ({ ...state, importResponse: action.response }))
);
