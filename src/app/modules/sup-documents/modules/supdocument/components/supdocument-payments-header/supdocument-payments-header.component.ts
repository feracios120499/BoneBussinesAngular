import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SupDocumentDetailsSelectors } from '../../store/selectors';

@Component({
  selector: 'app-supdocument-payments-header',
  templateUrl: './supdocument-payments-header.component.html',
  styleUrls: ['./supdocument-payments-header.component.scss'],
})
export class SupdocumentPaymentsHeaderComponent implements OnInit {
  constructor(private store: Store) {}

  isLoading$ = this.store.select(SupDocumentDetailsSelectors.isLoadingDetailsPage);

  ngOnInit(): void {}
}
