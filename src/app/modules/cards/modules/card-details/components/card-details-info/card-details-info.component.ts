import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CardDetailsSelectors } from '@store/cards/details/selectors';
import { notNullAndUndefined } from '@store/shared';

@Component({
  selector: 'app-card-details-info',
  templateUrl: './card-details-info.component.html',
  styleUrls: ['./card-details-info.component.scss'],
})
export class CardDetailsInfoComponent implements OnInit {
  constructor(private store: Store) {}

  card$ = this.store.select(CardDetailsSelectors.card);
  ngOnInit(): void {}
}
