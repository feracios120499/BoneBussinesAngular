import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CardReissueActions } from '@store/cards/reissue/actions';
import { cardReissueReducer } from '@store/cards/reissue/reducer';
import { CardReissueSelectors } from '@store/cards/reissue/selectors';
import { CARD_REISSUE_KEY } from '@store/cards/reissue/store';

@Component({
  selector: 'app-reissue-applications',
  templateUrl: './reissue-applications.component.html',
  styleUrls: ['./reissue-applications.component.scss'],
})
export class ReissueApplicationsComponent implements OnInit, OnDestroy {
  constructor(private store: Store) {}

  isLoading$ = this.store.select(CardReissueSelectors.isLoading);
  ngOnInit(): void {
    this.store.addReducer(CARD_REISSUE_KEY, cardReissueReducer);
    this.store.dispatch(CardReissueActions.init());
    this.store.dispatch(CardReissueActions.setTab({ tab: 'ONMYSIGN' }));
  }

  ngOnDestroy(): void {
    this.store.removeReducer(CARD_REISSUE_KEY as never);
    this.store.dispatch(CardReissueActions.destroy());
  }
}
