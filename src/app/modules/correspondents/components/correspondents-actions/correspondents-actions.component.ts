import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-correspondents-actions',
  templateUrl: './correspondents-actions.component.html',
  styleUrls: ['./correspondents-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CorrespondentsActionsComponent {
  // FOR DEMO PURPOSE ONLY:
  isLoading$: Observable<boolean> = of(false);
  filterTerm$: Observable<string> = of('');

  constructor(private store: Store, private modalService: NgbModal) {}

  onCorrespondentAdd(): void {
    // this.modalService.open(CorrespondentCreateModalComponent);
  }

  onCorrespondentsFilter(term: string): void {
    // this.store.dispatch(CorrespondentsActions.filterCorrespondents({ term }));
  }
}
