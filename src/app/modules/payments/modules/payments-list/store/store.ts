import { DateRange } from '@models/date-range.model';
import { StatusCount } from '@models/status-count.model';
import { PaymentStatuses } from '@modules/payments/models/payment-status.type';
import { PaymentsListItem } from '@modules/payments/models/payments-list-item.model';
import { PaymentsListLoadings } from '@modules/payments/models/payments-list-loadings.type';
import dayjs from 'dayjs';

export const PAY_LIST_KEY = 'pay_list';

export interface PayListState {
  count: StatusCount;
  currentTab: PaymentStatuses;
  loadings: PaymentsListLoadings[];
  payments: PaymentsListItem[];
  filter: string;
  range: DateRange;
  selectAll: boolean;
  selectedIds: number[];
}

export const payListState: PayListState = {
  count: {},
  currentTab: 'ONMYSIGN',
  loadings: [],
  payments: [],
  filter: '',
  range: {
    start: dayjs().add(-1, 'month'),
    end: dayjs(),
  },
  selectAll: false,
  selectedIds: [],
};
