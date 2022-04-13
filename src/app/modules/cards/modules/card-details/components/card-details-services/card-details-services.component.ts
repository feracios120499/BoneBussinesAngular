import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CardDetailsSelectors } from '@store/cards/details/selectors';

@Component({
  selector: 'app-card-details-services',
  templateUrl: './card-details-services.component.html',
  styleUrls: ['./card-details-services.component.scss'],
})
export class CardDetailsServicesComponent implements OnInit {
  constructor(private store: Store) {}

  card$ = this.store.select(CardDetailsSelectors.card);
  ngOnInit(): void {}

  showStatement(): void {}
}
