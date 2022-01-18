import { createReducer, on } from '@ngrx/store';
import { pushIfNotExist, removeItem } from '@store/shared';

import { PayActions } from './actions';
import { payInitialState } from './store';

export const payReducer = createReducer(
    payInitialState,
    on(
        PayActions.loadPaymentRequest,
        (state) => ({ ...state, loadings: [...pushIfNotExist(state.loadings, 'payment')] })
    ),
    on(
        PayActions.loadPaymentFailure,
        PayActions.loadPaymentSuccess,
        (state) => ({ ...state, loadings: [...removeItem(state.loadings, 'payment')] })
    ),
    on(
        PayActions.onSignPayment,
        (state) => ({ ...state, loadings: [...pushIfNotExist(state.loadings, 'onSign')] })
    ),
    on(
        PayActions.onSignPaymentFailure,
        PayActions.onSignPaymentSuccess,
        (state) => ({ ...state, loadings: [...removeItem(state.loadings, 'onSign')] })
    ),
    on(
        PayActions.signPayment,
        (state) => ({ ...state, loadings: [...pushIfNotExist(state.loadings, 'sign')] })
    ),
    on(
        PayActions.signPaymentFailure,
        PayActions.signPaymentSuccess,
        (state) => ({ ...state, loadings: [...removeItem(state.loadings, 'sign')] })
    ),
    on(
        PayActions.toBankPayment,
        (state) => ({ ...state, loadings: [...pushIfNotExist(state.loadings, 'toBank')] })
    ),
    on(
        PayActions.toBankPaymentFailure,
        PayActions.toBankPaymentSuccess,
        (state) => ({ ...state, loadings: [...removeItem(state.loadings, 'toBank')] })
    ),
);
