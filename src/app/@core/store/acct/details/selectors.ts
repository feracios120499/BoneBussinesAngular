import { UiTurnovers } from '@models/turnovers.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouteSelectors } from '@store/route/selectors';
import dayjs from 'dayjs';
import { AcctLoadings } from '../models/acct-loadings.enum';
import { AcctSelectors } from '../selectors';
import { AcctState, ACCT_KEY } from '../store';
import { AcctDetailsState, ACCT_DETAILS_KEY } from './store';


export namespace AcctDetailsSelectors {

    export const detailStore = createFeatureSelector<AcctDetailsState>(ACCT_DETAILS_KEY);

    // export const detailStore = createSelector(
    //     acctStore,
    //     (store) => store.details
    // );

    export const editForm = createSelector(
        detailStore,
        state => state?.editForm
    );

    export const currentAccountRouteParams = createSelector(
        RouteSelectors.selectRouteNestedParams,
        ({ bankId, accountId }) => ({ bankId: (bankId as string) || '', accountId: parseInt(accountId || '', 10) })
    );

    export const currentAccount = createSelector(
        AcctSelectors.acctStore,
        detailStore,
        currentAccountRouteParams,
        (acctState, detailState, routeParams) => detailState?.account || acctState.accounts?.find(p => p.id === routeParams.accountId)
    );



    export const filterTransactions = createSelector(
        detailStore,
        state => state?.transactionsFilterForm
    );

    export const transactionsRange = createSelector(
        filterTransactions,
        state => ({ start: dayjs(state?.value.range.value.start), end: dayjs(state?.value.range.value.end) })
    );

    export const transactionsRangeString = createSelector(
        transactionsRange,
        range => ({ start: range.start.format('DD.MM.YYYY'), end: range.end.format('DD.MM.YYYY') })
    );

    export const isLoadingCurrentAccount = createSelector(
        AcctSelectors.acctStore,
        state => state.loadings.indexOf(AcctLoadings.details) >= 0
    );

    export const isLoadingTurnovers = createSelector(
        AcctSelectors.acctStore,
        state => state.loadings.indexOf(AcctLoadings.turnovers) >= 0
    );

    export const isLoadingTransactions = createSelector(
        AcctSelectors.acctStore,
        state => state.loadings.indexOf(AcctLoadings.transactions) >= 0
    );

    export const isLoadingStatement = createSelector(
        AcctSelectors.acctStore,
        state => state.loadings.indexOf(AcctLoadings.statement) >= 0
    );

    export const isLoadingDetailsPage = createSelector(
        isLoadingTurnovers,
        isLoadingCurrentAccount,
        isLoadingTransactions,
        isLoadingStatement,
        // tslint:disable-next-line: no-shadowed-variable
        (isLoadingTurnovers, isLoadingCurrentAccount, isLoadingTransactions, isLoadingStatement) =>
            isLoadingTurnovers || isLoadingCurrentAccount || isLoadingTransactions || isLoadingStatement
    );

    export const isLoadingTransaction = createSelector(
        AcctSelectors.acctStore,
        state => state.loadings.indexOf(AcctLoadings.transaction) >= 0
    );

    export const currencyCode = createSelector(
        currentAccount,
        (account) => account?.currencyCode
    );

    export const openTurnovers = createSelector(
        detailStore,
        (store) => store.openTurnovers
    );

    export const loadTurnovers = createSelector(
        detailStore,
        (store) => store.loadTurnovers
    );

    export const turnovers = createSelector(
        detailStore,
        openTurnovers,
        loadTurnovers,
        (store, openArray, loadArray) =>
            store.turnovers?.map(value =>
                ({ ...value, isOpen: openArray.includes(value.id), isLoading: loadArray.includes(value.id) } as UiTurnovers)
            )
    );

    export const turnover = (id: string) => createSelector(
        turnovers,
        (items) => items?.find(p => p.id === id)
    );
}
