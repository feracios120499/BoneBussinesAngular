import { Component, OnInit } from '@angular/core';
import { UiPaymentsListItem } from '@modules/payments/models/payments-list-item.model';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { ResizeService } from '@services/resize.service';
import { SharedActions } from '@store/shared/actions';
import { PayListActions } from '../../store/actions';
import { PayListSelectors } from '../../store/selectors';

@Component({
  selector: 'app-payments-list-payments',
  templateUrl: './payments-list-payments.component.html',
  styleUrls: ['./payments-list-payments.component.scss'],
})
export class PaymentsListPaymentsComponent implements OnInit {
  constructor(private store: Store, private resizeService: ResizeService, private translateService: TranslateService) {}

  payments$ = this.store.select(PayListSelectors.filteredPayments);
  isLoadingList$ = this.store.select(PayListSelectors.isLoadingList);
  rangeString$ = this.store.select(PayListSelectors.rangeString);
  isMobile$ = this.resizeService.isMobile$;

  ngOnInit(): void {}

  selectPayment(payment: UiPaymentsListItem): void {
    this.store.dispatch(PayListActions.selectPayment({ payment }));
  }

  showPayment(payment: UiPaymentsListItem, payments: UiPaymentsListItem[]): void {}

  printPayment(payment: UiPaymentsListItem): void {
    this.store.dispatch(PayListActions.printPaymentsRequest([payment.id]));
  }

  showHistory(payment: UiPaymentsListItem): void {
    this.store.dispatch(PayListActions.showHistoryRequest(payment));
  }

  showSignes(payment: UiPaymentsListItem): void {}

  removePayment(payment: UiPaymentsListItem): void {
    this.store.dispatch(
      SharedActions.showConfirm({
        config: {
          text: this.translateService.instant('components.pay.areYouSureToDeletePayments').replace('{0}', 1),
          callback: () => this.store.dispatch(PayListActions.deletePaymentsRequest([payment.id])),
        },
      })
    );
  }

  dublicatePayment(payment: UiPaymentsListItem): void {}

  editPayment(payment: UiPaymentsListItem): void {}

  stornoPayment(payment: UiPaymentsListItem): void {}

  trackId(index: number, payment: UiPaymentsListItem): string | undefined {
    return payment ? `${payment.id}` : undefined;
  }
}
