import { SupDocument } from '@models/sup-documents/sup-document.model';


export const SUP_DOC_KEY = 'sup-doc';

export interface SupDocumentsState {
    documents: SupDocument[];
}

export const supDocInitialState: SupDocumentsState = {
    documents: []
};
