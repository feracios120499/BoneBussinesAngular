import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { PaymentForm } from '@models/payment-form.model';
import { Store } from '@ngrx/store';
import { PayFormsActions } from '@store/payments/forms/actions';
import { PayFormsSelectors } from '@store/payments/forms/selectors';
import { required } from '@store/shared';

@Component({
  selector: 'within-country-confirm',
  templateUrl: './within-country-confirm.component.html',
  styleUrls: ['./within-country-confirm.component.scss']
})
export class WithinCountryConfirmComponent implements OnInit {
  constructor(private store: Store) { }


  payment$ = this.store.select(PayFormsSelectors.payment).pipe(required);
  isLoading$ = this.store.select(PayFormsSelectors.createLoading);

  saveAsTemplate = false;
  templateNameControl = new FormControl('');

  ngOnInit(): void {
  }

  toForm(ignore: boolean): void {
    if (ignore) {
      return;
    }
    this.store.dispatch(PayFormsActions.setProgress({ progress: 'form' }));
  }

  saveAsTemplateChange(payment: PaymentForm): void {
    // this.templateName = payment.sender.accNumber + ' > ' + payment.recipient.accNumber;
    this.templateNameControl.setValue(payment.sender.accNumber + ' > ' + payment.recipient.accNumber);
    if (this.saveAsTemplate) {
      this.templateNameControl.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(200)]);
    } else {
      this.templateNameControl.setValidators([]);
    }
    this.templateNameControl.updateValueAndValidity();
  }

  save(payment: PaymentForm): void {
    if (this.templateNameControl.invalid) {
      return;
    }
    this.store.dispatch(PayFormsActions.createWithinCountryRequest({
      ...payment,
      saveAsTemplate: this.saveAsTemplate,
      templateName: this.saveAsTemplate ? this.templateNameControl.value : undefined,
      status: 'NEW'
    }));
  }

  saveSignAndToBank(payment: PaymentForm): void {
    if (this.templateNameControl.invalid) {
      return;
    }
    this.store.dispatch(PayFormsActions.createSignAndToBank());

    this.store.dispatch(PayFormsActions.createWithinCountryRequest({
      ...payment,
      saveAsTemplate: false,
      status: 'NEW'
    }));
  }
}
