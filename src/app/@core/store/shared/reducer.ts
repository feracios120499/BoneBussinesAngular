import { createReducer, on } from '@ngrx/store';

import { SharedActions } from './actions';
import { initialState } from './store';


export const sharedReducer = createReducer(
    initialState,
    on(
        SharedActions.showPayment,
        SharedActions.setPayment,
        (state, action) =>
            ({ ...state, currentPayment: { ...state.currentPayment, payment: action.payment } })
    ),
    on(
        SharedActions.setPaymentLoader,
        (state, action) => ({ ...state, currentPayment: { ...state.currentPayment, loader: action.loader } })
    ),
    on(
        SharedActions.setCreatePayment,
        (state, action) => ({ ...state, createPayment: { ...state.createPayment, payment: action.payment } })
    ),
    on(
        SharedActions.clearCreatePayment,
        (state) => ({ ...state, createPayment: undefined })
    )
);


