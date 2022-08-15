import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SupDocumentsActions } from '@store/sup-documents/actions';
import { SupDocumentsSelectors } from '@store/sup-documents/selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-supdocuments',
  templateUrl: './supdocuments.component.html',
  styleUrls: ['./supdocuments.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SupdocumentsComponent implements OnInit {
  isLoading$: Observable<boolean> = this.store.select(SupDocumentsSelectors.isLoading);
  isLoadingDownload$: Observable<boolean> = this.store.select(SupDocumentsSelectors.isLoadingDownload);
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(SupDocumentsActions.loadDocuments());
  }
}
