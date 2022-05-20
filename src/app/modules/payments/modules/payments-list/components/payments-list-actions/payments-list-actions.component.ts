import { Component, OnInit } from '@angular/core';
import { DateRange } from '@models/date-range.model';
import { PaymentsListItem, UiPaymentsListItem } from '@modules/payments/models/payments-list-item.model';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { NotifyActions } from '@store/notify/actions';
import { SharedActions } from '@store/shared/actions';
import dayjs from 'dayjs';
import { PayListActions } from '../../store/actions';
import { PayListSelectors } from '../../store/selectors';

@Component({
  selector: 'app-payments-list-actions',
  templateUrl: './payments-list-actions.component.html',
  styleUrls: ['./payments-list-actions.component.scss'],
})
export class PaymentsListActionsComponent implements OnInit {
  constructor(private store: Store, private translateService: TranslateService) {}

  range$ = this.store.select(PayListSelectors.range);
  filter$ = this.store.select(PayListSelectors.filter);
  isLoading$ = this.store.select(PayListSelectors.isLoading);
  selectedAll$ = this.store.select(PayListSelectors.selectedAll);
  filteredPayments$ = this.store.select(PayListSelectors.filteredPayments);
  currentTab$ = this.store.select(PayListSelectors.currentTab);

  ranges: any = {
    'shared.picker.today': [dayjs(), dayjs()],
    'shared.picker.currentMonth': [dayjs().startOf('month'), dayjs()],
    'shared.picker.month1': [dayjs().subtract(1, 'month'), dayjs()],
    'shared.picker.month2': [dayjs().subtract(2, 'month'), dayjs()],
    'shared.picker.month3': [dayjs().subtract(3, 'month'), dayjs()],
  };

  ngOnInit(): void {}

  selectAll(payments: PaymentsListItem[]): void {
    this.store.dispatch(PayListActions.selectAll({ payments }));
  }

  onFilter(filter: string): void {
    this.store.dispatch(PayListActions.filter({ filter }));
  }

  setRange(range: DateRange): void {
    this.store.dispatch(PayListActions.setRange({ range }));
  }

  printPayments(payments: UiPaymentsListItem[]): void {
    const selected = payments.filter((p) => p.selected).map((p) => p.id);

    if (selected.length === 0) {
      this.store.dispatch(
        NotifyActions.warningNotification({
          message: this.translateService.instant('shared.selectDocumentsBeforePrint'),
        })
      );
    } else {
      this.store.dispatch(PayListActions.printPaymentsRequest(selected));
    }
  }

  deletePayments(payments: UiPaymentsListItem[]): void {
    const selected = payments.filter((p) => p.selected).map((p) => p.id);

    if (selected.length === 0) {
      this.store.dispatch(
        NotifyActions.warningNotification({
          message: this.translateService.instant('shared.selectDocumentsBeforeRemove'),
        })
      );
    } else {
      this.store.dispatch(
        SharedActions.showConfirm({
          config: {
            text: this.translateService
              .instant('components.pay.areYouSureToDeletePayments')
              .replace('{0}', selected.length),
            callback: () => this.store.dispatch(PayListActions.deletePaymentsRequest(selected)),
          },
        })
      );
    }
  }

  exportPayments(payments: UiPaymentsListItem[]): void {}

  importPayments(): void {}

  onSignPayments(payments: UiPaymentsListItem[]): void {
    const selected = payments.filter((p) => p.selected).map((p) => p.id);

    if (selected.length === 0) {
      this.store.dispatch(
        NotifyActions.warningNotification({
          message: this.translateService.instant('shared.selectDocumentsBeforeSendOnSign'),
        })
      );
    } else {
      this.store.dispatch(
        SharedActions.showConfirm({
          config: {
            text: this.translateService
              .instant('components.pay.areYouSureToOnSignPayments')
              .replace('{0}', selected.length),
            callback: () => this.store.dispatch(PayListActions.sendOnSignPaymentsRequest(selected)),
          },
        })
      );
    }
  }
  signPayments(payments: UiPaymentsListItem[]): void {}

  sendToBankPayments(payments: UiPaymentsListItem[]): void {}
}
