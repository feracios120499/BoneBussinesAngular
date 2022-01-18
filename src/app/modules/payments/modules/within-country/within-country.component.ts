import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
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
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import {
    WithinCountryFormComponent,
} from 'src/app/@shared/modules/shared-payment/components/within-country-form/within-country-form.component';


@Component({
    selector: 'pay-within-country',
    templateUrl: './within-country.component.html',
    styleUrls: ['./within-country.component.scss']
})
export class WithinCountryComponent implements OnInit, OnDestroy {
    @ViewChild('form') form!: WithinCountryFormComponent;

    private paymentSubscription: Subscription;
    constructor(private store: Store<State>) {
        this.paymentSubscription = this.store.select(SharedSelectors.createPayment).pipe(required).subscribe((payment) => {
            this.paymentForm = payment;
            if (payment) {
                this.store.dispatch(SharedActions.clearCreatePayment());
                this.supDocuments = payment.attachedSupDocs ? payment.attachedSupDocs : [];
            }
        });
    }

    senderAccounts$ = this.store.select(PayFormsSelectors.senderAccounts);
    progress$ = this.store.select(PayFormsSelectors.progress);
    status$ = this.store.select(PayFormsSelectors.createdPayment).pipe(required, map(payment => this.mapToStatus(payment)));
    isLoading$ = this.store.select(PayFormsSelectors.pageLoader);

    paymentForm?: PaymentForm;
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
            this.store.dispatch(PayFormsActions.setPayment({ payment: { ...this.paymentForm, attachedSupDocs: this.supDocuments } }));
        }
    }

    private mapToStatus(payment: PaymentCommon): PaymentStatus {
        const status: PaymentStatus = {
            id: payment.id,
            status: payment.statusId,
            number: payment.number as string
        };
        if (payment.statusId === 'ONSIGN' && payment.isNeedMySign) {
            status.status = 'ONMYSIGN';
        }
        return status;
    }
}
