import { Component, OnInit } from '@angular/core';
import { CardReissueStatus } from '@b1-types/cards/card-reissue-status.type';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { CardReissueActions } from '../../store/actions';
import { CardReissueSelectors } from '../../store/selectors';

@Component({
  selector: 'app-reissue-applications-tabs',
  templateUrl: './reissue-applications-tabs.component.html',
  styleUrls: ['./reissue-applications-tabs.component.scss'],
})
export class ReissueApplicationsTabsComponent implements OnInit {
  constructor(private store: Store) {}

  tabs = [
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
  count$ = this.store.select(CardReissueSelectors.count);
  tab$ = this.store
    .select(CardReissueSelectors.tab)
    .pipe(map((currentTab) => this.tabs.find((p) => p.status == currentTab)));
  ngOnInit(): void {}

  setTab(tab: string): void {
    this.store.dispatch(CardReissueActions.setTab({ tab: tab as unknown as CardReissueStatus }));
  }
}
