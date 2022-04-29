import { createReducer, on } from '@ngrx/store';
import { pushIfNotExist, removeItem } from '@store/shared';
import { onNgrxForms } from 'ngrx-forms';
import { AcctLoadings } from '../models/acct-loadings.type';
import { AcctDetailsActions } from '../modules/account/store/actions';

import { AcctActions } from './actions';
import { initialState } from './store';

export const acctReducer = createReducer(
  initialState,
  onNgrxForms(),
  on(AcctActions.setAccounts, (state, action) => ({
    ...state,
    accounts: action.accounts,
  })),
  on(AcctActions.setTab, (state, action) => ({
    ...state,
    currentTab: action.tab,
  })),
  on(AcctActions.loadAccounts, (state) => ({
    ...state,
    loadings: pushIfNotExist(state.loadings, 'list'),
  })),
  on(AcctActions.setAccounts, (state) => ({
    ...state,
    loadings: removeItem(state.loadings, 'list'),
  })),
  on(AcctDetailsActions.loadAccount, (state) => ({
    ...state,
    loadings: pushIfNotExist(state.loadings, 'details'),
  })),
  on(AcctDetailsActions.loadAccountSuccess, AcctDetailsActions.loadAccountFailure, (state) => ({
    ...state,
    loadings: removeItem(state.loadings, 'details'),
  })),
  on(AcctDetailsActions.loadTurnoversRequest, (state) => ({
    ...state,
    loadings: pushIfNotExist(state.loadings, 'turnovers'),
  })),
  on(AcctDetailsActions.loadTurnoversSuccess, AcctDetailsActions.loadTurnoversFailure, (state) => ({
    ...state,
    loadings: removeItem(state.loadings, 'turnovers'),
  })),
  on(AcctDetailsActions.loadTransactionsRequest, (state) => ({
    ...state,
    loadings: pushIfNotExist(state.loadings, 'transactions'),
  })),
  on(
    AcctDetailsActions.loadTransactionsSuccess,
    AcctDetailsActions.loadTransactionsFailure,
    AcctDetailsActions.loadTransactionsCancel,
    (state) => ({
      ...state,
      loadings: state.loadings.filter((value, index) => index !== state.loadings.indexOf('transactions')),
    })
  ),
  on(AcctDetailsActions.loadTransactionDetailRequest, (state) => ({
    ...state,
    loadings: pushIfNotExist(state.loadings, 'transaction'),
  })),
  on(AcctDetailsActions.loadTransactionDetailSuccess, AcctDetailsActions.loadTransactionDetailFailure, (state) => ({
    ...state,
    loadings: removeItem(state.loadings, 'transaction'),
  })),
  on(AcctActions.downloadStatementRequest, AcctActions.sendStatementRequest, (state) => ({
    ...state,
    loadings: pushIfNotExist(state.loadings, 'statement'),
  })),
  on(
    AcctActions.downloadStatementSuccess,
    AcctActions.sendStatementSuccess,
    AcctActions.downloadStatementFailure,
    AcctActions.sendStatementFailure,
    (state) => ({
      ...state,
      loadings: removeItem(state.loadings, 'statement'),
    })
  ),
  on(AcctActions.downloadExportTurnoversRequest, AcctActions.sendExportTurnoversRequest, (state) => ({
    ...state,
    loadings: pushIfNotExist(state.loadings, 'export'),
  })),
  on(
    AcctActions.downloadExportTurnoversSuccess,
    AcctActions.downloadExportTurnoversFailure,
    AcctActions.sendExportTurnoversSuccess,
    AcctActions.sendExportTurnoversFailure,
    (state) => ({
      ...state,
      loadings: removeItem(state.loadings, 'export'),
    })
  ),
  on(AcctActions.downloadRequisitesRequest, AcctActions.sendRequisitesRequest, (state) => ({
    ...state,
    loadings: pushIfNotExist(state.loadings, 'requisites'),
  })),
  on(
    AcctActions.downloadRequisitesSuccess,
    AcctActions.downloadRequisitesFailure,
    AcctActions.sendRequisitesSuccess,
    AcctActions.sendRequisitesFailure,
    (state) => ({
      ...state,
      loadings: removeItem(state.loadings, 'requisites'),
    })
  )
);
