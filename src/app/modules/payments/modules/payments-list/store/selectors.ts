import { UiPaymentsListItem } from '@modules/payments/models/payments-list-item.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { isAnyExist } from '@store/shared';
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

  export const range = createSelector(payListState, (state) => state.range);

  export const rangeString = createSelector(payListState, (state) => ({
    start: state.range.start.format('DD.MM.YYYY'),
    end: state.range.end.format('DD.MM.YYYY'),
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

  export const filteredPayments = createSelector(payments, (uiPayments) => uiPayments);

  export const rangeWithStatus = createSelector(payListState, (state) => ({
    range: state.range,
    status: state.currentTab,
  }));
}
