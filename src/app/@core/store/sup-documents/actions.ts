import { SupDocument } from '@models/sup-documents/sup-document.model';
import { createHTTPActions } from '@store/shared';

export namespace SupDocumentsActions {

    export const [
        loadDocuments,
        loadDocumentsSuccess,
        loadDocumentsFailure
    ] = createHTTPActions<void, SupDocument[], string>('[sup-doc] load documents');
}
