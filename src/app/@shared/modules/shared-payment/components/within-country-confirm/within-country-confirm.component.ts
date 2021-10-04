import { Component, OnInit } from '@angular/core';
import { PaymentForm } from '@models/payment-form.model';
import { Store } from '@ngrx/store';
import { WithinCountryActions } from '@store/payments/within-country-payment/actions';
import { WithinCountryPaymentSelectors } from '@store/payments/within-country-payment/selectors';
import { required } from '@store/shared';

@Component({
  selector: 'within-country-confirm',
  templateUrl: './within-country-confirm.component.html',
  styleUrls: ['./within-country-confirm.component.scss']
})
export class WithinCountryConfirmComponent implements OnInit {

  constructor(private store: Store) { }


  payment$ = this.store.select(WithinCountryPaymentSelectors.payment).pipe(required);
  ngOnInit(): void {
  }

  toForm(): void {
    this.store.dispatch(WithinCountryActions.setProgress({ progress: 'form' }));
  }

  save(payment: PaymentForm): void {
    this.store.dispatch(WithinCountryActions.createRequest({
      ...payment,
      saveAsTemplate: false,
      status: 'NEW'
    }));
  }

}
