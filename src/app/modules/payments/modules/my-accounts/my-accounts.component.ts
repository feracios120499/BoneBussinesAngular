import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { PaymentForm } from '@models/payment-form.model';
import { PaymentCommon } from '@models/payments/payment-common.model';
import { PaymentStatus } from '@models/payments/payment-status.model';
import { PaymentSupDoc } from '@models/payments/payment-sup-doc.model';
import { Store } from '@ngrx/store';
import { AppActions } from '@store/app/actions';
import { PayFormsActions } from '@store/payments/forms/actions';
import { PayFormsSelectors } from '@store/payments/forms/selectors';
import { required } from '@store/shared';
import { SharedActions } from '@store/shared/actions';
import { SharedSelectors } from '@store/shared/selectors';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { MyAccountsFormComponent } from '@payment-forms/my-accounts-form/my-accounts-form.component';

@Component({
  selector: 'pay-my-accounts',
  templateUrl: './my-accounts.component.html',
  styleUrls: ['./my-accounts.component.scss'],
})
export class MyAccountsComponent implements OnInit, OnDestroy {
  @ViewChild('form') form!: MyAccountsFormComponent;

  private paymentSubscription: Subscription;
  constructor(private store: Store) {
    this.paymentSubscription = this.store
      .select(SharedSelectors.createPayment)
      .pipe(required)
      .subscribe((payment) => {
        this.paymentForm = payment;
        this.store.dispatch(SharedActions.clearCreatePayment());
      });
  }

  senderAccounts$ = this.store.select(PayFormsSelectors.senderAccounts);
  recipientAccounts$ = this.store.select(PayFormsSelectors.recipientAccounts);
  progress$ = this.store.select(PayFormsSelectors.progress);
  status$ = this.store.select(PayFormsSelectors.createdPayment).pipe(
    required,
    map((payment) => this.mapToStatus(payment))
  );
  isLoading$ = this.store.select(PayFormsSelectors.pageLoader);

  paymentForm?: PaymentForm;
  supDocuments: PaymentSupDoc[] = [];

  ngOnInit(): void {
    this.store.dispatch(PayFormsActions.init());
    this.store.dispatch(
      AppActions.setPageLoader({ loader: PayFormsSelectors.pageLoader })
    );
  }

  ngOnDestroy(): void {
    this.store.dispatch(PayFormsActions.destroy());
    this.paymentSubscription?.unsubscribe();
  }

  toConfirm(): void {
    if (this.form.submitForm() && this.paymentForm) {
      this.store.dispatch(PayFormsActions.setProgress({ progress: 'confirm' }));
      this.store.dispatch(
        PayFormsActions.setPayment({
          payment: { ...this.paymentForm, attachedSupDocs: this.supDocuments },
        })
      );
    }
  }

  private mapToStatus(payment: PaymentCommon): PaymentStatus {
    const status: PaymentStatus = {
      id: payment.id,
      status: payment.statusId,
      number: payment.number as string,
    };
    if (payment.statusId === 'ONSIGN' && payment.isNeedMySign) {
      status.status = 'ONMYSIGN';
    }
    return status;
  }
}
