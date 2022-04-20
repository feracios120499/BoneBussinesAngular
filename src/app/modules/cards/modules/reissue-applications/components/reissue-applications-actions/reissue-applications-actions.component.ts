import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CardReissueSelectors } from '@store/cards/reissue/selectors';

@Component({
  selector: 'app-reissue-applications-actions',
  templateUrl: './reissue-applications-actions.component.html',
  styleUrls: ['./reissue-applications-actions.component.scss'],
})
export class ReissueApplicationsActionsComponent implements OnInit {
  constructor(private store: Store) {}
  tab$ = this.store.select(CardReissueSelectors.tab);
  ngOnInit(): void {}
}
