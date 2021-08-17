import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filterTransactionsSelector } from '@selectors/acct.selectors';
import { DateRange, rangeValueConverter } from '@stores/acct.store';
import dayjs from 'dayjs';
import { Boxed, NgrxValueConverters } from 'ngrx-forms';

@Component({
  selector: 'account-transaction-header',
  templateUrl: './account-transaction-header.component.html',
  styleUrls: ['./account-transaction-header.component.scss']
})
export class AccountTransactionHeaderComponent implements OnInit {

  constructor(private store: Store) { }
  form$ = this.store.select(filterTransactionsSelector);
  public selected: any;
  public rangeValueConverter = rangeValueConverter;
  ranges: any = {
    'shared.picker.today': [dayjs(), dayjs()],
    'shared.picker.currentMonth': [dayjs().startOf('month'), dayjs()],
    'shared.picker.month1': [dayjs().subtract(1, 'month'), dayjs()],
    'shared.picker.month2': [dayjs().subtract(2, 'month'), dayjs()],
    'shared.picker.month3': [dayjs().subtract(3, 'month'), dayjs()],
  };

  ngOnInit(): void {
  }
}
