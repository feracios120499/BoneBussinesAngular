import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SupDocumentDetailsActions } from './store/actions';
import { SupDocumentDetailsReducer } from './store/reducer';
import { SUP_DETAILS_KEY } from './store/store';

@Component({
  selector: 'app-supdocument',
  templateUrl: './supdocument.component.html',
  styleUrls: ['./supdocument.component.scss'],
})
export class SupdocumentComponent implements OnInit, OnDestroy {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.addReducer(SUP_DETAILS_KEY, SupDocumentDetailsReducer);
    this.store.dispatch(SupDocumentDetailsActions.initDetails());
    this.store.dispatch(SupDocumentDetailsActions.loadCurrentSupdocument());
  }

  ngOnDestroy(): void {
    this.store.dispatch(SupDocumentDetailsActions.destroyDetails());
    this.store.removeReducer(SUP_DETAILS_KEY as never);
  }
}
