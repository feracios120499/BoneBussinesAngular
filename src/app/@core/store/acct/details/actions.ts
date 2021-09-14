import { AccountModel } from '@models/account.model';
import { createAction, props } from '@ngrx/store';
import { createHTTPActions } from '@store/shared';
import { Dayjs } from 'dayjs';
import { AcctEdit } from '@models/acct-edit.model';
import { Turnovers } from '@models/turnovers.model';
import { TurnoverTransaction } from '@models/turnover-transaction.model';
import { ResponseError } from '@models/response-error.model';
import { Transaction } from '@models/transaction.model';
import { StatementModalResult } from '@models/statement-modal-result.model';
import { FileModel } from '@models/file.model';


export namespace AcctDetailsActions {

    export const loadCurrentAccount = createAction('[ACCT][Details] load current account');

    export const [
        loadAccount,
        loadAccountSuccess,
        loadAccountFailure
    ] = createHTTPActions<{ accountId: number, bankId: string }, AccountModel, string>('[ACCT] load account');

    export const setCurrentAccount = createAction(
        '[ACCT] set current account',
        props<{ account: AccountModel }>()
    );

    // setAccountName action
    export const setAccountName = createAction(
        '[ACCT] set account name',
        props<{ name: string }>()
    );

    // setEditFormInitState action
    export const setEditFormInitState = createAction('[ACCT] set edit form init state');

    // sumbitEditForm action
    export const sumbitEditForm = createAction(
        '[ACCT] submit edit form'
    );


    export const [
        updateAccountRequest,
        updateAccountSuccess,
        updateAccountFailure
    ] = createHTTPActions<AcctEdit, AccountModel, string>('[ACCT] update account');


    export const updateRangeTransactions = createAction(
        '[ACCT] update range',
        props<{ start: Dayjs, end: Dayjs }>()
    );

    export const loadTurnoversCurrentAccount = createAction('[ACCT] load turnovers current account');

    export const [
        loadTurnoversRequest,
        loadTurnoversSuccess,
        loadTurnoversFailure
    ] = createHTTPActions<{ accountId: number, bankId: string, start: Dayjs, end: Dayjs }, any, string>('[ACCT] load turnovers');

    export const initDetails = createAction('[ACCT][Details] init');

    export const destroyDetails = createAction('[ACCT][Details] destroy');

    export const [
        loadTransactionsRequest,
        loadTransactionsSuccess,
        loadTransactionsFailure
    ] = createHTTPActions<string, { id: string, transactions: TurnoverTransaction[] }, { id: string, error: string }>('[ACCT][Details] load transactions');

    export const loadTransactionsCancel = createAction(
        '[ACCT][Details] load transactions cancel',
        (payload: { id: string }) => ({ payload })
    );

    export const openTurnovers = createAction(
        '[ACCT][Details] open turnovers',
        props<{ id: string }>()
    );

    export const closeTurnovers = createAction(
        '[ACCT][Details] close turnovers',
        props<{ id: string }>()
    );

    export const [
        loadTransactionDetailRequest,
        loadTransactionDetailSuccess,
        loadTransactionDetailFailure
    ] = createHTTPActions<{ id: number, bankId: string }, Transaction, string>('[ACCT][Details] load transaction detail');

    export const showTransactionPartial = createAction(
        '[ACCT][Details] show transaction partial',
        props<{ transaction: TurnoverTransaction }>()
    );

    export const showStatement = createAction(
        '[ACCT][Details] show statement'
    );

    export const loadStatement = createAction(
        '[ACCT][Details] load statement',
        props<{ data: StatementModalResult }>()
    );

    export const [
        downloadStatementRequest,
        downloadStatementSuccess,
        downloadStatementFailure
    ] = createHTTPActions<StatementModalResult, FileModel, string>('[ACCT][Details] download statement');

    export const [
        sendStatementRequest,
        sendStatementSuccess,
        sendStatementFailure
    ] = createHTTPActions<StatementModalResult, any | undefined, string>('[ACCT][Details] send statement');


    export const showRequisitesModal = createAction('[ACCT][Details] show requisites modal');

    export const showExportModal = createAction('[ACCT][Details] show export modal');

    export const [
        printTransactionRequest,
        printTransactionSuccess,
        printTransactionFailure
    ] = createHTTPActions<{ transactionId: string, bankId: string }, string, string>('[ACCT][Details] print transaction');
}
