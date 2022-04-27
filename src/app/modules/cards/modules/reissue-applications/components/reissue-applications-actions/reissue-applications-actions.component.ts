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
  isLoading$ = this.store.select(CardReissueSelectors.isLoading);
  filter$ = this.store.select(CardReissueSelectors.filter);

  ngOnInit(): void {}

  selectAll(): void {
    this.store.dispatch(CardReissueActions.selectAll());
  }

  signApplications(): void {
    this.store.dispatch(CardReissueActions.confirmSign());
  }

  removeApplications(): void {
    this.store.dispatch(CardReissueActions.confirmRemove());
  }

  sendToBankApplications(): void {
    this.store.dispatch(CardReissueActions.confirmSendToBank());
  }

  onFilter(filter: string): void {
    this.store.dispatch(CardReissueActions.filter({ filter }));
  }
}
