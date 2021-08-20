
import { createReducer, on } from '@ngrx/store';
import {
    onNgrxForms,
    updateGroup,
    validate,
    wrapReducerWithFormStateUpdate
} from 'ngrx-forms';
import { required, maxLength } from 'ngrx-forms/validation';
import { AcctEdit, initialEditFormState, initialState } from '@stores/acct.store';
import { AcctActions } from '@actions/acct.actions';



export const validateAndUpdateEditForm = updateGroup<AcctEdit>({
    name: validate(required, maxLength(70))
});


export const acctReducers = wrapReducerWithFormStateUpdate(
    createReducer(
        initialState,
        onNgrxForms(),

        on(
            AcctActions.setAccounts,
            (state, action) => ({ ...state, accounts: action.accounts })
        ),
        on(
            AcctActions.setTab,
            (state, action) => ({ ...state, currentTab: action.tab })
        ),
        on(
            AcctActions.loadAccounts,
            (state) => ({ ...state, loadings: [...state.loadings, 'list'] })
        ),
        on(
            AcctActions.setAccounts,
            (state) => ({ ...state, loadings: state.loadings.filter(p => p !== 'list') })
        ),
        on(
            AcctActions.goToDetail,
            AcctActions.setCurrentAccount,
            (state, action) => ({ ...state, currentAccount: action.account })
        ),
        on(
            AcctActions.loadAccount,
            (state) => ({ ...state, loadings: [...state.loadings, 'account'] })
        ),
        on(
            AcctActions.loadAccountSuccess,
            AcctActions.loadAccountFailure,
            (state) => ({ ...state, loadings: state.loadings.filter(p => p !== 'account') })
        ),
        on(
            AcctActions.setEditFormInitState,
            (state) => ({ ...state, editForm: initialEditFormState })
        ),
        on(
            AcctActions.loadTurnoversSuccess,
            (state, action) => ({ ...state, turnovers: action.payload })
        )

    ),
    s => s.editForm,
    validateAndUpdateEditForm
);
