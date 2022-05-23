import { PaymentStatuses } from './payment-status.type';

export interface PaymentHistory {
  id: number;
  statusChangeDate: Date;
  statusChangeMessage: string;
  statusId: PaymentStatuses;
  userName: string;
}
