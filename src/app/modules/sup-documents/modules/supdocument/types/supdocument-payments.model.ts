import { PaymentStatuses } from '@modules/payments/models/payment-status.type';

export interface SupDocumentPayment {
  description: string;
  edrpo: string;
  relatedPayment: RelatedPayment;
  relationDate: string;
  supDocId: number;
}

export interface RelatedPayment {
  amount: number;
  creatingDate: Date;
  currencyCode: string;
  number: string;
  payDocId: number;
  purpose: string;
  statusId: PaymentStatuses;
  typeId: string;

  recipient: PaymentRecipient;
  sender: PaymentRecipient;
}

export interface PaymentRecipient {
  accCurrencyCode: string;
  accNumber: string;
  bankName: string;
  name: string;
}
