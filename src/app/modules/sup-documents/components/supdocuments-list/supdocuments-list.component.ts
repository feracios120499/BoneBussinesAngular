import { Component, OnInit } from '@angular/core';
import { SupDocument } from '@models/sup-documents/sup-document.model';
import { select, Store } from '@ngrx/store';
import { AppState } from '@store/app/store';
import { SupDocumentsActions } from '@store/sup-documents/actions';
import { SupDocumentsSelectors } from '@store/sup-documents/selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-supdocuments-list',
  templateUrl: './supdocuments-list.component.html',
  styleUrls: ['./supdocuments-list.component.scss']
})
export class SupdocumentsListComponent implements OnInit {
  supdocuments$: Observable<SupDocument[]> = this.store.pipe(select(SupDocumentsSelectors.documents));

  constructor(private store: Store<AppState>) {

   }

  ngOnInit(): void {
    this.store.dispatch(SupDocumentsActions.loadDocuments());
  }
}
