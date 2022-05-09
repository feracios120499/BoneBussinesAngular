import { Component, OnInit } from '@angular/core';
import { DateRange } from '@models/date-range.model';
import { Transaction } from '@modules/accounts/models/transaction.model';
import { Store } from '@ngrx/store';
import dayjs, { Dayjs } from 'dayjs';
import { PayIncomingActions } from '../../store/actions';
import { PayIncomingSelectors } from '../../store/selectors';

@Component({
  selector: 'app-incoming-actions',
  templateUrl: './incoming-actions.component.html',
  styleUrls: ['./incoming-actions.component.scss'],
})
export class IncomingActionsComponent implements OnInit {
  constructor(private store: Store) {}

  filter$ = this.store.select(PayIncomingSelectors.filter);
  selectAll$ = this.store.select(PayIncomingSelectors.selectAll);
  filteredTransactions$ = this.store.select(PayIncomingSelectors.filteredTransactions);
  range$ = this.store.select(PayIncomingSelectors.range);
  range: DateRange = {
    start: dayjs('03.01.2022', 'DD.MM.YYYY'),
    end: dayjs('03.30.2022', 'DD.MM.YYYY'),
  };

  ranges: any = {
    'shared.picker.today': [dayjs(), dayjs()],
    'shared.picker.currentMonth': [dayjs().startOf('month'), dayjs()],
    'shared.picker.month1': [dayjs().subtract(1, 'month'), dayjs()],
  };
  ngOnInit(): void {
    // this.loadTransactions();
  }

  loadTransactions(range: DateRange): void {
    this.store.dispatch(PayIncomingActions.setDateRange({ range }));
  }

  printTransactions(): void {
    this.store.dispatch(PayIncomingActions.printTransactions());
  }

  onFilter(filter: string): void {
    this.store.dispatch(PayIncomingActions.filter({ filter }));
  }

  selectAll(transactions: Transaction[]): void {
    this.store.dispatch(PayIncomingActions.selectAll({ transactions }));
  }
}
