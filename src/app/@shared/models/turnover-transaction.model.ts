export interface TurnoverTransaction {
    Id: number;
    AccId: number;
    BankId: string;
    State: number;
    TransactionType: string;
    DocumentId: number;
    DocumentNumber: string;
    TurnoverDate: Date;
    CreateDate: Date;
    PayedDate: Date;
    Debit: number;
    Credit: number;
    Purpose: string;
    CorrespondentName: string;
    CorrespondentAccountNumber: string;
    CorrespondentBankId: string;
    CorrespondentCurrencyId: number;
}
