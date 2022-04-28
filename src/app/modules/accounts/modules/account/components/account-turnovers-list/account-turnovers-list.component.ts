import { Component, OnInit } from '@angular/core';
import { UiTurnovers } from '@modules/accounts/models/turnovers.model';
import { Store } from '@ngrx/store';
import { AcctDetailsSelectors } from '../../store/selectors';

@Component({
  selector: 'account-turnovers-list',
  templateUrl: './account-turnovers-list.component.html',
  styleUrls: ['./account-turnovers-list.component.scss'],
})
export class AccountTurnoversListComponent implements OnInit {
  constructor(private store: Store) {}

  turnovers$ = this.store.select(AcctDetailsSelectors.turnovers);
  isLoading$ = this.store.select(AcctDetailsSelectors.isLoadingTurnovers);
  range$ = this.store.select(AcctDetailsSelectors.transactionsRangeString);

  ngOnInit(): void {}

  trackId(index: number, turnover: UiTurnovers): string | undefined {
    return turnover ? turnover.id : undefined;
  }
}
