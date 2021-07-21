import { CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { accountsSelector, filterAccountsSelector, FilterCurrencySelector } from '@selectors/acct.selectors';
import { filter, first } from 'rxjs/operators';
import { AccountModel } from 'src/app/@shared/models/account.model';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.scss']
})
export class AccountsListComponent implements AfterViewInit {

  constructor(private store: Store) { }

  accounts$ = this.store.select(accountsSelector);
  filter$ = this.store.select(filterAccountsSelector);
  filterCurrency$ = this.store.select(FilterCurrencySelector);

  ngAfterViewInit(): void {
  }
}
