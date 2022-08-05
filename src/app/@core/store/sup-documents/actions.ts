import { SupDocument } from '@models/sup-documents/sup-document.model';
import { createAction, props } from '@ngrx/store';
import { createHTTPActions } from '@store/shared';
import { SUP_DOC_KEY } from './store';

export namespace SupDocumentsActions {

    export const [
        loadDocuments,
        loadDocumentsSuccess,
        loadDocumentsFailure
    ] = createHTTPActions<void, SupDocument[], string>('[sup-doc] load documents');

    export const filterSupdocuments = createAction(
        `[${SUP_DOC_KEY}] filter Supdocuments`,
        props<{ term: string }>()
    );
    export const resetSupdocumentFilter = createAction(
        `[${SUP_DOC_KEY}] reset supdocuments filter`);

}
