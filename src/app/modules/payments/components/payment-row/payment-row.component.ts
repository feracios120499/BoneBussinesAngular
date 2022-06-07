import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Transaction, UiTransaction } from '@modules/accounts/models/transaction.model';
import { ImportResponsRow } from '@modules/payments/models/import-response.model';
import { PaymentDetails } from '@modules/payments/models/payment-details.model';
import { PaymentRow } from '@modules/payments/models/payment-row.model';
import { UiPaymentsListItem } from '@modules/payments/models/payments-list-item.model';
import { SwiftDetails } from '@modules/payments/models/swift-details.model';

@Component({
  selector: 'app-payment-row',
  templateUrl: './payment-row.component.html',
  styleUrls: ['./payment-row.component.scss'],
})
export class PaymentRowComponent implements OnInit, OnChanges {
  constructor() {}

  @Input() transaction?: UiTransaction;
  @Input() payment?: UiPaymentsListItem;
  @Input() import?: PaymentDetails | SwiftDetails;
  @Input() selected = false;
  @Input() selectable = true;
  @Output() onSelect: EventEmitter<void> = new EventEmitter<void>();
  @Output() onShow: EventEmitter<void> = new EventEmitter<void>();

  paymentRow!: PaymentRow;
  icon?: string;

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
      if (this.payment.typeId.startsWith('INNER')) {
        this.icon = 'cards';
      } else if (this.payment.typeId.startsWith('SWIFT')) {
        this.icon = 'swift';
      } else {
        this.icon = 'country';
      }
    } else if (this.import && !('benificiary' in this.import)) {
      const paymentDetails = this.import as PaymentDetails;
      this.paymentRow = {
        id: paymentDetails.id,
        selected: false,
        number: paymentDetails.number,
        recipientName: paymentDetails.recipient.name,
        senderName: paymentDetails.sender.name,
        createDate: new Date(),
        amount: paymentDetails.amount,
        purpose: paymentDetails.purpose,
        currencyCode: paymentDetails.sender.accCurrencyCode,
      };

      if (paymentDetails.recipient.accId) {
        this.icon = 'cards';
      } else {
        this.icon = 'country';
      }
    } else if (this.import && 'benificiary' in this.import) {
      const swift = this.import as SwiftDetails;

      this.paymentRow = {
        id: swift.id,
        selected: false,
        number: swift.number,
        recipientName: swift.benificiary.name,
        senderName: swift.senderAccount.name,
        createDate: new Date(),
        amount: swift.amount,
        purpose: swift.purpose,
        currencyCode: swift.senderAccount.accCurrencyCode,
      };

      this.icon = 'swift';
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
