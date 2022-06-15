import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModelControl } from '@b1-types/model-controls.type';
import { markFormGroupTouched } from '@methods/form-group-touched.method';
import { Currency } from '@models/currency.model';
import { SwiftForm } from '@models/payments/swift-form.model';
import { SelectAccountsList } from '@models/select-accounts-list.model';
import { Store } from '@ngrx/store';
import { PayFormsActions } from '@store/payments/forms/actions';
import { PayFormsSelectors } from '@store/payments/forms/selectors';
import { PublicSelectors } from '@store/public/selectors';
import { number } from 'ngrx-forms/validation';
import { combineLatest, Observable, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap, withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'app-swift-form',
  templateUrl: './swift-form.component.html',
  styleUrls: ['./swift-form.component.scss'],
})
export class SwiftFormComponent implements OnInit {
  constructor(private store: Store) {
    const controls: ModelControl<SwiftForm> = {
      amount: this.amountControl,
      number: this.docNumberControl,
      other: this.otherControl,
      paymentFee: this.paymentFeeControl,
      purpose: this.purposeControl,
      typePay: this.typePayControl,
      senderDataLangCode: this.senderDataLangCodeControl,
      senderDataCountry: this.senderDataLangCodeControl,
      senderDataName: this.senderDataNameControl,
      senderDataLocation: this.senderDataLocationControl,
      senderBankName: this.senderBankNameControl,
      senderBankLocation: this.senderBankLocationControl,
      senderAccount: this.senderAccountControl,
      intermediaryBankLocation: this.intermediaryBankLocationControl,
      intermediaryBankName: this.intermediaryBankLocationControl,
      intermediaryBankSWIFT: this.intermediaryBankSwiftControl,
      benificiaryAccNumber: this.benificiaryAccNumberControl,
      benificiaryBankCorrAccNumber: this.benificiaryBankCorrAccNumberControl,
      benificiaryBankLocation: this.benificiaryBankLocationControl,
      benificiaryBankName: this.benificiaryBankNameControl,
      benificiaryBankSWIFT: this.benificiaryBankSwiftControl,
      benificiaryIBAN: this.benificiaryIbanControl,
      benificiaryLocation: this.benificiaryLocationControl,
      benificiaryName: this.benificiaryNameControl,
      attachedSupDocs: this.attachedSupDocsControl,
      isAgree: this.isAgreeControl,
    };

    this.formGroup = new FormGroup(controls);

    this.subscriptions.push(
      this.docNumberAutoControl.valueChanges.pipe(this.docNumberAutoChange.bind(this)).subscribe()
    );

    this.subscriptions.push(
      combineLatest([
        this.amountControl.valueChanges.pipe(distinctUntilChanged(), debounceTime(500)),
        this.currencyControl.valueChanges.pipe(distinctUntilChanged()),
      ])
        .pipe(this.loadAmountString.bind(this))
        .subscribe()
    );

    this.subscriptions.push(
      this.store.select(PayFormsSelectors.amountString).pipe(this.setAmountString.bind(this)).subscribe()
    );
  }

  formGroup: FormGroup;

  @Input('senderAccounts') senderAccounts!: Observable<SelectAccountsList>;
  @Input('type') type: 'create' | 'edit' | 'template' = 'create';

  subscriptions: Subscription[] = [];
  currencies: Currency[] = [];

  amountControl = new FormControl(0, [Validators.required, Validators.min(1)]);

  amountStringControl = new FormControl('');

  attachedSupDocsControl = new FormControl();

  isAgreeControl = new FormControl(false, [Validators.requiredTrue]);

  docNumberAutoControl = new FormControl(true, Validators.required);
  currencyControl = new FormControl();

  // DOCUMENT NUMBER
  docNumberControl = new FormControl('');
  docNumberMaxLength = 10;
  docNumberValidators = [Validators.required, Validators.maxLength(this.docNumberMaxLength)];

  otherControl = new FormControl('', [Validators.maxLength(250)]);

  paymentFeeControl = new FormControl('OUR', [Validators.required]);
  paymentsFee = [
    { value: 'OUR', label: 'OUR', tooltip: 'components.pay.swift.commision.OUR' },
    { value: 'BEN', label: 'BEN', tooltip: 'components.pay.swift.commision.BEN' },
    { value: 'SHA', label: 'SHA', tooltip: 'components.pay.swift.commision.SHA' },
  ];

  purposeControl = new FormControl('', [Validators.required, Validators.maxLength(140)]);

  typePayControl = new FormControl('1', [Validators.required]);
  typesPay = [
    { value: '1', label: 'components.pay.swift.pay' },
    { value: '0', label: 'components.pay.swift.prepay' },
  ];

  senderDataLangCodeControl = new FormControl('');
  senderDataCountryControl = new FormControl('');
  senderDataNameControl = new FormControl('');
  senderDataLocationControl = new FormControl('');

  senderBankNameControl = new FormControl('', [Validators.required]);
  senderBankLocationControl = new FormControl('', [Validators.required]);

  senderAccountControl = new FormControl(Validators.required);

  intermediaryBankLocationControl = new FormControl('');
  intermediaryBankNameControl = new FormControl('');
  intermediaryBankSwiftControl = new FormControl('');

  benificiaryIbanControl = new FormControl('');
  benificiaryAccNumberControl = new FormControl('');
  benificiaryNameControl = new FormControl('');
  benificiaryLocationControl = new FormControl('');
  benificiaryBankCorrAccNumberControl = new FormControl('');
  benificiaryBankNameControl = new FormControl('');
  benificiaryBankSwiftControl = new FormControl('');
  benificiaryBankLocationControl = new FormControl('');

  private docNumberAutoChange(source$: Observable<boolean>): Observable<boolean> {
    return source$.pipe(
      tap((docNumberAuto) => {
        if (!docNumberAuto) {
          this.docNumberControl.addValidators(this.docNumberValidators);
        } else {
          this.docNumberControl.removeValidators(this.docNumberValidators);
        }

        this.docNumberControl.setValue('');
        this.docNumberControl.markAsUntouched();
        this.docNumberControl.updateValueAndValidity();
      })
    );
  }

  private loadAmountString(amountCurrencySource$: Observable<[any, any]>): Observable<[any, any]> {
    return amountCurrencySource$.pipe(
      tap(([amount, currency]) => {
        if (amount && currency) {
          this.store.dispatch(
            PayFormsActions.loadAmountStringRequest({
              amount: Number((amount / 100).toFixed(2)),
              currencyCode: currency.code,
            })
          );
        } else {
          this.store.dispatch(PayFormsActions.loadAmountStringSuccess(''));
        }
      })
    );
  }

  private setAmountString(amountString: Observable<string>): Observable<string> {
    return amountString.pipe(
      tap((value) => {
        this.amountStringControl.setValue(value);
        this.amountStringControl.updateValueAndValidity();
      })
    );
  }

  ngOnInit(): void {
    this.senderAccounts
      .pipe(withLatestFrom(this.store.select(PublicSelectors.currencies)))
      .subscribe(([accounts, currencies]) => {
        const accountsCurrencies = accounts.accounts
          .map((p) => p.currencyCode)
          .filter((value, index, self) => self.indexOf(value) === index);

        this.currencies = currencies.filter((p) => accountsCurrencies.indexOf(p.code) >= 0);
        if (this.currencies.length > 0) {
          this.currencyControl.setValue(this.currencies[0]);
          this.currencyControl.updateValueAndValidity();
        }
      });
  }

  test(): void {
    markFormGroupTouched(this.formGroup);
  }
}
