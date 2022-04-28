import { Component, OnInit } from '@angular/core';
import { AcctFilter } from '@modules/accounts/models/acct-filter.model';
import { AcctSelectors } from '@modules/accounts/store/selectors';
import { Store } from '@ngrx/store';
import { FormGroupState } from 'ngrx-forms';
import { Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-accounts-actions',
  templateUrl: './accounts-actions.component.html',
  styleUrls: ['./accounts-actions.component.scss'],
})
export class AccountsActionsComponent implements OnInit {
  formState$: Observable<FormGroupState<AcctFilter>>;
  constructor(private store: Store) {
    this.formState$ = store.select(AcctSelectors.form).pipe(filter((p) => !!p));
  }

  ngOnInit(): void {}
}
