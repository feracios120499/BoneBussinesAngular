import { Component, OnInit } from '@angular/core';
import { Turnovers, UiTurnovers } from '@models/turnovers.model';
import { Store } from '@ngrx/store';
import { AcctDetailsSelectors } from '@store/acct/details/selectors';

@Component({
  selector: 'account-turnovers-list',
  templateUrl: './account-turnovers-list.component.html',
  styleUrls: ['./account-turnovers-list.component.scss']
})
export class AccountTurnoversListComponent implements OnInit {

  constructor(private store: Store) { }

  turnovers$ = this.store.select(AcctDetailsSelectors.turnovers);

  ngOnInit(): void {
  }

  trackId(index: number, turnover: UiTurnovers): string | undefined {
    return turnover ? turnover.Id : undefined;
  }

}
