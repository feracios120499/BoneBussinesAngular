export interface Transaction {
    Id: string;
    Number: string;
    DocumentDate: Date;
    CreatedDate: Date;
    PayedDate: Date;
    ValueDate: Date;
    Sender: TransactionAccount;
    Recipient: TransactionAccount;
    Purpose: string;
    Amount: number;
    AmountString: string;
    State: string;
}

export interface TransactionAccount {
    BankCode: string;
    BankName: string;
    TaxCode: string;
    Name: string;
    AccNumber: string;
    AccId?: any;
    AccCurrencyCode: string;
    AccCurrencyId: number;
}
