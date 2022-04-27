import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentResult } from '@models/payments/payment-result.model';
import { PaymentStatus } from '@models/payments/payment-status.model';
import { Store } from '@ngrx/store';
import { PayActions } from '@store/payments/actions';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'payment-result',
  templateUrl: './payment-result.component.html',
  styleUrls: ['./payment-result.component.scss']
})
export class PaymentResultComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input('status') status$!: Observable<PaymentStatus>;
  @Input('isLoading') isLoading$!: Observable<boolean>;

  result$?: Observable<PaymentResult>;

  constructor(private store: Store, private router: Router) {

  }

  ngOnInit(): void {
    this.result$ = combineLatest([this.status$, this.isLoading$]).pipe(map(([status, isLoading]) => {
      const result: PaymentResult = {
        title: '',
        statusName: '',
        image: '',
        class: ''
      };

      switch (status.status) {
        case 'NEW':
          result.class = 'info';
          result.statusName = 'statuses.history.new';
          result.image = '../../../../../../assets/img/status/new.svg';
          result.title = 'components.pay.paymentSavedSuccess';
          result.action = 'sendOnSign';
          break;
        case 'ONSIGN':
          result.class = 'primary-300';
          result.statusName = 'statuses.history.onSign';
          result.image = '../../../../../../assets/img/status/on_sign.svg';
          result.title = 'components.pay.paymentOnSignSuccess';
          break;
        case 'ONMYSIGN':
          result.class = 'primary-300';
          result.statusName = 'statuses.history.onSign';
          result.image = '../../../../../../assets/img/status/on_sign.svg';
          result.title = 'components.pay.paymentOnSign';
          result.action = 'sign';
          if (isLoading) {
            result.image = '../../../../../../assets/img/status/signing.svg';
            result.title = 'components.pay.paymentSigning';
          }
          break;
        case 'SIGNED':
          result.class = 'primary-100';
          result.statusName = 'statuses.history.signed';
          result.image = '../../../../../../assets/img/status/signed.svg';
          result.title = 'components.pay.paymentSignedSuccess';
          result.action = 'sendToBank';
          if (isLoading) {
            result.image = '../../../../../../assets/img/status/bank_send.svg';
            result.title = 'components.pay.paymentSending';
          }
          break;
        case 'BANKRECEIVED':
          result.class = 'secondary-300';
          result.statusName = 'statuses.history.recievedBank';
          result.image = '../../../../../../assets/img/status/bank_received.svg';
          result.title = 'components.pay.paymentSentSuccess';
          break;
        case 'BANKERROR':
          result.class = 'error';
          result.class = 'statuses.history.bankError';
          result.image = '../../../../../../assets/img/status/bank_error.svg';
          result.title = 'components.pay.paymentOnBankError';
          break;
      }

      return result;
    }));
  }

  sign(id: string): void {
    this.store.dispatch(PayActions.signPayment(id));
  }

  onSign(id: string): void {
    this.store.dispatch(PayActions.onSignPayment(id));
  }

  toBank(id: string): void {
    this.store.dispatch(PayActions.toBankPayment(id));
  }

  createNew(): void {
    let currentUrl = 'payments/create/within-country';

    if (this.router.url.includes('my-accounts')) {
      currentUrl = 'payments/create/my-accounts';
    }

    this.router.navigateByUrl('/payments', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }
}
