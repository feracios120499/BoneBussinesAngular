import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CardDetailsActions } from '@store/cards/details/actions';
import { CardDetailsSelectors } from '@store/cards/details/selectors';

@Component({
  selector: 'app-card-details-header',
  templateUrl: './card-details-header.component.html',
  styleUrls: ['./card-details-header.component.scss'],
})
export class CardDetailsHeaderComponent implements OnInit {
  constructor(private store: Store) {}

  currentTab$ = this.store.select(CardDetailsSelectors.currentTab);

  ngOnInit(): void {}

  goToCards(): void {
    this.store.dispatch(CardDetailsActions.goToCards());
  }
}
