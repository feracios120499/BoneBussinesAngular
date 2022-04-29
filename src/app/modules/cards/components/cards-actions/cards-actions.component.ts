import { Component, OnInit } from '@angular/core';
import { CardsViewState } from '@models/enums/cards-view-state.enum';
import { CardsActions } from '@modules/cards/store/actions';
import { CardsSelectors } from '@modules/cards/store/selectors';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-cards-actions',
  templateUrl: './cards-actions.component.html',
  styleUrls: ['./cards-actions.component.scss'],
})
export class CardsActionsComponent implements OnInit {
  constructor(private store: Store) {}

  viewState$ = this.store.select(CardsSelectors.viewStateSelector);
  formState$ = this.store.select(CardsSelectors.form);

  ngOnInit(): void {}

  setViewState(state: CardsViewState): void {
    this.store.dispatch(CardsActions.setViewState({ state }));
  }
}
