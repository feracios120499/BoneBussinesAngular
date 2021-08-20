import { AcctActions } from '@actions/acct.actions';
import { Component, OnInit } from '@angular/core';
import { AccountTab } from '@modules/accounts/models/acct-tab.enum';
import { Store } from '@ngrx/store';
import { countActiveAccountsSelector, countClosedAccountsSelector, currentTabSelector } from '@selectors/acct.selectors';

@Component({
  selector: 'app-accounts-tabs',
  templateUrl: './accounts-tabs.component.html',
  styleUrls: ['./accounts-tabs.component.scss']
})
export class AccountsTabsComponent implements OnInit {

  constructor(private store: Store) { }
  accountTab = AccountTab;

  countActiveAccounts$ = this.store.select(countActiveAccountsSelector);
  countClosedAccounts$ = this.store.select(countClosedAccountsSelector);
  currentTab$ = this.store.select(currentTabSelector);

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
