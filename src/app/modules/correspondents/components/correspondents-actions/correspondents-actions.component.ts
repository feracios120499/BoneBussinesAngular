import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { CorrespondentModalComponent } from '../correspondent-modal/correspondent-modal.component';
import { Correspondent } from '@modules/correspondents/models/correspondent.model';
import { CorrespondentsSelectors } from '@modules/correspondents/store/selectors';
import { CorrespondentsActions } from '@modules/correspondents/store/actions';

@Component({
  selector: 'app-correspondents-actions',
  templateUrl: './correspondents-actions.component.html',
  styleUrls: ['./correspondents-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CorrespondentsActionsComponent {
  correspondents$: Observable<Correspondent[]> = this.store.select(CorrespondentsSelectors.correspondentList);
  isLoading$: Observable<boolean> = this.store.select(CorrespondentsSelectors.isLoadingCorrespondents);
  filterTerm$: Observable<string> = this.store.select(CorrespondentsSelectors.filterTerm);

  constructor(private store: Store) {}

  onCorrespondentAdd(): void {
    this.store.dispatch(CorrespondentsActions.showCorrespondentModal());
  }

  onCorrespondentsFilter(term: string): void {
    this.store.dispatch(CorrespondentsActions.filterCorrespondents({ term }));
  }
}
