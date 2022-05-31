import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PayListActions } from '../../store/actions';
import { PayListSelectors } from '../../store/selectors';

@Component({
  selector: 'app-payments-import-modal',
  templateUrl: './payments-import-modal.component.html',
  styleUrls: ['./payments-import-modal.component.scss'],
})
export class PaymentsImportModalComponent implements OnInit {
  constructor(private store: Store) {}

  isLoading$ = this.store.select(PayListSelectors.isLoading);
  files: File[] = [];
  importType: 'common' | 'swift' = 'common';
  ngOnInit(): void {}

  downloadTemplate(format: string, isLoading: boolean): void {}

  import(): void {
    this.store.dispatch(PayListActions.importPaymentsRequest({ files: this.files, type: this.importType }));
  }
}
