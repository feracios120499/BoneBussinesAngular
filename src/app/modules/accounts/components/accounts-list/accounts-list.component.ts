import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { accountsSelector, filterAccountsSelector } from '@selectors/acct.selectors';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.scss']
})
export class AccountsListComponent implements OnInit {


  constructor(private store: Store) { }

  accounts$ = this.store.select(accountsSelector);
  filter$ = this.store.select(filterAccountsSelector);

  ngOnInit(): void {
  }

}
