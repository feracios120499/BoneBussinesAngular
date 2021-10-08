import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { PaymentForm } from '@models/payment-form.model';
import { PaymentCommon } from '@models/payments/payment-common.model';
import { PaymentStatus } from '@models/payments/payment-status.model';
import { Store } from '@ngrx/store';
import { State } from '@store';
import { WithinCountryActions } from '@store/payments/within-country-payment/actions';
import { WithinCountryPaymentSelectors } from '@store/payments/within-country-payment/selectors';
import { required } from '@store/shared';
import { SharedActions } from '@store/shared/actions';
import { SharedSelectors } from '@store/shared/selectors';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import {
  WithinCountryFormComponent,
} from 'src/app/@shared/modules/shared-payment/components/within-country-form/within-country-form.component';

@Component({
  selector: 'app-create-within-country',
  templateUrl: './create-within-country.component.html',
  styleUrls: ['./create-within-country.component.scss']
})
export class CreateWithinCountryComponent implements OnInit, OnDestroy {
  @ViewChild('form') form!: WithinCountryFormComponent;

  private paymentSubscription: Subscription;
  constructor(private store: Store<State>) {
    this.paymentSubscription = this.store.select(SharedSelectors.createPayment).pipe(filter(p => !!p)).subscribe((payment) => {
      this.paymentForm = payment;
      this.store.dispatch(SharedActions.clearCreatePayment());
    });
  }

  senderAccounts$ = this.store.select(WithinCountryPaymentSelectors.senderAccounts);
  progress$ = this.store.select(WithinCountryPaymentSelectors.progress);
  status$ = this.store.select(WithinCountryPaymentSelectors.createdPayment).pipe(required, map(payment => this.mapToStatus(payment)));

  paymentForm?: PaymentForm;

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.paymentSubscription?.unsubscribe();
  }

  toConfirm(): void {
    if (this.form.submitForm()) {
      this.store.dispatch(WithinCountryActions.setProgress({ progress: 'confirm' }));
      this.store.dispatch(WithinCountryActions.setPayment({ payment: this.paymentForm as PaymentForm }));
    }
  }

  private mapToStatus(payment: PaymentCommon): PaymentStatus {
    const status: PaymentStatus = {
      id: payment.id,
      status: payment.status,
      number: payment.number as string
    };
    return status;
  }
}
