import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';

import { BaseB1ModalComponent } from '../base-b1-modal.component';
import { ResizeService } from '@services/resize.service';
import { CorrespondentsModalConfig } from '@models/modals/correspondents-modal-config.model';
import { CorrespondentsModalResult } from '@models/modals/correspondents-modal-result.model';
import { CorrespondentsSelectors } from '@modules/correspondents/store/selectors';
import { Correspondent } from '@modules/correspondents/models/correspondent.model';

@Component({
  selector: 'b1-correspondents-modal',
  templateUrl: './b1-correspondents-modal.component.html',
  styleUrls: ['./b1-correspondents-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class B1CorrespondentsModalComponent extends BaseB1ModalComponent<CorrespondentsModalResult> {
  @Input() config!: CorrespondentsModalConfig;

  correspondents$: Observable<Correspondent[]> = this.store.select(CorrespondentsSelectors.correspondentList);
  isInitialLoading$: Observable<boolean> = this.store.select(CorrespondentsSelectors.isInitialLoadingCorrespondents);
  isLoading$: Observable<boolean> = this.store.select(CorrespondentsSelectors.isLoadingCorrespondents);
  isMobile$ = this.resizeService.isMobile$;
  result!: CorrespondentsModalResult;
  filterTerm = '';

  constructor(public modal: NgbActiveModal, private store: Store, private resizeService: ResizeService) {
    super();
  }

  onCorrespondentSelect(correspondent: Correspondent): void {
    const { name, accNumber, taxCode } = correspondent;
    this.result = { name, accNumber, taxCode };
    this.ok();
    this.modal.close();
  }
}
