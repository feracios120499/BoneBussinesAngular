export interface Transaction {
  id: string;
  number: string;
  documentDate: Date;
  createdDate: Date;
  payedDate: Date;
  valueDate: Date;
  sender: TransactionAccount;
  recipient: TransactionAccount;
  purpose: string;
  amount: number;
  amountString: string;
  state: string;
}

export interface UiTransaction extends Transaction {
  selected: boolean;
}

export interface TransactionAccount {
  bankCode: string;
  bankName: string;
  taxCode: string;
  name: string;
  accNumber: string;
  accId?: any;
  accCurrencyCode: string;
  accCurrencyId: number;
}
