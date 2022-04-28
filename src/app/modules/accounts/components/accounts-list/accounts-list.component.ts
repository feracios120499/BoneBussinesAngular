import { AfterViewInit, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AccountModel } from '@modules/accounts/models/account.model';
import { ResizeService } from '@services/resize.service';
import { AcctSelectors } from '@modules/accounts/store/selectors';
import { AcctActions } from '@modules/accounts/store/actions';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.scss'],
})
export class AccountsListComponent implements AfterViewInit {
  constructor(private store: Store, private resizeService: ResizeService) {}

  accounts$ = this.store.select(AcctSelectors.accountsOnTab);
  filter$ = this.store.select(AcctSelectors.filterAccounts);
  filterCurrency$ = this.store.select(AcctSelectors.filterCurrency);
  isLoadingAccounts$ = this.store.select(AcctSelectors.isLoadingAccounts);
  isMobile$ = this.resizeService.isMobile$;
  // isLoadingAccounts$ = of(true);
  ngAfterViewInit(): void {}

  toDetail(account: AccountModel): void {
    this.store.dispatch(AcctActions.goToDetail({ account }));
  }
}
