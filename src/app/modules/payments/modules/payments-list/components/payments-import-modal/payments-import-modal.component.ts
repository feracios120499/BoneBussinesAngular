import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PayListActions } from '../../store/actions';
import { PayListSelectors } from '../../store/selectors';

@Component({
  selector: 'app-payments-import-modal',
  templateUrl: './payments-import-modal.component.html',
  styleUrls: ['./payments-import-modal.component.scss'],
})
export class PaymentsImportModalComponent implements OnInit {
  constructor() {}

  files: File[] = [];
  importType: 'common' | 'swift' = 'common';
  @Input() onImport!: (files: File[], type: 'common' | 'swift') => void;
  @Input() isLoading$!: Observable<boolean>;
  ngOnInit(): void {}

  downloadTemplate(format: string, isLoading: boolean): void {}

  import(): void {
    this.onImport(this.files, this.importType);
  }
}
