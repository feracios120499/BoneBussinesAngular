import { SupDocument } from '@models/sup-documents/sup-document.model';
import { PaymentStatuses } from './payment-status.type';
import { PaymentsListItemAccount } from './payments-list-item.model';

export interface PaymentDetails {
  additionalDetails?: string;
  amount: number;
  amountString: string;
  attachedSupDocs: PaymentSupDoc[];
  bankPayedDate?: Date;
  bankPaymentId?: number;
  bankReceivedDate?: Date;
  creatingDate?: Date;
  customerId: string;
  id: number;
  isNeedMySign: boolean;
  isNeedSign: boolean;
  number: string;
  paymentDate: Date;
  paymentValueDate: Date;
  purpose: string;
  recipient: PaymentsListItemAccount;
  recipientCountryCode: number;
  recipientCountryName: string;
  sender: PaymentsListItemAccount;
  statusChangeDate: Date;
  statusId: PaymentStatuses;
  typeId: string;
  userId: string;
  visaStampCount: number;
}

export interface PaymentSupDoc {
  attachedDate: Date;
  comment: string;
  paymentId: number;
  relId: number;
  supDoc: SupDocument;
}
