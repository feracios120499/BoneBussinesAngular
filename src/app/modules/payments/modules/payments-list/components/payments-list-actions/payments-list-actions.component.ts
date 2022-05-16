import { Component, OnInit } from '@angular/core';
import { DateRange } from '@models/date-range.model';
import { PaymentsListItem } from '@modules/payments/models/payments-list-item.model';
import { Store } from '@ngrx/store';
import dayjs from 'dayjs';
import { PayListActions } from '../../store/actions';
import { PayListSelectors } from '../../store/selectors';

@Component({
  selector: 'app-payments-list-actions',
  templateUrl: './payments-list-actions.component.html',
  styleUrls: ['./payments-list-actions.component.scss'],
})
export class PaymentsListActionsComponent implements OnInit {
  constructor(private store: Store) {}

  range$ = this.store.select(PayListSelectors.range);
  filter$ = this.store.select(PayListSelectors.filter);
  isLoading$ = this.store.select(PayListSelectors.isLoading);
  selectedAll$ = this.store.select(PayListSelectors.selectedAll);
  filteredPayments$ = this.store.select(PayListSelectors.filteredPayments);
  currentTab$ = this.store.select(PayListSelectors.currentTab);

  ranges: any = {
    'shared.picker.today': [dayjs(), dayjs()],
    'shared.picker.currentMonth': [dayjs().startOf('month'), dayjs()],
    'shared.picker.month1': [dayjs().subtract(1, 'month'), dayjs()],
  };

  ngOnInit(): void {}

  selectAll(payments: PaymentsListItem[]): void {
    this.store.dispatch(PayListActions.selectAll({ payments }));
  }

  onFilter(filter: string): void {
    this.store.dispatch(PayListActions.filter({ filter }));
  }

  setRange(range: DateRange): void {
    this.store.dispatch(PayListActions.setRange({ range }));
  }

  printPayments(payments: PaymentsListItem[]): void {}

  deletePayments(payments: PaymentsListItem[]): void {}
}
