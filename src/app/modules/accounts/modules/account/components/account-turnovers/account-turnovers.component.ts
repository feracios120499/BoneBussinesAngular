import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AcctDetailsActions } from '@store/acct/details/actions';

@Component({
  selector: 'account-turnovers',
  templateUrl: './account-turnovers.component.html',
  styleUrls: ['./account-turnovers.component.scss']
})
export class AccountTurnoversComponent implements OnInit {

  constructor(private store: Store) { }



  ngOnInit(): void {
  }


}
