import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UiSupDocumentListItem } from '@models/sup-documents/sup-document.model';
import { Store } from '@ngrx/store';
import { AppState } from '@store/app/store';
import { SupDocumentsActions } from '@store/sup-documents/actions';
import { SupDocumentsSelectors } from '@store/sup-documents/selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-supdocuments-list',
  templateUrl: './supdocuments-list.component.html',
  styleUrls: ['./supdocuments-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SupdocumentsListComponent implements OnInit {
  isLoading$: Observable<boolean> = this.store.select(SupDocumentsSelectors.isInitialLoadingSupdocuments);
  isLoadingDownload$: Observable<boolean> = this.store.select(SupDocumentsSelectors.isLoadingDownload);
  supdocuments$: Observable<UiSupDocumentListItem[]> = this.store.select(SupDocumentsSelectors.documents);
  filterTerm$: Observable<string> = this.store.select(SupDocumentsSelectors.filterTerm);

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(SupDocumentsActions.resetSupdocumentFilter());
  }
  onSupdocumentAdd(): void {
    this.store.dispatch(SupDocumentsActions.showSupdocumentModal());
  }
  trackId(index: number, supdocument: UiSupDocumentListItem): string | undefined {
    return supdocument ? `${supdocument.id}` : undefined;
  }

  onSupdocumentSelect(supdocument: UiSupDocumentListItem): void {
    this.store.dispatch(SupDocumentsActions.selectSupdocument({ supdocument }));
  }

  onSupdocumentDetails(supdocument: UiSupDocumentListItem): void {
    console.log('dbl');
  }
}
