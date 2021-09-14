import { createReducer, on } from '@ngrx/store';
import { onNgrxForms, updateGroup, validate, wrapReducerWithFormStateUpdate } from 'ngrx-forms';
import { maxLength, required } from 'ngrx-forms/validation';
import { AcctEdit } from '@models/acct-edit.model';
import { AcctDetailsActions } from './actions';
import { initialEditFormState, initialAcctDetailsState } from './store';
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { Statement } from '@angular/compiler';

export const validateAndUpdateEditForm = updateGroup<AcctEdit>({
    name: validate(required, maxLength(70))
});

export const acctDetailsReducer = wrapReducerWithFormStateUpdate(
    createReducer(
        initialAcctDetailsState,
        onNgrxForms(),
        on(
            AcctDetailsActions.setCurrentAccount,
            (state, action) => ({ ...state, account: action.account })
        ),
        on(
            AcctDetailsActions.setEditFormInitState,
            (state) => ({ ...state, editForm: initialEditFormState })
        ),
        on(
            AcctDetailsActions.loadTurnoversRequest,
            (state) => ({ ...state, openTurnovers: [], loadTurnovers: [], turnovers: [] })
        ),
        on(
            AcctDetailsActions.loadTurnoversSuccess,
            (state, action) => ({ ...state, turnovers: action.payload })
        ),
        on(
            AcctDetailsActions.openTurnovers,
            (state, action) => ({ ...state, openTurnovers: [...state.openTurnovers, action.id] })
        ),
        on(
            AcctDetailsActions.closeTurnovers,
            (state, action) =>
                ({ ...state, openTurnovers: state.openTurnovers.filter(p => p !== action.id) })
        ),
        on(
            AcctDetailsActions.loadTransactionsRequest,
            (state, action) => ({ ...state, loadTurnovers: [...state.loadTurnovers, action.payload] })
        ),
        on(
            AcctDetailsActions.loadTransactionsFailure,
            AcctDetailsActions.loadTransactionsSuccess,
            AcctDetailsActions.loadTransactionsCancel,
            (state, action) => ({ ...state, loadTurnovers: state.loadTurnovers.filter(p => p !== action.payload.id) })
        ),
        on(
            AcctDetailsActions.loadTransactionsSuccess,
            (state, action) =>
            ({
                ...state,
                turnovers: state.turnovers?.map(turnover =>
                    turnover.Id === action.payload.id ?
                        { ...turnover, Transactions: action.payload.transactions } :
                        turnover
                )
            })
        )
    ),
    s => s.editForm,
    validateAndUpdateEditForm
);
