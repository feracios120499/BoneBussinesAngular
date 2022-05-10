export interface PaymentRow {
  id: number | string;
  number: string;
  senderName: string;
  recipientName: string;
  purpose: string;
  createDate: Date;
  amount: number;
  selected: boolean;
  currencyCode: string;
}
