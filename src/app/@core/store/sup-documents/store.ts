import { SupDocument } from '@models/sup-documents/sup-document.model';
import { SupdocumentsLoading } from '@modules/sup-documents/types/supdocument-loading.type';
import { Recipient } from '@modules/sup-documents/types/supdocument-upload.model';


export const SUP_DOC_KEY = 'sup-doc';

export interface SupDocumentsState {
    documents: SupDocument[],
    filterTerm: string,
    loadings: SupdocumentsLoading[],
    selectedIds: string[];
    recipients: Recipient[]
}

export const supDocInitialState: SupDocumentsState = {
    documents: [],
    filterTerm: '',
    loadings: [],
    selectedIds: [],
    recipients: []
};
