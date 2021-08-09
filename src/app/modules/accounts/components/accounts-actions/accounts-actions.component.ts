import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { formSelector } from '@selectors/acct.selectors';
import { AcctFilter } from '@stores/acct.store';
import { FormGroupState, setValue, SetValueAction } from 'ngrx-forms';
import { Observable, of } from 'rxjs';
import { Filter } from 'src/app/@shared/models/filter.model';

@Component({
  selector: 'app-accounts-actions',
  templateUrl: './accounts-actions.component.html',
  styleUrls: ['./accounts-actions.component.scss']
})
export class AccountsActionsComponent implements OnInit {

  formState$: Observable<FormGroupState<AcctFilter>>;
  constructor(private store: Store) {
    this.formState$ = store.select(formSelector);
  }

  ngOnInit(): void {

  }
}
