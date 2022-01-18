import { PaymentSupDoc } from './payment-sup-doc.model';

export interface CreatePaymentModel {
    additionalDetails?: string;
    amount: number;
    number?: string;
    paymentDate: Date;
    paymentValueDate: Date;
    purpose: string;
    sender: CreatePaymentAccountModel;
    recipient: CreatePaymentAccountModel;
    attachedSupDocs?: PaymentSupDoc[];
    saveAsTemplate: boolean;
    templateName?: string;
    status: 'NEW' | 'ONSIGN';
    templateId?: string;
}


export interface CreatePaymentAccountModel {
    accCurrencyCode: string;
    accCurrencyId: number;
    accId?: number;
    accNumber: string;
    bankCode: string;
    name: string;
    taxCode: string;
}
