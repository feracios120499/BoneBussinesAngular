
import * as acctActions from '@actions/acct.actions';
import { createReducer, on } from '@ngrx/store';
import {
    onNgrxForms,
    updateGroup,
    validate,
    wrapReducerWithFormStateUpdate
} from 'ngrx-forms';
import { required, maxLength } from 'ngrx-forms/validation';
import { AcctEdit, initialEditFormState, initialState } from '@stores/acct.store';



export const validateAndUpdateEditForm = updateGroup<AcctEdit>({
    name: validate(required, maxLength(70))
});


export const acctReducers = wrapReducerWithFormStateUpdate(
    createReducer(
        initialState,
        onNgrxForms(),

        on(
            acctActions.setAccounts,
            (state, action) => ({ ...state, accounts: action.accounts })
        ),
        on(
            acctActions.setTab,
            (state, action) => ({ ...state, currentTab: action.tab })
        ),
        on(
            acctActions.loadAccounts,
            (state) => ({ ...state, loadings: [...state.loadings, 'list'] })
        ),
        on(
            acctActions.setAccounts,
            (state) => ({ ...state, loadings: state.loadings.filter(p => p !== 'list') })
        ),
        on(
            acctActions.goToDetail,
            acctActions.setCurrentAccount,
            (state, action) => ({ ...state, currentAccount: action.account })
        ),
        on(
            acctActions.loadCurrentAccount,
            (state) => ({ ...state, loadings: [...state.loadings, 'account'] })
        ),
        on(
            acctActions.loadCurrentAccountSuccess,
            acctActions.loadCurrentAccountFailure,
            (state) => ({ ...state, loadings: state.loadings.filter(p => p !== 'account') })
        ),
        on(
            acctActions.setEditFormInitState,
            (state) => ({ ...state, editForm: initialEditFormState })
        ),
        on(
            acctActions.loadTurnoversSuccess,
            (state, action) => ({ ...state, turnovers: action.payload })
        )

    ),
    s => s.editForm,
    validateAndUpdateEditForm
);
