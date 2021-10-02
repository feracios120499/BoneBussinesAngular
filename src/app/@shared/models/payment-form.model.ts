import { PaymentAccount } from './payment-account.model';

export interface PaymentForm {
    additionalDetails?: string;
    amount: number;
    number?: string;
    paymentDate: Date;
    valueDate: Date;
    purpose: string;

    sender: PaymentAccount;
    recipient: PaymentAccount;
}
