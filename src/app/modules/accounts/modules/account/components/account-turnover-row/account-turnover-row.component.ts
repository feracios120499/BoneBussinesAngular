import { Component, Input, OnInit } from '@angular/core';
import { UiTurnovers } from '@models/turnovers.model';
import { Store } from '@ngrx/store';
import { AcctDetailsActions } from '@store/acct/details/actions';
import { AcctDetailsSelectors } from '@store/acct/details/selectors';

@Component({
  selector: 'account-turnover-row',
  templateUrl: './account-turnover-row.component.html',
  styleUrls: ['./account-turnover-row.component.scss']
})
export class AccountTurnoversRowComponent implements OnInit {

  @Input() turnover!: UiTurnovers;

  constructor(private store: Store) {
    console.log('AccountTurnoversRowComponent');
  }

  currencyCode$ = this.store.select(AcctDetailsSelectors.currencyCode);

  ngOnInit(): void {
  }

  toggleTurnover(): void {
    if (this.turnover.isOpen) {
      this.store.dispatch(AcctDetailsActions.closeTurnovers({ id: this.turnover.id }));
    }
    else {
      this.store.dispatch(AcctDetailsActions.openTurnovers({ id: this.turnover.id }));
    }
  }

}
