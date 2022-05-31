import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { PaymentForm } from '@models/payment-form.model';
import { AcctActions } from '@modules/accounts/store/actions';
import { AcctSelectors } from '@modules/accounts/store/selectors';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { WithinCountryFormComponent } from '@payment-forms/within-country-form/within-country-form.component';

@Component({
  selector: 'app-b1-edit-payment-modal',
  templateUrl: './b1-edit-payment-modal.component.html',
  styleUrls: ['./b1-edit-payment-modal.component.scss'],
})
export class B1EditPaymentModalComponent implements OnInit, AfterViewInit {
  constructor(private store: Store, private modal: NgbActiveModal) {}

  @ViewChild('form') form!: WithinCountryFormComponent;
  @Input() payment!: PaymentForm;
  @Input() onSave!: (payment: PaymentForm) => void;

  senderAccounts$ = this.store.select(AcctSelectors.senderAccounts);

  ngOnInit(): void {
    this.store.dispatch(AcctActions.loadAccounts({ reload: false }));
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.form.submitForm();
    });
  }

  save(): void {
    if (this.form.submitForm() && this.payment) {
      this.onSave(this.payment);
      this.modal.close();
    }
  }
}
