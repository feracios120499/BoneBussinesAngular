import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SupDocumentDetailsActions } from '../../store/actions';
import { SupDocumentDetailsSelectors } from '../../store/selectors';

@Component({
  selector: 'app-supdocument-payments-header',
  templateUrl: './supdocument-payments-header.component.html',
  styleUrls: ['./supdocument-payments-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SupdocumentPaymentsHeaderComponent implements OnInit {
  constructor(private store: Store) {}

  isLoading$ = this.store.select(SupDocumentDetailsSelectors.isLoadingDetailsPage);
  filterTerm$ = this.store.select(SupDocumentDetailsSelectors.filterTerm);
  ngOnInit(): void {}

  onPaymentsFilter(term: string): void {
    this.store.dispatch(SupDocumentDetailsActions.filterPayments({ term }));
  }
}
