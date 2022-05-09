import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { CorrespondentsSelectors } from '@modules/correspondents/store/selectors';
import { Correspondent } from '@modules/correspondents/models/correspondent.model';
import { CorrespondentsActions } from '@modules/correspondents/store/actions';

@Component({
  selector: 'app-correspondents-list',
  templateUrl: './correspondents-list.component.html',
  styleUrls: ['./correspondents-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CorrespondentsListComponent {
  isLoading$: Observable<boolean> = this.store.select(CorrespondentsSelectors.isInitialLoadingCorrespondents);
  correspondents$: Observable<Correspondent[]> = this.store.select(CorrespondentsSelectors.correspondentList);
  filterTerm$: Observable<string> = this.store.select(CorrespondentsSelectors.filterTerm);

  constructor(private store: Store, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.store.dispatch(CorrespondentsActions.resetCorrespondentFilter());
  }

  onCorrespondentEdit(correspondent: Correspondent): void {
    this.store.dispatch(CorrespondentsActions.showCorrespondentModal({ editingCorrespondent: correspondent }));
  }

  onCorrespondentAdd(): void {
    this.store.dispatch(CorrespondentsActions.showCorrespondentModal());
  }
}
