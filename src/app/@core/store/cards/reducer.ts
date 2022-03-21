import { createReducer, on } from "@ngrx/store";
import { onNgrxForms } from "ngrx-forms";
import { CardsActions } from "./actions";
import { initialState } from "./store";

export const cardsReducer = createReducer(
    initialState,
    onNgrxForms(),
    on(
        CardsActions.setViewState,
        (state, action) => ({ ...state, viewState: action.state })
    ),
    on(
        CardsActions.loadCardAccountsSuccess,
        (state, action) => ({ ...state, cardAccounts: action.payload })
    ),
    on(
        CardsActions.loadCardAccountsRequest,
        (state, action) => ({ ...state, loadings: [...state.loadings, 'cardAccounts'] })
    ),
    on(
        CardsActions.loadCardAccountsSuccess,
        CardsActions.loadCardAccountFailure,
        (state, action) => ({ ...state, loadings: state.loadings.filter(p => p !== 'cardAccounts') })
    ),
    on(
        CardsActions.openCardAccount,
        (state, action) => ({ ...state, openAccounts: [...state.openAccounts, action.cardAccount.id] })
    ),
    on(
        CardsActions.closeCardAccount,
        (state, action) => ({ ...state, openAccounts: state.openAccounts.filter(p => p !== action.cardAccount.id) })
    )
)