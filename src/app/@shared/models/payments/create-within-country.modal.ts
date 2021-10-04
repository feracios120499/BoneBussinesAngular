import { PaymentForm } from '@models/payment-form.model';

export interface CreateWithinCountryModel extends PaymentForm {
    attachedSupDocs?: [];
    saveAsTemplate: boolean;
    templateName?: string;
    status: 'NEW' | 'ONSIGN';
    templateId?: string;
}
