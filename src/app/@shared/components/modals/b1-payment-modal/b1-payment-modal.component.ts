import { Component, Input, OnInit } from '@angular/core';
import { PaymentAction } from '@models/enums/payment-action.enum';
import { PaymentActionModal, PaymentModal } from '@models/payment-modal.model';
import { SwiftModal } from '@models/swift-modal.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { select, Store } from '@ngrx/store';
import { SharedActions } from '@store/shared/actions';
import { SharedSelectors } from '@store/shared/selectors';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-b1-payment-modal',
  templateUrl: './b1-payment-modal.component.html',
  styleUrls: ['./b1-payment-modal.component.scss'],
})
export class B1PaymentModalComponent implements OnInit {
  constructor(public activeModal: NgbActiveModal, private store: Store) {}

  paymentAction = PaymentAction;
  payment$ = this.store.select(SharedSelectors.payment);
  isLoading$ = this.store
    .select(SharedSelectors.loader)
    .pipe(switchMap((selector) => (selector ? this.store.select(selector) : of(false))));

  isPaginationAvailable = false;
  actions: PaymentActionModal = {};
  payment?: PaymentModal;
  swift?: SwiftModal;
  currentTab: 'sender' | 'recipient' | 'intermediaryBank' = 'sender';

  statusMessages: any = {
    NEW: {
      class: 'b1-color-success',
      message: 'components.pay.payment.status.NEW',
    },
    ONSIGN: {
      class: 'b1-color-info',
      message: 'components.pay.payment.status.ONSIGN',
    },
    ONMYSIGN: {
      class: 'b1-color-info',
      message: 'components.pay.payment.status.ONMYSIGN',
    },
    SIGNED: {
      class: 'b1-color-info',
      message: 'components.pay.payment.status.SIGNED',
    },
    BANKRECEIVED: {
      class: 'b1-color-info',
      message: 'components.pay.payment.status.BANKRECEIVED',
    },
    BANKPAID: {
      class: 'b1-color-success',
      message: 'components.pay.payment.status.BANKPAID',
    },
    BANKERROR: {
      class: 'b1-color-success',
      message: 'components.pay.payment.status.BANKERROR',
    },
  };

  ngOnInit(): void {
    this.payment$.subscribe((payment) => {
      this.currentTab = 'sender';
      if (payment && 'benificiary' in payment) {
        this.swift = payment as SwiftModal;
        this.isPaginationAvailable = this.swift.isPaginationAvailable;
        this.actions = this.swift.actions;
      } else {
        this.payment = payment as PaymentModal;
        this.isPaginationAvailable = this.payment.isPaginationAvailable;
        this.actions = this.payment.actions;
      }
    });
  }

  execute(paymentAction: PaymentAction): void {
    if (this.payment) {
      this.payment.actions[paymentAction](this.activeModal);
    } else {
      this.swift?.actions[paymentAction](this.activeModal);
    }
  }

  next(): void {
    const payment = this.payment || this.swift;

    if (payment && payment.next) {
      payment.next();
    }
  }

  previous(): void {
    const payment = this.payment || this.swift;

    if (payment && payment.previous) {
      payment.previous();
    }
  }
}
