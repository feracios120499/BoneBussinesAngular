import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AcctActions } from '@store/acct/actions';
import { AcctDetailsActions } from '@store/acct/details/actions';
import { AcctSelectors } from '@store/acct/selectors';


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
  accounts$ = this.store.select(AcctSelectors.accountsSelector);
  isLoadingAccounts$ = this.store.select(AcctSelectors.isLoadingAccounts);
  ngOnInit(): void {
  }

  init(): void {
    //this.store.dispatch(AcctDetailsActions.initDetails());
    this.store.dispatch(AcctActions.loadAccounts({ reload: true }));
  }

  ngOnDestroy(): void {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }




}
