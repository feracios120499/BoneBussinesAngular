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
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SupdocumentsListComponent implements OnInit {
  isLoading$: Observable<boolean> = this.store.select(SupDocumentsSelectors.isInitialLoadingSupdocuments);
  supdocuments$: Observable<UiSupDocumentListItem[]> = this.store.select(SupDocumentsSelectors.filteredSupdocuments);
  filterTerm$: Observable<string> = this.store.select(SupDocumentsSelectors.filterTerm);

  isSingleClick: Boolean = true;

  constructor(private store: Store<AppState>) {
    this.store.dispatch(SupDocumentsActions.resetSupdocumentFilter());
   }

  ngOnInit(): void {
    this.store.dispatch(SupDocumentsActions.loadDocuments());
  }
  onSupdocumentAdd(): void {
    this.store.dispatch(SupDocumentsActions.showSupdocumentModal());
  }
  trackId(index: number, supdocument: UiSupDocumentListItem): string | undefined {
    return supdocument ? `${supdocument.id}` : undefined;
  }


  onSupdocumentSelect(supdocument: UiSupDocumentListItem): void {
    this.isSingleClick = true;
        setTimeout(()=>{
            if (this.isSingleClick) {
              this.store.dispatch(SupDocumentsActions.selectSupdocument({ supdocument }));
            }
         }, 250);
 }

  onSupdocumentDetails(supdocument: UiSupDocumentListItem): void {
      this.isSingleClick = false;
      console.log('dbl');}
}
