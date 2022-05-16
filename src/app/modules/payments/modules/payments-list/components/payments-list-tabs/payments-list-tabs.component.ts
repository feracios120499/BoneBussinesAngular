import { Component, OnInit } from '@angular/core';
import { PaymentStatuses } from '@modules/payments/models/payment-status.type';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { PayListActions } from '../../store/actions';
import { PayListSelectors } from '../../store/selectors';

@Component({
  selector: 'app-payments-list-tabs',
  templateUrl: './payments-list-tabs.component.html',
  styleUrls: ['./payments-list-tabs.component.scss'],
})
export class PaymentsListTabsComponent implements OnInit {
  constructor(private store: Store) {}

  tabs = [
    {
      status: 'NEW',
      label: 'components.pay.states.new',
      badgeClass: 'b1-page-badge__success',
    },
    {
      status: 'ONMYSIGN',
      label: 'components.pay.states.onMySign',
    },
    {
      status: 'ONSIGN',
      label: 'components.pay.states.onSign',
    },
    {
      status: 'SIGNED',
      label: 'components.pay.states.signed',
    },
    {
      status: 'BANKRECEIVED',
      label: 'components.pay.states.deliveredInBank',
    },
    {
      status: 'BANKERROR',
      label: 'components.pay.states.errors',
      badgeClass: 'b1-page-badge__error',
    },
  ];
  count$ = this.store.select(PayListSelectors.count);
  tab$ = this.store
    .select(PayListSelectors.currentTab)
    .pipe(map((currentTab) => this.tabs.find((p) => p.status == currentTab)));

  setTab(tab: string): void {
    this.store.dispatch(PayListActions.setTab({ tab: tab as unknown as PaymentStatuses }));
  }
  ngOnInit(): void {}
}
