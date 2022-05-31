import { Component, OnInit } from '@angular/core';
import { ImportResponsRow } from '@modules/payments/models/import-response.model';
import { Store } from '@ngrx/store';
import { ResizeService } from '@services/resize.service';
import { PayImportCommonActions } from '../../store/actions';
import { PayImportCommonSelectors } from '../../store/selectors';

@Component({
  selector: 'app-import-common-list',
  templateUrl: './import-common-list.component.html',
  styleUrls: ['./import-common-list.component.scss'],
})
export class ImportCommonListComponent implements OnInit {
  constructor(private store: Store, private resizeService: ResizeService) {}

  payments$ = this.store.select(PayImportCommonSelectors.payments);
  isLoading$ = this.store.select(PayImportCommonSelectors.isLoading);
  isMobile$ = this.resizeService.isMobile$;

  ngOnInit(): void {}

  showPayment(payment: ImportResponsRow, payments: ImportResponsRow[]): void {
    this.store.dispatch(PayImportCommonActions.showPayment({ payment, payments }));
  }

  trackId(index: number, payment: ImportResponsRow): string | undefined {
    return payment ? `${payment.model.id}` : undefined;
  }
}
