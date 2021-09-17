import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'payment-create-tabs',
  templateUrl: './create-tabs.component.html',
  styleUrls: ['./create-tabs.component.scss']
})
export class CreateTabsComponent implements OnInit {

  constructor(private store: Store) { }

  tabs = [
    {
      route: 'within-country',
      roles: ['Director', 'Accountant', 'PaymentsManager', 'ForeignCurrencyPaymentsManager'],
      icon: 'country',
      label: 'components.pay.actions.inUrainePay'
    },
    {
      route: 'my-accounts',
      roles: ['Director', 'Accountant', 'PaymentsManager', 'ForeignCurrencyPaymentsManager'],
      icon: 'cards',
      label: 'components.pay.actions.innerPay'
    },
    {
      route: 'swift',
      roles: ['Director', 'Accountant', 'ForeignCurrencyPaymentsManager'],
      icon: 'swift',
      label: 'components.pay.actions.swift'
    }
  ];
  ngOnInit(): void {
  }

}
