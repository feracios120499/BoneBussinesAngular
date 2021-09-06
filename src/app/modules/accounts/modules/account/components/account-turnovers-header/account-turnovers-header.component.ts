import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AcctDetailsSelectors } from '@store/acct/details/selectors';
import { rangeValueConverter } from '@store/shared';
import dayjs from 'dayjs';

@Component({
  selector: 'account-turnovers-header',
  templateUrl: './account-turnovers-header.component.html',
  styleUrls: ['./account-turnovers-header.component.scss']
})
export class AccountTurnoversHeaderComponent implements OnInit {

  constructor(private store: Store) { }
  form$ = this.store.select(AcctDetailsSelectors.filterTransactions);
  isLoading$ = this.store.select(AcctDetailsSelectors.isLoadingDetailsPage);
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
