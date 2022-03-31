import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CardDetailsActions } from '@store/cards/details/actions';
import { CardDetailsSelectors } from '@store/cards/details/selectors';
import { CardDetailsTabs } from '../../models/card-details-tabs.type';

@Component({
  selector: 'app-card-details-tabs',
  templateUrl: './card-details-tabs.component.html',
  styleUrls: ['./card-details-tabs.component.scss'],
})
export class CardDetailsTabsComponent implements OnInit {
  constructor(private store: Store) {}

  currentTab$ = this.store.select(CardDetailsSelectors.currentTab);

  ngOnInit(): void {}

  setTab(tab: CardDetailsTabs | string): void {
    this.store.dispatch(
      CardDetailsActions.setTab({ tab: tab as unknown as CardDetailsTabs })
    );
  }
}
