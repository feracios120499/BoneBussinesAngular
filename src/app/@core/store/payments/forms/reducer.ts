import { createReducer, on } from '@ngrx/store';
import { PayFormsActions as payActions, PayFormsActions } from './actions';
import { initialState } from './store';

export const payFormsReducer = createReducer(
  initialState,

  on(payActions.setProgress, (state, action) => ({ ...state, progress: action.progress })),
  on(payActions.setPayment, (state, action) => ({ ...state, payment: action.payment })),
  on(payActions.setCreatedPayment, (state, action) => ({ ...state, createdPayment: action.payment })),
  on(payActions.createWithinCountryRequest, payActions.createMyAccountsRequest, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(
    payActions.createWithinCountryFailure,
    payActions.createWithinCountrySuccess,
    payActions.createMyAccountsFailure,
    payActions.createMyAccountsSuccess,
    (state) => ({ ...state, isLoading: false })
  ),
  on(payActions.init, payActions.destroy, (state) => ({ ...initialState })),
  on(PayFormsActions.loadAmountStringSuccess, (state, action) => ({ ...state, amountString: action.payload })),
  on(PayFormsActions.setSwiftBanks, (state, action) => ({ ...state, swiftBanks: action.banks }))
);
