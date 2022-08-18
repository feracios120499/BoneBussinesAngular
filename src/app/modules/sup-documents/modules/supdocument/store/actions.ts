import { SupDocument } from '@models/sup-documents/sup-document.model';
import { SupDocumentEdit } from '@modules/sup-documents/types/supdocument-edit.model';
import { createAction, props } from '@ngrx/store';
import { createHTTPActions } from '@store/shared';

export namespace SupDocumentDetailsActions {
  export const loadCurrentSupdocument = createAction('[sup-doc][Details] load current supdocument');

  export const [loadSupdocumentRequest, loadSupdocumentSuccess, loadSupdocumentFailure] = createHTTPActions<
    { supdocumentId: number },
    SupDocument,
    string
  >('[sup-doc] load supdocument');

  export const setCurrentSupdocument = createAction(
    '[sup-doc] set current supdocument',
    props<{ supdocument: SupDocument }>()
  );

  export const setSupdocumentId = createAction('[sup-doc] set supdocument id', props<{ id: number }>());
  // setAccountName action
  export const setSupdocumentName = createAction('[sup-doc] set supdocument name', props<{ name: string }>());

  export const setSupdocumentDescription = createAction(
    '[sup-doc] set supdocument description',
    props<{ description: string }>()
  );

  // setEditFormInitState action
  export const setEditFormInitState = createAction('[sup-doc] set edit form init state');

  // sumbitEditForm action
  export const sumbitEditForm = createAction('[sup-doc] submit edit form');

  export const [updateSupdocumentRequest, updateSupdocumentSuccess, updateSupdocumentFailure] = createHTTPActions<
    SupDocumentEdit,
    SupDocument,
    string
  >('[sup-doc] update supdocument');

  export const loadPaymentsCurrentSupdocument = createAction('[sup-doc] load payments current supdocument');

  export const [loadPaymentsRequest, loadPaymentsSuccess, loadPaymentsFailure] = createHTTPActions<
    { supdocumentId: number },
    any,
    string
  >('[sup-doc] load payments');

  export const initDetails = createAction('[sup-doc][Details] init');

  export const destroyDetails = createAction('[sup-doc][Details] destroy');

  // export const [loadTransactionsRequest, loadTransactionsSuccess, loadTransactionsFailure] = createHTTPActions<
  //   string,
  //   { id: string; transactions: TurnoverTransaction[] },
  //   { id: string; error: string }
  // >('[ACCT][Details] load transactions');

  // export const loadTransactionsCancel = createAction(
  //   '[ACCT][Details] load transactions cancel',
  //   (payload: { id: string }) => ({ payload })
  // );

  export const openPayments = createAction('[sup-doc][Details] open payments', props<{ id: number }>());

  export const closePayments = createAction('[sup-doc][Details] close payments', props<{ id: string }>());

  // export const [loadTransactionDetailRequest, loadTransactionDetailSuccess, loadTransactionDetailFailure] =
  //   createHTTPActions<{ id: number; bankId: string }, Transaction, string>('[ACCT][Details] load transaction detail');

  // export const showTransactionPartial = createAction(
  //   '[ACCT][Details] show transaction partial',
  //   props<{ transaction: TurnoverTransaction }>()
  // );

  // export const showStatement = createAction('[ACCT][Details] show statement');

  // export const loadStatement = createAction(
  //   '[ACCT][Details] load statement',
  //   props<{ data: StatementModalResult; accountId: number; bankId: string }>()
  // );

  // export const showRequisitesModal = createAction('[ACCT][Details] show requisites modal');

  // export const showExportModal = createAction('[ACCT][Details] show export modal');

  // export const [printTransactionRequest, printTransactionSuccess, printTransactionFailure] = createHTTPActions<
  //   { transactionId: string; bankId: string },
  //   string,
  //   string
  // >('[ACCT][Details] print transaction');
}
