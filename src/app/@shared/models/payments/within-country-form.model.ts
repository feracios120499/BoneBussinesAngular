import { SelectAccount } from '../select-account.model';

export interface WithinCountryForm {
    docNumberAuto: boolean;
    docNumber?: string;
    senderAccount?: SelectAccount;
    recipientName: string;
    recipientAccountNumber: string;
    recipientTaxCode: string;
    recipientBankName: string;
    amount: number;
    purpose: string;
    additionalDetails?: string;
}
