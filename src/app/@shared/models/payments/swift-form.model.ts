import { SelectAccount } from '@models/select-account.model';
import { PaymentSupDoc } from './payment-sup-doc.model';

export interface SwiftForm {
  amount: number;
  number?: string;
  other: string;
  purpose: string;
  typePay: number;
  paymentFee: string;
  senderDataLangCode: string;
  senderDataCountry: string;
  senderDataName: string;
  senderDataLocation: string;
  senderDataTaxCode: string;
  senderBankName: string;
  senderBankLocation: string;
  senderAccount: SelectAccount;
  intermediaryBankSWIFT?: string;
  intermediaryBankName?: string;
  intermediaryBankLocation?: string;
  benificiaryIBAN: string;
  benificiaryAccNumber: string;
  benificiaryName: string;
  benificiaryLocation: string;
  benificiaryBankCorrAccNumber: string;
  benificiaryBankName: string;
  benificiaryBankSWIFT: string;
  benificiaryBankLocation: string;
  attachedSupDocs?: PaymentSupDoc[];
  isAgree: boolean;
}
