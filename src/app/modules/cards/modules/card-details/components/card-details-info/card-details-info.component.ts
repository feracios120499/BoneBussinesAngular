import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CardDetailsSelectors } from '../../store/selectors';

@Component({
  selector: 'app-card-details-info',
  templateUrl: './card-details-info.component.html',
  styleUrls: ['./card-details-info.component.scss'],
})
export class CardDetailsInfoComponent implements OnInit {
  constructor(private store: Store) {}

  card$ = this.store.select(CardDetailsSelectors.card);
  isCardLoading$ = this.store.select(CardDetailsSelectors.isCardLoading);

  ngOnInit(): void {}
}
