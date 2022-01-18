import { SelectAccount } from '@models/select-account.model';

export interface MyAccountsFormModel {
    docNumberAuto: boolean;
    docNumber?: string;
    senderAccount?: SelectAccount;
    recipientAccount?: SelectAccount;
    amount: number;
    purpose: string;
    additionalDetails?: string;
}
