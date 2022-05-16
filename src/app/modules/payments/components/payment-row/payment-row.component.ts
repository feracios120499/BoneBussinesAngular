import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Transaction, UiTransaction } from '@modules/accounts/models/transaction.model';
import { PaymentRow } from '@modules/payments/models/payment-row.model';
import { UiPaymentsListItem } from '@modules/payments/models/payments-list-item.model';

@Component({
  selector: 'app-payment-row',
  templateUrl: './payment-row.component.html',
  styleUrls: ['./payment-row.component.scss'],
})
export class PaymentRowComponent implements OnInit, OnChanges {
  constructor() {}

  @Input() transaction?: UiTransaction;
  @Input() payment?: UiPaymentsListItem;
  @Input() selected = false;
  @Output() onSelect: EventEmitter<void> = new EventEmitter<void>();
  @Output() onShow: EventEmitter<void> = new EventEmitter<void>();

  paymentRow!: PaymentRow;
  ngOnChanges(changes: SimpleChanges): void {
    this.initData();
  }
  ngOnInit(): void {
    this.initData();
  }

  initData(): void {
    if (this.transaction) {
      this.paymentRow = {
        id: this.transaction.id,
        selected: this.transaction.selected,
        number: this.transaction.number,
        recipientName: this.transaction.recipient.name,
        senderName: this.transaction.sender.name,
        createDate: this.transaction.createdDate,
        amount: this.transaction.amount,
        purpose: this.transaction.purpose,
        currencyCode: this.transaction.sender.accCurrencyCode,
      };
    } else if (this.payment) {
      this.paymentRow = {
        id: this.payment.id,
        selected: this.payment.selected,
        number: this.payment.number,
        recipientName: this.payment.recipient.name,
        senderName: this.payment.sender.name,
        createDate: this.payment.dateCreated,
        amount: this.payment.amount,
        purpose: this.payment.purpose,
        currencyCode: this.payment.sender.accCurrencyCode,
      };
    }
  }

  selectPayment(): void {
    if (this.onSelect) {
      this.onSelect.emit();
    }
  }

  showPayment(): void {
    if (this.onShow) {
      this.onShow.emit();
    }
  }
}
