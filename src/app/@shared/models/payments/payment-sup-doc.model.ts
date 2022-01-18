import { SupDocument } from '@models/sup-documents/sup-document.model';

export interface PaymentSupDoc {
    comment?: string;
    supDoc: SupDocument;
}
