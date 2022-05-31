import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { RecursivePartial } from '@b1-types/recursive-partial.type';
import { PaymentForm } from '@models/payment-form.model';
import { PaymentCommon } from '@models/payments/payment-common.model';
import { PaymentStatus } from '@models/payments/payment-status.model';
import { PaymentSupDoc } from '@models/payments/payment-sup-doc.model';
import { Store } from '@ngrx/store';
import { State } from '@store';
import { AppActions } from '@store/app/actions';
import { PayFormsActions } from '@store/payments/forms/actions';
import { PayFormsSelectors } from '@store/payments/forms/selectors';
import { required } from '@store/shared';
import { SharedActions } from '@store/shared/actions';
import { SharedSelectors } from '@store/shared/selectors';
import { merge, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { WithinCountryFormComponent } from '@payment-forms/within-country-form/within-country-form.component';
import { AcctSelectors } from '@modules/accounts/store/selectors';

@Component({
  selector: 'pay-within-country',
  templateUrl: './within-country.component.html',
  styleUrls: ['./within-country.component.scss'],
})
export class WithinCountryComponent implements OnInit, OnDestroy {
  @ViewChild('form') form!: WithinCountryFormComponent;

  private paymentSubscription: Subscription;
  constructor(private store: Store<State>) {
    const createPayment$: Observable<PaymentForm> = this.store.select(SharedSelectors.createPayment).pipe(required);
    const createPartialPayment$: Observable<Partial<PaymentForm>> = this.store
      .select(SharedSelectors.createPartialPayment)
      .pipe(required);

    this.paymentSubscription = merge(createPayment$, createPartialPayment$).subscribe((payment) => {
      this.paymentForm = payment;
      if (payment) {
        this.store.dispatch(SharedActions.clearCreatePayment());
        this.supDocuments = payment.attachedSupDocs ? payment.attachedSupDocs : [];
      }
    });
  }

  senderAccounts$ = this.store.select(AcctSelectors.senderAccounts);
  progress$ = this.store.select(PayFormsSelectors.progress);
  status$ = this.store.select(PayFormsSelectors.createdPayment).pipe(
    required,
    map((payment) => this.mapToStatus(payment))
  );
  isLoading$ = this.store.select(PayFormsSelectors.pageLoader);

  paymentForm?: RecursivePartial<PaymentForm>;
  supDocuments: PaymentSupDoc[] = [];

  ngOnInit(): void {
    this.store.dispatch(PayFormsActions.init());
    this.store.dispatch(AppActions.setPageLoader({ loader: PayFormsSelectors.pageLoader }));
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
          payment: {
            ...(this.paymentForm as PaymentForm),
            attachedSupDocs: this.supDocuments,
          },
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
