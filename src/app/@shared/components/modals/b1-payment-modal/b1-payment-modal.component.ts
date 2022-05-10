import { Component, Input, OnInit } from '@angular/core';
import { PaymentAction } from '@models/enums/payment-action.enum';
import { PaymentModal } from '@models/payment-modal.model';
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

  payment$ = this.store.select(SharedSelectors.payment);
  isLoading$ = this.store
    .select(SharedSelectors.loader)
    .pipe(switchMap((selector) => (selector ? this.store.select(selector) : of(false))));

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

  ngOnInit(): void {}

  print(payment: Partial<PaymentModal>): void {
    if (payment.actions) {
      payment.actions[PaymentAction.print](this.activeModal);
    }
  }

  next(payment: Partial<PaymentModal>): void {
    if (payment.next) {
      payment.next();
    }
  }

  previous(payment: Partial<PaymentModal>): void {
    if (payment.previous) {
      payment.previous();
    }
  }
}
