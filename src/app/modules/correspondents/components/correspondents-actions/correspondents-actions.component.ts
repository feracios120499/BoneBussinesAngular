import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';

import { CorrespondentsSelectors } from '@store/correspondents/selectors';
import { CorrespondentsActions } from '@store/correspondents/actions';
import { CorrespondentModalComponent } from '../correspondent-modal/correspondent-modal.component';

@Component({
  selector: 'app-correspondents-actions',
  templateUrl: './correspondents-actions.component.html',
  styleUrls: ['./correspondents-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CorrespondentsActionsComponent {
  isLoading$: Observable<boolean> = this.store.select(
    CorrespondentsSelectors.isLoadingCorrespondents
  );
  filterTerm$: Observable<string> = this.store.select(
    CorrespondentsSelectors.filterTerm
  );

  constructor(private store: Store, private modalService: NgbModal) {}

  onCorrespondentAdd(): void {
    this.modalService.open(CorrespondentModalComponent);
  }

  onCorrespondentsFilter(term: string): void {
    this.store.dispatch(CorrespondentsActions.filterCorrespondents({ term }));
  }
}
