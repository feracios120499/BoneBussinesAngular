import { AfterViewInit, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  accountsOnTabSelector,
  filterAccountsSelector,
  FilterCurrencySelector,
  isLoadingAccountsSelector
} from '@selectors/acct.selectors';
import { AccountModel } from 'src/app/@shared/models/account.model';
import { AcctActions } from '@actions/acct.actions';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.scss']
})
export class AccountsListComponent implements AfterViewInit {

  constructor(private store: Store) { }

  accounts$ = this.store.select(accountsOnTabSelector);
  filter$ = this.store.select(filterAccountsSelector);
  filterCurrency$ = this.store.select(FilterCurrencySelector);
  isLoadingAccounts$ = this.store.select(isLoadingAccountsSelector);
  // isLoadingAccounts$ = of(true);
  ngAfterViewInit(): void {
  }

  toDetail(account: AccountModel): void {
    this.store.dispatch(AcctActions.goToDetail({ account }));
  }
}
