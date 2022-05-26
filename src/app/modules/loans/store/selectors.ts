import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouteSelectors } from '@store/route/selectors';
import { LoansState, LOANS_KEY } from './store';

export namespace LoansSelectors {
  export const pageTitle = createSelector(RouteSelectors.selectRouteData, ({ title }) => title);

  export const loansStore = createFeatureSelector<LoansState>(LOANS_KEY);

  export const loanList = createSelector(loansStore, (state) => state.loans);

  export const filterTerm = createSelector(loansStore, (state) => state.filterTerm);

  export const isLoading = createSelector(loansStore, (state) => !!state.loadings.length);

  export const isInitialLoadingLoans = createSelector(
    loansStore,
    (state) => !state.loans.length && state.loadings.includes('loan-list')
  );

  export const isLoadingLoans = createSelector(loansStore, (state) => state.loadings.includes('loan-list'));

  export const isLoadingLoanSchedules = createSelector(loansStore, (state) =>
    state.loadings.includes('loan-schedule-list')
  );

  export const loanScheduleRouteParams = createSelector(
    RouteSelectors.selectRouteNestedParams,
    ({ bankId, loanId }) => ({
      bankId: (bankId as string) || '',
      loanId: parseInt(loanId || '', 10),
    })
  );

  export const loanScheduleList = createSelector(loansStore, (state) => state.loanSchedules);

  export const currentLoan = createSelector(
    loansStore,
    loanList,
    loanScheduleRouteParams,
    (state, loanList, routeParams) => state?.currentLoan ?? loanList.find(({ id }) => id === routeParams.loanId)
  );
}
