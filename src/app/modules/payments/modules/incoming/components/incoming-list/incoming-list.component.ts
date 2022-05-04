import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PayIncomingSelectors } from '../../store/selectors';

@Component({
  selector: 'app-incoming-list',
  templateUrl: './incoming-list.component.html',
  styleUrls: ['./incoming-list.component.scss'],
})
export class IncomingListComponent implements OnInit {
  constructor(private store: Store) {}

  transactions$ = this.store.select(PayIncomingSelectors.transactions);
  ngOnInit(): void {}
}
