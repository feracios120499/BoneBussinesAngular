import { DatePipe } from '@angular/common';
import { CurrencySum, ItemSum } from '@models/item-sum.model';
import { StatusCount } from '@models/status-count.model';
import { ImportResponsRow } from '@modules/payments/models/import-response.model';
import { PaymentDetails } from '@modules/payments/models/payment-details.model';
import { SwiftDetails } from '@modules/payments/models/swift-details.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FilterService } from '@services/filter.service';
import { PaySelectors } from '@store/payments/selectors';
import { ImportResponseFilterPipe } from '../pipes/import-response-filter.pipe';
import { PayImportCommonState, PAY_IMPORT_COMMON_KEY } from './store';

export namespace PayImportCommonSelectors {
  export const payImportCommonState = createFeatureSelector<PayImportCommonState>(PAY_IMPORT_COMMON_KEY);

  export const isLoading = createSelector(payImportCommonState, (state) => state.isLoading);

  export const currentTab = createSelector(payImportCommonState, (state) => state.status);

  export const count = createSelector(payImportCommonState, (state) => {
    const statusCount: StatusCount = {};

    if (state.importResponse) {
      statusCount.ERROR = state.importResponse.responses.filter((p) => p.status === 'ERROR').length;
      statusCount.OK = state.importResponse.responses.filter((p) => p.status === 'OK').length;
      statusCount.EXISTS = state.importResponse.responses.filter((p) => p.status === 'EXISTS').length;
    } else {
      statusCount.ERROR = 0;
      statusCount.OK = 0;
      statusCount.EXISTS = 0;
    }
    return statusCount;
  });

  export const payments = createSelector(payImportCommonState, (state) => {
    if (state.importResponse) {
      const filter = new ImportResponseFilterPipe(new FilterService(new DatePipe(window.navigator.language)));

      return filter.transform(
        state.importResponse.responses.filter((p) => p.status === state.status),
        state.filter
      );
    }
    return [];
  });

  export const allPayments = createSelector(payImportCommonState, (state) => state?.importResponse?.responses);

  export const canSave = createSelector(count, (statusCount) => statusCount.OK + statusCount.EXISTS > 0);

  export const filter = createSelector(payImportCommonState, (state) => state.filter);

  export const resultFile = createSelector(payImportCommonState, (state) => state?.importResponse?.responseExcel || '');

  export const paymentsSum = createSelector(payments, (payments) => {
    const itemSum: ItemSum = {
      count: payments.length,
      sum: getSum(payments),
    };
    return itemSum;
  });

  function getSum(payments: ImportResponsRow[]): CurrencySum {
    return payments.reduce((result: CurrencySum, value) => {
      const currencyCode =
        (value.model as any).sender?.accCurrencyCode || (value.model as any).senderAccount?.accCurrencyCode;
      if (!result[currencyCode]) {
        result[currencyCode] = 0;
      }
      result[currencyCode] += value.model.amount;
      return result;
    }, {});
  }
}
