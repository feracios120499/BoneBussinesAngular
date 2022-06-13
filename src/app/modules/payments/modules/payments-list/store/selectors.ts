import { DatePipe } from '@angular/common';
import { CurrencySum, ItemSum } from '@models/item-sum.model';
import { UiPaymentsListItem } from '@modules/payments/models/payments-list-item.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PaymentsListFilter } from '@pipes/payments-list-filter/payments-list-filter.pipe';
import { FilterService } from '@services/filter.service';
import { isAnyExist } from '@store/shared';
import dayjs from 'dayjs';
import { PayListState, PAY_LIST_KEY } from './store';

export namespace PayListSelectors {
  export const payListState = createFeatureSelector<PayListState>(PAY_LIST_KEY);

  export const currentTab = createSelector(payListState, (state) => state.currentTab);

  export const count = createSelector(payListState, (state) => state.count);

  export const isLoading = createSelector(payListState, (state) => state.loadings.length != 0);

  export const isLoadingList = createSelector(
    payListState,
    (state) => isAnyExist(state.loadings, 'list') && state.payments.length === 0
  );

  export const range = createSelector(payListState, (state) => ({
    end: dayjs(state.range.end),
    start: dayjs(state.range.start),
  }));

  export const rangeString = createSelector(payListState, (state) => ({
    start: dayjs(state.range.start).format('DD.MM.YYYY'),
    end: dayjs(state.range.end).format('DD.MM.YYYY'),
  }));

  export const filter = createSelector(payListState, (state) => state.filter);

  export const selectedAll = createSelector(payListState, (state) => state.selectAll);

  export const payments = createSelector(payListState, (state) =>
    state.payments.map((payment) => {
      const uiPayment: UiPaymentsListItem = {
        ...payment,
        selected: isAnyExist(state.selectedIds, payment.id),
      };
      return uiPayment;
    })
  );

  export const filteredPayments = createSelector(payments, payListState, (uiPayments, state) => {
    const paymentsFilter = new PaymentsListFilter(new FilterService(new DatePipe(window.navigator.language)));

    return paymentsFilter.transform(uiPayments, state.filter);
  });

  export const rangeWithStatus = createSelector(payListState, (state) => ({
    range: {
      start: dayjs(state.range.start),
      end: dayjs(state.range.end),
    },
    status: state.currentTab,
  }));

  export const paymentsSum = createSelector(filteredPayments, (payments) => {
    const itemSum: ItemSum = {
      count: payments.length,
      sum: getSum(payments),
    };
    return itemSum;
  });

  export const selectedPaymentSum = createSelector(filteredPayments, (payments) => {
    payments = payments.filter((p) => p.selected);
    const itemSum: ItemSum = {
      count: payments.length,
      sum: getSum(payments),
    };
    return itemSum;
  });

  function getSum(payments: UiPaymentsListItem[]): CurrencySum {
    return payments.reduce((result: CurrencySum, value) => {
      if (!result[value.currencyCode]) {
        result[value.currencyCode] = 0;
      }
      result[value.currencyCode] += value.amount;
      return result;
    }, {});
  }
}
