import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Correspondent } from '@models/correspondents/correspondent.model';
import { CorrespondentsSelectors } from '@store/correspondents/selectors';
import { CorrespondentsActions } from '@store/correspondents/actions';
import { CorrespondentModalComponent } from '../correspondent-modal/correspondent-modal.component';

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
    const modalRef = this.modalService.open(CorrespondentModalComponent);
    modalRef.componentInstance.editingCorrespondent = correspondent;
  }

  onCorrespondentAdd(): void {
    this.modalService.open(CorrespondentModalComponent);
  }
}
