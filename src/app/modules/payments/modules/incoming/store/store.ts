import { DateRange } from '@models/date-range.model';
import { Transaction } from '@modules/accounts/models/transaction.model';
import { IncomingLoadings } from '@modules/payments/models/incoming-loadings.type';
import dayjs from 'dayjs';

export const PAY_INCOMING_KEY = 'pay_incoming';

export interface PayIncomingState {
  transactions: Transaction[];
  selectedIds: string[];
  selectAll: boolean;
  loadings: IncomingLoadings[];
  filter: string;
  range: DateRange;
}

export const incomingState: PayIncomingState = {
  transactions: [],
  selectedIds: [],
  selectAll: false,
  loadings: [],
  filter: '',
  range: {
    start: dayjs('03.01.2022', 'DD.MM.YYYY'),
    end: dayjs('03.30.2022', 'DD.MM.YYYY'),
  },
};
