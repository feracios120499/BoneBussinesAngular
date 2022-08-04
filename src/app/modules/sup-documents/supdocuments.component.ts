import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SupDocumentsActions } from '@store/sup-documents/actions';

@Component({
  selector: 'app-supdocuments',
  templateUrl: './supdocuments.component.html',
  styleUrls: ['./supdocuments.component.scss']
})
export class SupdocumentsComponent implements OnInit {
  constructor(private store:Store) {
   }
  ngOnInit(): void {
    this.store.dispatch(SupDocumentsActions.loadDocuments());
  }
}
