import { Component, OnDestroy, OnInit } from '@angular/core';
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
export class PaymentsListActionsComponent implements OnInit, OnDestroy {
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

  ngOnDestroy(): void {
    console.log('destroy2');
  }

  selectAll(payments: PaymentsListItem[]): void {
    this.store.dispatch(PayListActions.selectAll({ payments }));
  }

  onFilter(filter: string): void {
    this.store.dispatch(PayListActions.filter({ filter }));
  }

  setRange(range: DateRange): void {
    console.log('set range');
    this.store.dispatch(PayListActions.setRange({ range }));
  }

  printPayments(payments: UiPaymentsListItem[]): void {
    this.executer(payments, 'shared.selectDocumentsBeforePrint', (selected) =>
      this.store.dispatch(PayListActions.printPaymentsRequest(selected))
    );
  }

  deletePayments(payments: UiPaymentsListItem[]): void {
    this.executer(
      payments,
      'shared.selectDocumentsBeforeRemove',
      (selected) => this.store.dispatch(PayListActions.deletePaymentsRequest(selected)),
      'components.pay.areYouSureToDeletePayments'
    );
  }

  exportPayments(payments: UiPaymentsListItem[]): void {}

  importPayments(): void {}

  onSignPayments(payments: UiPaymentsListItem[]): void {
    this.executer(
      payments,
      'shared.selectDocumentsBeforeSendOnSign',
      (selected) => this.store.dispatch(PayListActions.sendOnSignPaymentsRequest(selected)),
      'components.pay.areYouSureToOnSignPayments'
    );
  }

  signPayments(payments: UiPaymentsListItem[]): void {
    this.executer(
      payments,
      'shared.selectDocumentsBeforeSign',
      (selected) => this.store.dispatch(PayListActions.signPaymentsRequest(selected)),
      'components.pay.signTheDocumentsInNumber'
    );
  }

  sendToBankPayments(payments: UiPaymentsListItem[]): void {
    this.executer(
      payments,
      'shared.selectDocumentsBeforeSendToBank',
      (selected) => this.store.dispatch(PayListActions.sendToBankPaymentsRequest(selected)),
      'components.pay.toBankDocsConfirm'
    );
  }

  private executer(
    payments: UiPaymentsListItem[],
    selectNotificationTranslate: string,
    func: (selected: number[]) => void,
    confirmTranslate?: string
  ): void {
    const selected = payments.filter((p) => p.selected).map((p) => p.id);

    if (selected.length === 0) {
      this.store.dispatch(
        NotifyActions.warningNotification({
          message: this.translateService.instant(selectNotificationTranslate),
        })
      );
    } else {
      if (confirmTranslate) {
        this.store.dispatch(
          SharedActions.showConfirm({
            config: {
              text: this.translateService.instant(confirmTranslate).replace('{0}', selected.length),
              callback: () => func(selected),
            },
          })
        );
      } else {
        func(selected);
      }
    }
  }
}
