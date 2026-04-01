import { createReducer, on } from '@ngrx/store';
import { onNgrxForms, updateGroup, validate, wrapReducerWithFormStateUpdate } from 'ngrx-forms';
import { maxLength, required } from 'ngrx-forms/validation';
import { initialEditFormState, initialAcctDetailsState } from './store';
import { SupDocumentDetailsActions } from './actions';
import { SupDocumentEdit } from '@modules/sup-documents/types/supdocument-edit.model';

export const validateAndUpdateEditForm = updateGroup<SupDocumentEdit>({
  fileName: validate(required, maxLength(70)),
});

export const SupDocumentDetailsReducer = wrapReducerWithFormStateUpdate(
  createReducer(
    initialAcctDetailsState,
    onNgrxForms(),
    on(SupDocumentDetailsActions.setCurrentSupdocument, (state, action) => ({
      ...state,
      supdocument: action.supdocument,
    })),
    on(SupDocumentDetailsActions.setEditFormInitState, (state) => ({ ...state, editForm: initialEditFormState })),
    on(SupDocumentDetailsActions.loadPaymentsRequest, (state) => ({
      ...state,
      openPayments: [],
      loadPayments: [],
      payments: [],
    })),
    on(SupDocumentDetailsActions.loadPaymentsSuccess, (state, action) => ({ ...state, payments: action.payload })),
    on(SupDocumentDetailsActions.openPayments, (state, action) => ({
      ...state,
      openPayments: [...state.openPayments, action.id],
    })),
    on(SupDocumentDetailsActions.closePayments, (state, action) => ({
      ...state,
      openPayments: state.openPayments.filter((p) => p !== parseInt(action.id)),
    })),
    on(SupDocumentDetailsActions.filterPayments, (state, action) => ({
      ...state,
      filterTerms: action.term,
    })),
    on(SupDocumentDetailsActions.resetPaymnetsFilter, (state) => ({
      ...state,
      filterTerm: '',
    }))

    // on(SupDocumentDetailsActions.loadTransactionsRequest, (state, action) => ({
    //   ...state,
    //   loadTurnovers: [...state.loadTurnovers, action.payload],
    // })),
    // on(
    //   SupDocumentDetailsActions.loadTransactionsFailure,
    //   SupDocumentDetailsActions.loadTransactionsSuccess,
    //   SupDocumentDetailsActions.loadTransactionsCancel,
    //   (state, action) => ({ ...state, loadTurnovers: state.loadTurnovers.filter((p) => p !== action.payload.id) })
    // ),
    // on(SupDocumentDetailsActions.loadTransactionsSuccess, (state, action) => ({
    //   ...state,
    //   turnovers: state.turnovers?.map((turnover) =>
    //     turnover.id === action.payload.id ? { ...turnover, transactions: action.payload.transactions } : turnover
    //   ),
    // }))
  ),
  (s) => s.editForm,
  validateAndUpdateEditForm
);
