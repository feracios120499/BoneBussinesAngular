import { ImportResponse } from '@modules/payments/models/import-response.model';
import { createReducer, on } from '@ngrx/store';
import { PayImportCommonActions } from './actions';
import { payImportCommonInitialState } from './store';

export const payImportCommonReducer = createReducer(
  payImportCommonInitialState,
  on(PayImportCommonActions.setTab, (state, action) => ({ ...state, status: action.tab })),
  on(PayImportCommonActions.setResponse, (state, action) => ({ ...state, importResponse: action.response })),
  on(PayImportCommonActions.saveEditPayment, PayImportCommonActions.toSuccess, (state, action) => {
    const newState = { ...state };

    const importResponse: ImportResponse = {
      responseExcel: state.importResponse!.responseExcel,
      responses: state.importResponse!.responses.filter((p) => p.model.id != action.payment.model.id),
    };

    importResponse.responses.push(action.payment);

    newState.importResponse = importResponse;
    return newState;
  }),
  on(PayImportCommonActions.filter, (state, action) => ({ ...state, filter: action.filter })),
  on(PayImportCommonActions.importPaymentsRequest, PayImportCommonActions.savePaymentsRequest, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(
    PayImportCommonActions.savePaymentsFailure,
    PayImportCommonActions.savePaymentsSuccess,
    PayImportCommonActions.importPaymentsSuccess,
    PayImportCommonActions.importPaymentsFailure,
    (state) => ({ ...state, isLoading: false })
  )
);
