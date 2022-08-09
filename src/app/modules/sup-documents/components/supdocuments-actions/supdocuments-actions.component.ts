import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SupDocument } from '@models/sup-documents/sup-document.model';
import { Store } from '@ngrx/store';
import { SupDocumentsActions } from '@store/sup-documents/actions';
import { SupDocumentsSelectors } from '@store/sup-documents/selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-supdocuments-actions',
  templateUrl: './supdocuments-actions.component.html',
  styleUrls: ['./supdocuments-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SupdocumentsActionsComponent implements OnInit {
  isLoading$: Observable<boolean> = this.store.select(SupDocumentsSelectors.isLoading);
  supdocuments$: Observable<SupDocument[]> = this.store.select(SupDocumentsSelectors.documents);
  filterTerm$: Observable<string> = this.store.select(SupDocumentsSelectors.filterTerm);

  constructor(private store: Store) { }

  onSupdocumentAdd(): void {
    this.store.dispatch(SupDocumentsActions.showSupdocumentModal());
  }

  onSupdocumentDelete(): void {
    console.log('document delete');
  }
  onSupdocumentSend(): void {
    console.log('document sent');
  }

  onSupdocumentsFilter(term: string): void {
    this.store.dispatch(SupDocumentsActions.filterSupdocuments({ term }));
  }
  ngOnInit(): void {
  }
}
