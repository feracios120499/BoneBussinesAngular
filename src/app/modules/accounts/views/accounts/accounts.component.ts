import { loadAccounts, setTab } from '@actions/acct.actions';
import { Component, OnInit } from '@angular/core';
import { AccountTab } from '@modules/accounts/models/acct-tab.enum';
import { Store } from '@ngrx/store';
import { accountsSelector, countActiveAccountsSelector, countClosedAccountsSelector, currentTabSelector, isLoadingAccountsSelector } from '@selectors/acct.selectors';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {

  constructor(private store: Store) { }

  accounts$ = this.store.select(accountsSelector);
  isLoadingAccounts$ = this.store.select(isLoadingAccountsSelector);
  ngOnInit(): void {

    this.store.dispatch(loadAccounts({ reload: true }));
  }




}
