import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { CorrespondentsSelectors } from '@store/correspondents/selectors';
import { CorrespondentsActions } from '@store/correspondents/actions';
import { CorrespondentModalComponent } from '@modules/correspondents/components/correspondent-modal/correspondent-modal.component';
import { Correspondent } from '@models/correspondents/correspondent.model';

@Component({
  selector: 'app-correspondents',
  templateUrl: './correspondents.component.html',
  styleUrls: ['./correspondents.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CorrespondentsComponent implements OnInit {
  correspondents$: Observable<Correspondent[]> = this.store.select(
    CorrespondentsSelectors.correspondentList
  );
  isLoading$: Observable<boolean> = this.store.select(
    CorrespondentsSelectors.isLoadingCorrespondents
  );

  constructor(private store: Store, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.store.dispatch(CorrespondentsActions.loadCorrespondentsRequest());
  }

  onCorrespondentAdd(): void {
    this.modalService.open(CorrespondentModalComponent);
  }
}
