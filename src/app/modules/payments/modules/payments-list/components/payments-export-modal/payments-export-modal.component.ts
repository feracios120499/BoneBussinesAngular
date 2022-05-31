import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { PayListSelectors } from '../../store/selectors';

@Component({
  selector: 'app-payments-export-modal',
  templateUrl: './payments-export-modal.component.html',
  styleUrls: ['./payments-export-modal.component.scss'],
})
export class PaymentsExportModalComponent implements OnInit {
  constructor(public modal: NgbActiveModal, private store: Store) {}

  @Input() downloadCallback!: (format: string) => void;
  isLoading$ = this.store.select(PayListSelectors.isLoading);
  ngOnInit(): void {}

  download(format: string, isLoading: boolean): void {
    if (this.downloadCallback && !isLoading) {
      this.downloadCallback(format);
    }
  }
}
