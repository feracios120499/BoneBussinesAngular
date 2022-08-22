import { PaymentActionModal } from '@models/payment-modal.model';
import { SupDocument } from '@models/sup-documents/sup-document.model';
import { PaymentStatuses } from '@modules/payments/models/payment-status.type';

export interface PaymentConvertModal {
  amount: number;
  amountString: string;
  applicationDate: Date;
  applicationValueDate: Date;
  attachedSupDocs: SupDocumentAttach[];
  bankPaymentId: number;
  bankReceivedDate: Date;
  commission: number;
  commissionSum: number;
  creatingTimeStamp: Date;
  currencyCode: string;
  customerId: string;
  dateBankPayed: Date;
  dateCreated: Date;
  id: number;
  number: string;
  purpose: string;
  rate: number;
  recipientAcc: RecipientAcc;
  responsiblePerson: string;
  responsiblePersonPhone: string;
  senderAcc: RecipientAcc;
  statusChangedDate: string;
  statusId: PaymentStatuses;
  transitAccount: string;
  typeId: string;
  userId: string;
  visaStampCount: number;
  isNeedMySign: boolean;
  isNeedSign: boolean;

  actions: PaymentActionModal;
}

export interface SupDocumentAttach {
  attachedDate: Date;
  comment: string;
  paymentId: number;
  relId: number;
  supDoc: SupDocument;
}

export interface RecipientAcc {
  accCurrencyCode: string;
  accCurrencyId: number;
  accId: number;
  accNumber: string;
  bankCode: string;
  bankName: string;
  name: string;
  taxCode: string;
}
