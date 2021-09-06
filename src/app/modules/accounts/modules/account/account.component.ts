import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AcctDetailsActions } from '@store/acct/details/actions';
import { AcctDetailsEffects } from '@store/acct/details/effects';
import { acctDetailsReducer } from '@store/acct/details/reducer';
import { ACCT_DETAILS_KEY } from '@store/acct/details/store';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit, OnDestroy {

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.addReducer(ACCT_DETAILS_KEY, acctDetailsReducer);
    this.store.dispatch(AcctDetailsActions.initDetails());
    this.store.dispatch(AcctDetailsActions.loadCurrentAccount());
  }


  ngOnDestroy(): void {
    this.store.dispatch(AcctDetailsActions.destroyDetails());
    this.store.removeReducer(ACCT_DETAILS_KEY as never);
  }

}
