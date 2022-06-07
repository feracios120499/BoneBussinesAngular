import { PaymentStatuses } from './payment-status.type';

export interface SwiftDetails {
  amount: number;
  details: string;
  id: number;
  number: string;
  other: string;
  paymentDate: Date;
  paymentValueDate: Date;
  purpose: string;
  typePay: number;
  paymentFee: string;
  benificiary: SwiftBenificiary;
  intermediaryBank: SwiftBank;
  senderAccount: SwiftSenderAccount;
  senderBank: SwiftBank;
  senderData: SwiftSenderData;
  bankPayedDate?: Date;
  statusId: PaymentStatuses;
  isNeedMySign: boolean;
}

export interface SwiftSenderData {
  country: string;
  langCode: string;
  location: string;
  name: string;
  taxCode: string;
}

export interface SwiftSenderAccount {
  accCurrencyCode: string;
  accCurrencyId: number;
  accId: number;
  accNumber: string;
  bankCode: string;
  bankName: string;
  name: string;
  taxCode: string;
}

export interface SwiftBenificiary {
  accNumber?: string;
  iban?: string;
  location: string;
  name: string;
  bank: SwiftBank;
}

export interface SwiftBank {
  corrAccNumber?: string;
  location: string;
  name: string;
  swift?: string;
}
