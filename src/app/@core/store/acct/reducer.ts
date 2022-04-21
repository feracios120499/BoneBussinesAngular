import { createReducer, on } from '@ngrx/store';
import { onNgrxForms } from 'ngrx-forms';

import { AcctActions } from './actions';
import { AcctDetailsActions } from './details/actions';
import { AcctLoadings } from './models/acct-loadings.enum';
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
    loadings: [...state.loadings, AcctLoadings.list],
  })),
  on(AcctActions.setAccounts, (state) => ({
    ...state,
    loadings: state.loadings.filter((p) => p !== AcctLoadings.list),
  })),
  on(AcctDetailsActions.loadAccount, (state) => ({
    ...state,
    loadings: [...state.loadings, AcctLoadings.details],
  })),
  on(
    AcctDetailsActions.loadAccountSuccess,
    AcctDetailsActions.loadAccountFailure,
    (state) => ({
      ...state,
      loadings: state.loadings.filter((p) => p !== AcctLoadings.details),
    })
  ),
  on(AcctDetailsActions.loadTurnoversRequest, (state) => ({
    ...state,
    loadings: [...state.loadings, AcctLoadings.turnovers],
  })),
  on(
    AcctDetailsActions.loadTurnoversSuccess,
    AcctDetailsActions.loadTurnoversFailure,
    (state) => ({
      ...state,
      loadings: state.loadings.filter((p) => p !== AcctLoadings.turnovers),
    })
  ),
  on(AcctDetailsActions.loadTransactionsRequest, (state) => ({
    ...state,
    loadings: [...state.loadings, AcctLoadings.transactions],
  })),
  on(
    AcctDetailsActions.loadTransactionsSuccess,
    AcctDetailsActions.loadTransactionsFailure,
    AcctDetailsActions.loadTransactionsCancel,
    (state) => ({
      ...state,
      loadings: state.loadings.filter(
        (value, index) =>
          index !== state.loadings.indexOf(AcctLoadings.transactions)
      ),
    })
  ),
  on(AcctDetailsActions.loadTransactionDetailRequest, (state) => ({
    ...state,
    loadings: [...state.loadings, AcctLoadings.transaction],
  })),
  on(
    AcctDetailsActions.loadTransactionDetailSuccess,
    AcctDetailsActions.loadTransactionDetailFailure,
    (state) => ({
      ...state,
      loadings: state.loadings.filter((p) => p !== AcctLoadings.transaction),
    })
  ),
  on(
    AcctActions.downloadStatementRequest,
    AcctActions.sendStatementRequest,
    (state) => ({
      ...state,
      loadings: [...state.loadings, AcctLoadings.statement],
    })
  ),
  on(
    AcctActions.downloadStatementSuccess,
    AcctActions.sendStatementSuccess,
    AcctActions.downloadStatementFailure,
    AcctActions.sendStatementFailure,
    (state) => ({
      ...state,
      loadings: state.loadings.filter((p) => p !== AcctLoadings.statement),
    })
  )
);
