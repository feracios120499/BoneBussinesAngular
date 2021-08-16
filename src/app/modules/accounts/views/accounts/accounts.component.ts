import { loadAccounts, setTab } from '@actions/acct.actions';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AccountTab } from '@modules/accounts/models/acct-tab.enum';
import { Store } from '@ngrx/store';
import { accountsSelector, countActiveAccountsSelector, countClosedAccountsSelector, currentTabSelector, isLoadingAccountsSelector } from '@selectors/acct.selectors';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit, OnDestroy {

  navigationSubscription;

  constructor(
    private store: Store,
    private router: Router,
  ) {
    // subscribe to the router events. Store the subscription so we can
    // unsubscribe later.
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.init();
      }
    });
  }
  accounts$ = this.store.select(accountsSelector);
  isLoadingAccounts$ = this.store.select(isLoadingAccountsSelector);
  ngOnInit(): void {


  }
  init(): void {
    this.store.dispatch(loadAccounts({ reload: true }));
  }
  ngOnDestroy(): void {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }




}
