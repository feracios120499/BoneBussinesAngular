import { PaymentStatuses } from './payment-status.type';

export interface PaymentsListItem {
  amount: number;
  amountString: string;
  bankId: string;
  bankPaymentId?: number;
  canTrack: boolean;
  currencyCode: string;
  customerId: string;
  dateBankPayed?: Date;
  dateBankReceived?: Date;
  dateCreated: Date;
  docDate: Date;
  id: number;
  isNeedMySign: boolean;
  isNeedSign: boolean;
  number: string;
  purpose: string;
  recipient: PaymentsListItemAccount;
  sender: PaymentsListItemAccount;
  statusCode: PaymentStatuses;
  typeId: string;
  userId: string;
  valueDate: Date;
  visaStampCount: number;
}

export interface UiPaymentsListItem extends PaymentsListItem {
  selected: boolean;
}

export interface PaymentsListItemAccount {
  accCurrencyCode: string;
  accNumber: string;
  bankName: string;
  name: string;
  taxCode: string;
}
