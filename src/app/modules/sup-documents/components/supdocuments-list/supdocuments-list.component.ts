import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SupDocument } from '@models/sup-documents/sup-document.model';
import { select, Store } from '@ngrx/store';
import { AppState } from '@store/app/store';
import { SupDocumentsActions } from '@store/sup-documents/actions';
import { SupDocumentsSelectors } from '@store/sup-documents/selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-supdocuments-list',
  templateUrl: './supdocuments-list.component.html',
  styleUrls: ['./supdocuments-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SupdocumentsListComponent implements OnInit {
  isLoading$: Observable<boolean> = this.store.select(SupDocumentsSelectors.isInitialLoadingSupdocuments);
  supdocuments$: Observable<SupDocument[]> = this.store.pipe(select(SupDocumentsSelectors.documents));
  filterTerm$: Observable<string> = this.store.select(SupDocumentsSelectors.filterTerm);

  constructor(private store: Store<AppState>) {
    this.store.dispatch(SupDocumentsActions.resetSupdocumentFilter());
   }

  ngOnInit(): void {
    this.store.dispatch(SupDocumentsActions.loadDocuments());
  }
  onSupdocumentAdd(): void {
    this.store.dispatch(SupDocumentsActions.showSupdocumentModal());
  }
}
