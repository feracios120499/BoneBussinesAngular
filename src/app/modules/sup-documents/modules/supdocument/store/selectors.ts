import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouteSelectors } from '@store/route/selectors';
import { SupDocumentsSelectors } from '@store/sup-documents/selectors';
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

  export const openPayments = createSelector(detailStore, (store) => store.openPayments);

  export const loadPayments = createSelector(detailStore, (store) => store.loadPayments);

  // export const turnovers = createSelector(detailStore, openTurnovers, loadTurnovers, (store, openArray, loadArray) =>
  //   store.turnovers?.map(
  //     (value) =>
  //       ({ ...value, isOpen: openArray.includes(value.id), isLoading: loadArray.includes(value.id) } as UiTurnovers)
  //   )
  // );

  // export const turnover = (id: string) => createSelector(turnovers, (items) => items?.find((p) => p.id === id));
}
