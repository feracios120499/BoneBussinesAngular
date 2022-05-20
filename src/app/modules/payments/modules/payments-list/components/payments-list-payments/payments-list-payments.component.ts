import { Component, OnInit } from '@angular/core';
import { UiPaymentsListItem } from '@modules/payments/models/payments-list-item.model';
import { Store } from '@ngrx/store';
import { ResizeService } from '@services/resize.service';
import { PayListActions } from '../../store/actions';
import { PayListSelectors } from '../../store/selectors';

@Component({
  selector: 'app-payments-list-payments',
  templateUrl: './payments-list-payments.component.html',
  styleUrls: ['./payments-list-payments.component.scss'],
})
export class PaymentsListPaymentsComponent implements OnInit {
  constructor(private store: Store, private resizeService: ResizeService) {}

  payments$ = this.store.select(PayListSelectors.filteredPayments);
  isLoadingList$ = this.store.select(PayListSelectors.isLoadingList);
  rangeString$ = this.store.select(PayListSelectors.rangeString);
  isMobile$ = this.resizeService.isMobile$;

  ngOnInit(): void {}

  selectPayment(payment: UiPaymentsListItem): void {
    this.store.dispatch(PayListActions.selectPayment({ payment }));
  }

  showPayment(payment: UiPaymentsListItem, payments: UiPaymentsListItem[]): void {}

  printPayment(payment: UiPaymentsListItem): void {}

  showHistory(payment: UiPaymentsListItem): void {}

  showSignes(payment: UiPaymentsListItem): void {}

  removePayment(payment: UiPaymentsListItem): void {}

  dublicatePayment(payment: UiPaymentsListItem): void {}

  editPayment(payment: UiPaymentsListItem): void {}

  stornoPayment(payment: UiPaymentsListItem): void {}

  trackId(index: number, payment: UiPaymentsListItem): string | undefined {
    return payment ? `${payment.id}` : undefined;
  }
}
