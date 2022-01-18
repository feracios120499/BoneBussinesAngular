import { AfterViewInit, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AccountModel } from 'src/app/@shared/models/account.model';
import { AcctActions } from '@store/acct/actions';
import { AcctSelectors } from '@store/acct/selectors';
import { ResizeService } from '@services/resize.service';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.scss']
})
export class AccountsListComponent implements AfterViewInit {
  constructor(private store: Store, private resizeService: ResizeService) { }

  accounts$ = this.store.select(AcctSelectors.accountsOnTab);
  filter$ = this.store.select(AcctSelectors.filterAccounts);
  filterCurrency$ = this.store.select(AcctSelectors.filterCurrency);
  isLoadingAccounts$ = this.store.select(AcctSelectors.isLoadingAccounts);
  isMobile$ = this.resizeService.isMobile$;
  // isLoadingAccounts$ = of(true);
  ngAfterViewInit(): void {
  }

  toDetail(account: AccountModel): void {
    this.store.dispatch(AcctActions.goToDetail({ account }));
  }
}
