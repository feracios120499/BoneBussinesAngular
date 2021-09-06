import { PaymentAction } from './enums/payment-action.enum';
import { StatusCode } from './enums/status-code.enum';

export interface PaymentModal {
    number: string;
    statusCode: StatusCode;
    documentDate: Date;
    valueDate: Date;
    payedDate?: Date;
    sender: Partial<PaymentAccountModal>;
    recipient: Partial<PaymentAccountModal>;
    purpose: string;
    amount: number;
    amountString: string;
    currencyCode: string;

    actions: PaymentActionModal;
}

export interface PaymentAccountModal {
    name: string;
    number: string;
    taxCode: string;
    countryName?: string;
    details?: string;
}

export interface PaymentActionModal {
    [key: string]: () => void;
}


