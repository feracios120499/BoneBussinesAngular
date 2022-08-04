import { Component, OnInit } from '@angular/core';
import { SupDocument } from '@models/sup-documents/sup-document.model';
import { Store } from '@ngrx/store';
import { SupDocumentsSelectors } from '@store/sup-documents/selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-supdocuments-actions',
  templateUrl: './supdocuments-actions.component.html',
  styleUrls: ['./supdocuments-actions.component.scss']
})
export class SupdocumentsActionsComponent implements OnInit {
  supdocuments$: Observable<SupDocument[]> = this.store.select(SupDocumentsSelectors.documents)
  constructor(private store: Store) { }

  onSupdocumentAdd(): void {
    console.log('module add window');
  }

  onSupdocumentDelete(): void {
    console.log('document delete');
  }
  onSupdocumentSend(): void {
    console.log('document sent');
  }
  ngOnInit(): void {
  }
}
