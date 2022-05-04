import { Transaction } from '@modules/accounts/models/transaction.model';

export const PAY_INCOMING_KEY = 'pay_incoming';

export interface PayIncomingState {
  transactions: Transaction[];
}

export const incomingState: PayIncomingState = {
  transactions: [],
};
