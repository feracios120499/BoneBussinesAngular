import { Component, OnDestroy, OnInit } from '@angular/core';
import { PaymentForm } from '@models/payment-form.model';
import { Store } from '@ngrx/store';
import { AcctActions } from '@store/acct/actions';
import { PayFormsSelectors } from '@store/payments/forms/selectors';
import { PaySelectors } from '@store/payments/selectors';
import { SharedActions } from '@store/shared/actions';
import { SupDocumentsActions } from '@store/sup-documents/actions';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit, OnDestroy {
  constructor(private store: Store) {
    const payment: PaymentForm = {
      number: '',
      sender: {
        accId: 154724104,
        accCurrencyCode: 'UAH',
        accNumber: 'UA283033980000029090300319370',
        accCurrencyId: 980,
        name: '123',
        bankCode: '303398',
        taxCode: '12856150',
      },
      amount: 12300,
      purpose: '33',
      paymentDate: new Date('2021-10-01T21:00:00.000Z'),
      paymentValueDate: new Date('2021-10-01T21:00:00.000Z'),
      recipient: {
        accCurrencyCode: 'UAH',
        accNumber: 'UA233004650000026002301907973',
        accCurrencyId: 980,
        name: '2323',
        bankCode: '300465',
        taxCode: '1233333333',
      },
    };
    // this.store.dispatch(SharedActions.setCreatePayment({ payment }));
  }

  showTabs$ = this.store.select(PayFormsSelectors.showCreateTabs);

  ngOnDestroy(): void {}

  ngOnInit(): void {
    this.store.dispatch(AcctActions.loadAccounts({ reload: false }));
    this.store.dispatch(SupDocumentsActions.loadDocuments());
  }
}
