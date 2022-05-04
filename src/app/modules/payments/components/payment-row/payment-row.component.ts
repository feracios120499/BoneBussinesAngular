import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Transaction, UiTransaction } from '@modules/accounts/models/transaction.model';
import { PaymentRow } from '@modules/payments/models/payment-row.model';

@Component({
  selector: 'app-pyament-row',
  templateUrl: './payment-row.component.html',
  styleUrls: ['./payment-row.component.scss'],
})
export class PaymentRowComponent implements OnInit {
  constructor() {}

  @Input() transaction?: UiTransaction;
  @Output() onSelect?: EventEmitter<void>;

  paymentRow!: PaymentRow;
  ngOnInit(): void {
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
    }
  }

  selectPayment(): void {
    if (this.onSelect) {
      this.onSelect.emit();
    }
  }
}
