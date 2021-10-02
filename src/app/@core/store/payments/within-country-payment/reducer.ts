import { createReducer, on } from '@ngrx/store';
import { WithinCountryActions as payActions } from './actions';
import { initialState } from './store';

export const withinCountryReducer = createReducer(
    initialState,

    on(
        payActions.setProgress,
        (state, action) => ({ ...state, progress: action.progress })
    ),
    on(
        payActions.setPayment,
        (state, action) => ({ ...state, payment: action.payment })
    )
);
