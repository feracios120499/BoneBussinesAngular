export interface TurnoverTransaction {
    id: number;
    accId: number;
    bankId: string;
    state: number;
    transactionType: string;
    documentId: number;
    documentNumber: string;
    turnoverDate: Date;
    createDate: Date;
    payedDate: Date;
    debit: number;
    credit: number;
    purpose: string;
    correspondentName: string;
    correspondentAccountNumber: string;
    correspondentBankId: string;
    correspondentCurrencyId: number;
}
