import { FileModel } from '@models/file.model';
import { SupDocument } from '@models/sup-documents/sup-document.model';
import { SupdocumentForm } from '@modules/sup-documents/types/supdocument-form.model';
import { SupdocumentModalConfig } from '@modules/sup-documents/types/supdocument-modal-config.model';
import { createAction, props } from '@ngrx/store';
import { createHTTPActions } from '@store/shared';
import { SUP_DOC_KEY } from './store';

export namespace SupDocumentsActions {

    export const [loadDocuments, loadDocumentsSuccess, loadDocumentsFailure] = createHTTPActions<
    void,
    SupDocument[],
    string
    >(`[${SUP_DOC_KEY}] load supdocuments`);

    export const filterSupdocuments = createAction(
        `[${SUP_DOC_KEY}] filter supdocuments`,
        props<{ term: string }>()
    );
    export const resetSupdocumentFilter = createAction(
        `[${SUP_DOC_KEY}] reset supdocuments filter`);

    export const showSupdocumentModal = createAction(
        `[${SUP_DOC_KEY}] open supdocument creation modal`
    );
    export const setSupdocumentModal = createAction(
        `[${SUP_DOC_KEY}] set modal`,
        props<{ config: SupdocumentModalConfig }>()
      );
    export const [createSupdocumentRequest, createSupdocumentSuccess, createSupdocumentFailure] = createHTTPActions<
    SupdocumentForm,
    SupDocument,
    string
>(`[${SUP_DOC_KEY}] create supdocument`);

export const [deleteSupdocumentRequest, deleteSupdocumentSuccess, deleteSupdocumentFailure] = createHTTPActions<
    string,
    void,
    string
  >(`[${SUP_DOC_KEY}] delete supdocument`);


export const [downloadSupdocumentRequest, downloadSupdocumentSuccess, downloadSupdocumentFailure] = createHTTPActions<
        string,
        FileModel,
        string
>(`[${SUP_DOC_KEY}] download supdocument`);
}
