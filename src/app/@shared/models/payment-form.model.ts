import { PaymentAccount } from './payment-account.model';
import { PaymentSupDoc } from './payments/payment-sup-doc.model';

export interface PaymentForm {
    additionalDetails?: string;
    amount: number;
    number?: string;
    paymentDate: Date;
    paymentValueDate: Date;
    purpose: string;

    sender: PaymentAccount;
    recipient: PaymentAccount;

    attachedSupDocs?: PaymentSupDoc[];
}
