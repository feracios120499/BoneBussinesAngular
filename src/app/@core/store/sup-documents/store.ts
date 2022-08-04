import { SupDocument } from '@models/sup-documents/sup-document.model';
import { SupdocumentsLoading } from '@modules/sup-documents/types/supdocument-loading.type';


export const SUP_DOC_KEY = 'sup-doc';

export interface SupDocumentsState {
    documents: SupDocument[],
    loadings: SupdocumentsLoading[]
}

export const supDocInitialState: SupDocumentsState = {
    documents: [],
    loadings: []
};
