import { Component, OnInit } from '@angular/core';
import { DateRange } from '@models/date-range.model';
import { Store } from '@ngrx/store';
import dayjs, { Dayjs } from 'dayjs';
import { PayIncomingActions } from '../../store/actions';

@Component({
  selector: 'app-incoming-actions',
  templateUrl: './incoming-actions.component.html',
  styleUrls: ['./incoming-actions.component.scss'],
})
export class IncomingActionsComponent implements OnInit {
  constructor(private store: Store) {}

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
    //this.loadTransactions();
  }

  loadTransactions(): void {
    this.store.dispatch(PayIncomingActions.loadTransactionsRequest(this.range));
  }
}
