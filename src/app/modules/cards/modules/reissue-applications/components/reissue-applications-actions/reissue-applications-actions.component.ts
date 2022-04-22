import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CardReissueActions } from '@store/cards/reissue/actions';
import { CardReissueSelectors } from '@store/cards/reissue/selectors';

@Component({
  selector: 'app-reissue-applications-actions',
  templateUrl: './reissue-applications-actions.component.html',
  styleUrls: ['./reissue-applications-actions.component.scss'],
})
export class ReissueApplicationsActionsComponent implements OnInit {
  constructor(private store: Store) {}
  tab$ = this.store.select(CardReissueSelectors.tab);
  selectAll$ = this.store.select(CardReissueSelectors.selectAll);

  ngOnInit(): void {}

  selectAll(): void {
    this.store.dispatch(CardReissueActions.selectAll());
  }
}
