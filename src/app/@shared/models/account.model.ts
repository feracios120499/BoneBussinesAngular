import { AccountTab } from '@modules/accounts/models/acct-tab.enum';

export interface AccountModel {
    requisitesTypesList: string[];
    statementTypesList: string[];
    exportTypesList: string[];
    isStatementFree: boolean;
    isOverdraft: boolean;
    isCardAccount: boolean;
    id: number;
    iban: string;
    customerId: number;
    type: string;
    number: string;
    name: string;
    bankId: string;
    currencyId: number;
    currencyCode: string;
    balance: number;
    plannedBalance: number;
    lastActive?: Date;
    openingDate: Date;
    closingDate?: Date;
    debitTurns: number;
    creditTurns: number;
    lockDebitCode: number;
    lockCreditCode: number;
    limit: number;
    taxCode: string;
    isTechnical: boolean;
    ob22: string;
    tip: string;
    branch: string;
    status: AccountTab;
}
