import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PayImportCommonActions } from '../../store/actions';
import { PayImportCommonSelectors } from '../../store/selectors';

@Component({
  selector: 'app-import-common-actions',
  templateUrl: './import-common-actions.component.html',
  styleUrls: ['./import-common-actions.component.scss'],
})
export class ImportCommonActionsComponent implements OnInit {
  constructor(private store: Store) {}

  isLoading$ = this.store.select(PayImportCommonSelectors.isLoading);
  canSave$ = this.store.select(PayImportCommonSelectors.canSave);
  filter$ = this.store.select(PayImportCommonSelectors.filter);
  ngOnInit(): void {}

  downloadResultFile(): void {
    this.store.dispatch(PayImportCommonActions.saveResultFile());
  }

  importPayments(): void {}

  savePayments(): void {
    this.store.dispatch(PayImportCommonActions.savePayments());
  }

  onFilter(filter: string): void {}
}
