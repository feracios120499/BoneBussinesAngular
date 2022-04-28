import { Component, OnInit } from '@angular/core';
import { AccountTab } from '@modules/accounts/models/acct-tab.enum';
import { AcctActions } from '@modules/accounts/store/actions';
import { AcctSelectors } from '@modules/accounts/store/selectors';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-accounts-tabs',
  templateUrl: './accounts-tabs.component.html',
  styleUrls: ['./accounts-tabs.component.scss'],
})
export class AccountsTabsComponent implements OnInit {
  constructor(private store: Store) {}
  accountTab = AccountTab;

  countActiveAccounts$ = this.store.select(AcctSelectors.countActiveAccounts);
  countClosedAccounts$ = this.store.select(AcctSelectors.countClosedAccounts);
  currentTab$ = this.store.select(AcctSelectors.currentTab);

  ngOnInit(): void {
    this.setTab(AccountTab.Active);
  }

  setTab(tab: AccountTab): void {
    this.store.dispatch(AcctActions.setTab({ tab }));
  }

  selectTab(tabString: string): void {
    const tab = tabString as keyof typeof AccountTab;
    this.setTab(AccountTab[tab]);
  }
}
