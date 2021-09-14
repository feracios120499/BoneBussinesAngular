import { AccountTab } from '@modules/accounts/models/acct-tab.enum';

export interface AccountModel {
    RequisitesTypesList: string[];
    StatementTypesList: string[];
    ExportTypesList: string[];
    IsStatementFree: boolean;
    IsOverdraft: boolean;
    IsCardAccount: boolean;
    Id: number;
    IBAN: string;
    CustomerId: number;
    Type: string;
    Number: string;
    Name: string;
    BankId: string;
    CurrencyId: number;
    CurrencyCode: string;
    Balance: number;
    PlannedBalance: number;
    LastActive?: Date;
    OpeningDate: Date;
    ClosingDate?: Date;
    DebitTurns: number;
    CreditTurns: number;
    LockDebitCode: number;
    LockCreditCode: number;
    Limit: number;
    TaxCode: string;
    IsTechnical: boolean;
    OB22: string;
    TIP: string;
    Branch: string;
    Status: AccountTab;
}
