import { DatePipe } from '@angular/common';
import { UiPaymentsListItem } from '@modules/payments/models/payments-list-item.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SupdocumentPaymentsFilterPipe } from '@pipes/supdocuments-filter/supdocument-payments-filter.pipe';
import { FilterService } from '@services/filter.service';
import { RouteSelectors } from '@store/route/selectors';
import { SupDocumentsSelectors } from '@store/sup-documents/selectors';
import { SupDocumentPayment } from '../types/supdocument-payments.model';
import { SupDocumentDetailsState, SUP_DETAILS_KEY } from './store';

export namespace SupDocumentDetailsSelectors {
  export const detailStore = createFeatureSelector<SupDocumentDetailsState>(SUP_DETAILS_KEY);

  // export const detailStore = createSelector(
  //     acctStore,
  //     (store) => store.details
  // );

  export const editForm = createSelector(detailStore, (state) => state?.editForm);

  export const currentSupdocumentRouteParams = createSelector(
    RouteSelectors.selectRouteNestedParams,
    ({ supdocumentId }) => {
      console.log(supdocumentId);
      return { supdocumentId: parseInt(supdocumentId || '', 10) };
    }
  );

  export const currentSupdocument = createSelector(
    SupDocumentsSelectors.supDocState,
    detailStore,
    currentSupdocumentRouteParams,
    (supDocState, detailState, routeParams) =>
      detailState?.supdocument || supDocState.documents?.find((p) => p.id === routeParams.supdocumentId)
  );

  export const isLoadingCurrentSupdocument = createSelector(
    SupDocumentsSelectors.supDocState,
    (state) => state.loadings.indexOf('details') >= 0
  );

  export const isLoadingPayments = createSelector(
    SupDocumentsSelectors.supDocState,
    (state) => state.loadings.indexOf('payments') >= 0
  );

  export const payments = createSelector(detailStore, (state) => state.payments as SupDocumentPayment[]);

  export const filterTerm = createSelector(detailStore, (state) => state.filterTerms);

  export const filteredPayments = createSelector(payments, detailStore, (payments, state) => {
    const paymentsFilter = new SupdocumentPaymentsFilterPipe(
      new FilterService(new DatePipe(window.navigator.language))
    );

    console.log(state.filterTerms);

    return paymentsFilter.transform(payments, state.filterTerms);
  });

  // export const isLoadingTransactions = createSelector(
  //   AcctSelectors.acctStore,
  //   (state) => state.loadings.indexOf('transactions') >= 0
  // );

  // export const isLoadingStatement = createSelector(
  //   AcctSelectors.acctStore,
  //   (state) => state.loadings.indexOf('statement') >= 0
  // );

  export const isLoadingDetailsPage = createSelector(
    isLoadingCurrentSupdocument,
    isLoadingPayments,
    // tslint:disable-next-line: no-shadowed-variable
    (isLoadingCurrentSupdocument, isLoadingPayments) => isLoadingCurrentSupdocument || isLoadingPayments
  );

  // export const isLoadingTransaction = createSelector(
  //   AcctSelectors.acctStore,
  //   (state) => state.loadings.indexOf('transaction') >= 0
  // );

  // export const openPayments = createSelector(detailStore, (store) => store.openPayments);

  // export const selectedPayments = createSelector(detailStore, (store) => store.loadPayments);

  // export const payments = createSelector(detailStore, (store, openArray, loadArray) =>
  //   store.payments?.map(
  //     (value) =>
  //       ({
  //         ...value,
  //         selected: openArray.includes(value.id),
  //         // isLoading: loadArray.includes(value.id),
  //       } as UiPaymentsListItem)
  //   )
  // );
  // export const selectPayment = createAction(
  //   `[${SUP_DOC_KEY}] select supdocument`,
  //   props<{ supdocument: SupDocument }>()
  // );

  // export const payment = (id: number) => createSelector(payments, (items) => items?.find((p) => p.id === id));
}
