import { StatusCount } from '@models/status-count.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PaySelectors } from '@store/payments/selectors';
import { PayImportCommonState, PAY_IMPORT_COMMON_KEY } from './store';

export namespace PayImportCommonSelectors {
  export const payImportCommonState = createFeatureSelector<PayImportCommonState>(PAY_IMPORT_COMMON_KEY);

  export const isLoading = createSelector(payImportCommonState, (state) => state.isLoading);

  export const currentTab = createSelector(payImportCommonState, (state) => state.status);

  export const count = createSelector(payImportCommonState, (state) => {
    const statusCount: StatusCount = {};

    if (state.importResponse) {
      statusCount.ERROR = state.importResponse.responses.filter((p) => p.status === 'ERROR').length;
      statusCount.SUCCESS = state.importResponse.responses.filter((p) => p.status === 'SUCCESS').length;
      statusCount.EXIST = state.importResponse.responses.filter((p) => p.status === 'EXIST').length;
    } else {
      statusCount.ERROR = 0;
      statusCount.SUCCESS = 0;
      statusCount.EXIST = 0;
    }
    return statusCount;
  });

  export const payments = createSelector(payImportCommonState, (state) => {
    if (state.importResponse) {
      return state.importResponse.responses.filter((p) => p.status === state.status);
    }
    return [];
  });
}
