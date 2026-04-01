import { FileModel } from '@models/file.model';
import { SupDocument, UiSupDocumentListItem } from '@models/sup-documents/sup-document.model';
import { SupdocumentForm, SupdocumentSendForm } from '@modules/sup-documents/types/supdocument-form.model';
import {
  SupdocumentModalConfig,
  SupdocumentSendModalConfig,
} from '@modules/sup-documents/types/supdocument-modal-config.model';
import { Recipient } from '@modules/sup-documents/types/supdocument-upload.model';
import { createAction, props } from '@ngrx/store';
import { createHTTPActions } from '@store/shared';
import { SUP_DOC_KEY } from './store';

export namespace SupDocumentsActions {
  export const [loadDocuments, loadDocumentsSuccess, loadDocumentsFailure] = createHTTPActions<
    void,
    SupDocument[],
    string
  >(`[${SUP_DOC_KEY}] load supdocuments`);

  export const loadIfNotStoredSupdocuments = createAction(`${[SUP_DOC_KEY]} load if not stored correspondents`);

  export const [loadRecipientsRequest, loadRecipientsSuccess, loadRecipientsFailure] = createHTTPActions<
    void,
    Recipient[],
    string
  >(`[${SUP_DOC_KEY}] load recipients`);

  export const filterSupdocuments = createAction(`[${SUP_DOC_KEY}] filter supdocuments`, props<{ term: string }>());
  export const resetSupdocumentFilter = createAction(`[${SUP_DOC_KEY}] reset supdocuments filter`);

  export const showSupdocumentModal = createAction(`[${SUP_DOC_KEY}] open supdocument creation modal`);
  export const setSupdocumentModal = createAction(
    `[${SUP_DOC_KEY}] set creation modal`,
    props<{ config: SupdocumentModalConfig }>()
  );

  export const showSupdocumentSendModal = createAction(
    `[${SUP_DOC_KEY}] open supdocument send modal`
    // props<{selected: string[]}>()
  );
  export const setSupdocumentSendModal = createAction(
    `[${SUP_DOC_KEY}] set send modal`,
    props<{ config: SupdocumentSendModalConfig }>()
  );

  export const [createSupdocumentRequest, createSupdocumentSuccess, createSupdocumentFailure] = createHTTPActions<
    SupdocumentForm,
    SupDocument,
    string
  >(`[${SUP_DOC_KEY}] create supdocument`);

  export const [deleteSupdocumentRequest, deleteSupdocumentSuccess, deleteSupdocumentFailure] = createHTTPActions<
    number[],
    number,
    string
  >(`[${SUP_DOC_KEY}] delete supdocument`);

  export const [downloadSupdocumentRequest, downloadSupdocumentSuccess, downloadSupdocumentFailure] = createHTTPActions<
    number,
    FileModel,
    string
  >(`[${SUP_DOC_KEY}] download supdocument`);

  export const [sendSupdocumentRequest, sendSupdocumentSuccess, sendSupdocumentFailure] = createHTTPActions<
    SupdocumentSendForm,
    void,
    string
  >(`[${SUP_DOC_KEY}] send supdocument`);

  export const selectSupdocument = createAction(
    `[${SUP_DOC_KEY}] select supdocument`,
    props<{ supdocument: SupDocument }>()
  );

  export const goToDetail = createAction(
    `[${SUP_DOC_KEY}] go to supdocument details`,
    props<{ supdocument: SupDocument }>()
  );
}
