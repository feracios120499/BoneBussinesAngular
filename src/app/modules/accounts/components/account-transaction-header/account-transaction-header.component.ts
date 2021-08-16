import { Component, OnInit } from '@angular/core';
import dayjs from 'dayjs';

@Component({
  selector: 'account-transaction-header',
  templateUrl: './account-transaction-header.component.html',
  styleUrls: ['./account-transaction-header.component.scss']
})
export class AccountTransactionHeaderComponent implements OnInit {

  constructor() { }

  public selected: any;
  ranges: any = {
    'shared.picker.today': [dayjs(), dayjs()],
    Yesterday: [dayjs().add(1, 'days'), dayjs().subtract(1, 'days')],
    'Last 7 Days': [dayjs().subtract(7, 'days'), dayjs()],
    'Last 30 Days': [dayjs().subtract(30, 'days'), dayjs()],
    'This Month': [dayjs().startOf('month'), dayjs().endOf('month')]
  };

  ngOnInit(): void {
  }
}
