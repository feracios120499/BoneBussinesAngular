import { createReducer, on } from '@ngrx/store';
import { PayFormsActions as payActions } from './actions';
import { initialState } from './store';

export const payFormsReducer = createReducer(
    initialState,

    on(
        payActions.setProgress,
        (state, action) => ({ ...state, progress: action.progress })
    ),
    on(
        payActions.setPayment,
        (state, action) => ({ ...state, payment: action.payment })
    ),
    on(
        payActions.setCreatedPayment,
        (state, action) => ({ ...state, createdPayment: action.payment })
    ),
    on(
        payActions.createWithinCountryRequest,
        payActions.createMyAccountsRequest,
        (state) => ({ ...state, isLoading: true })
    ),
    on(
        payActions.createWithinCountryFailure,
        payActions.createWithinCountrySuccess,
        payActions.createMyAccountsFailure,
        payActions.createMyAccountsSuccess,
        (state) => ({ ...state, isLoading: false })
    ),
    on(
        payActions.init,
        payActions.destroy,
        (state) => ({ ...initialState })
    )
);
