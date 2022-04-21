import { BankModel } from '@models/bank.model';

export interface Correspondent {
  id: string;
  lastUseDate: Date;
  creatingDate: Date;
  userId: string;
  accCurrencyId: string;
  bankName: string;
  bank: BankModel;
  taxCode: string;
  accCurrencyCode: string;
  accNumber: string;
  bankCode: string;
  name: string;
}
