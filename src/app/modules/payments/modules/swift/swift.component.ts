import { Component, OnInit, ViewChild } from '@angular/core';
import { RecursivePartial } from '@b1-types/recursive-partial.type';
import { PaymentCommon } from '@models/payments/payment-common.model';
import { PaymentStatus } from '@models/payments/payment-status.model';
import { SwiftForm } from '@models/payments/swift-form.model';
import { AcctSelectors } from '@modules/accounts/store/selectors';
import { Store } from '@ngrx/store';
import { SwiftFormComponent } from '@payment-forms/swift-form/swift-form.component';
import { AppActions } from '@store/app/actions';
import { PayFormsActions } from '@store/payments/forms/actions';
import { PayFormsSelectors } from '@store/payments/forms/selectors';
import { required } from '@store/shared';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-swift',
  templateUrl: './swift.component.html',
  styleUrls: ['./swift.component.scss'],
})
export class SwiftComponent implements OnInit {
  @ViewChild('form') form!: SwiftFormComponent;
  constructor(private store: Store) {}

  senderAccounts$ = this.store.select(AcctSelectors.swiftSenderAccounts);

  progress$ = this.store.select(PayFormsSelectors.progress);
  status$ = this.store.select(PayFormsSelectors.createdPayment).pipe(
    required,
    map((payment) => this.mapToStatus(payment))
  );
  isLoading$ = this.store.select(PayFormsSelectors.pageLoader);

  swiftForm?: SwiftForm;
  ngOnInit(): void {
    this.store.dispatch(PayFormsActions.init());
    this.store.dispatch(AppActions.setPageLoader({ loader: PayFormsSelectors.pageLoader }));
  }

  toConfirm(): void {
    if (this.form.submitForm() && this.swiftForm) {
      this.store.dispatch(PayFormsActions.setProgress({ progress: 'confirm' }));
      this.store.dispatch(
        PayFormsActions.setSwift({
          swift: {
            ...(this.swiftForm as SwiftForm),
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
