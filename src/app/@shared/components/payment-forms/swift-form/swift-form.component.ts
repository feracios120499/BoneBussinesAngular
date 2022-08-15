import { AfterViewInit, Component, ElementRef, forwardRef, Input, OnInit, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NgForm, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { ModelControl } from '@b1-types/model-controls.type';
import { markFormGroupTouched } from '@methods/form-group-touched.method';
import { Currency } from '@models/currency.model';
import { SwiftForm } from '@models/payments/swift-form.model';
import { Customer } from '@models/profile.model';
import { SelectAccountsList } from '@models/select-accounts-list.model';
import { SwiftBank } from '@models/swift-bank.model';
import { Store } from '@ngrx/store';
import { PayFormsActions } from '@store/payments/forms/actions';
import { PayFormsSelectors } from '@store/payments/forms/selectors';
import { PublicSelectors } from '@store/public/selectors';
import { UserSelectors } from '@store/user/selectors';
import { minAmountValidator } from '@validators/min-amount.validator';
import { number } from 'ngrx-forms/validation';
import { combineLatest, fromEvent, Observable, of, Subject, Subscriber, Subscription } from 'rxjs';
import {
  combineAll,
  debounceTime,
  distinctUntilChanged,
  map,
  switchMap,
  take,
  tap,
  withLatestFrom,
} from 'rxjs/operators';

@Component({
  selector: 'app-swift-form',
  templateUrl: './swift-form.component.html',
  styleUrls: ['./swift-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SwiftFormComponent),
      multi: true,
    },
  ],
})
export class SwiftFormComponent implements OnInit, ControlValueAccessor, AfterViewInit {
  constructor(private store: Store, private el: ElementRef) {
    const controls: ModelControl<SwiftForm> = {
      amountString: this.amountStringControl,
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
      senderDataTaxCode: this.senderDataTaxCodeControl,
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

    this.amountStringControl.disable();
    this.senderDataCountryControl.disable();
    this.senderDataLangCodeControl.disable();
    this.senderDataLocationControl.disable();
    this.senderDataNameControl.disable();
    this.senderDataTaxCodeControl.disable();

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

    this.subscriptions.push(
      this.store.select(UserSelectors.currentCustomer).pipe(this.setCustomerData.bind(this)).subscribe()
    );

    this.subscriptions.push(
      this.intermediaryBankRequiredControl.valueChanges
        .pipe(this.intermediaryBankRequeiredChange.bind(this))
        .subscribe()
    );

    this.subscriptions.push(
      this.benificiaryAccNumberControl.valueChanges.pipe(this.benecifiaryAccNumberChange.bind(this)).subscribe()
    );

    this.subscriptions.push(
      this.benificiaryIbanControl.valueChanges.pipe(this.benecifiaryIbanChange.bind(this)).subscribe()
    );

    this.subscriptions.push(
      this.intermediaryBankSwiftControl.valueChanges.subscribe((value) => this.loadSwiftBanks(value))
    );

    this.subscriptions.push(
      this.benificiaryBankSwiftControl.valueChanges.subscribe((value) => this.loadSwiftBanks(value))
    );
  }
  private onChange = (value: any) => {};
  private onTouched = () => {};

  ngAfterViewInit(): void {
    this.subscriptions.push(
      this.formGroup.valueChanges
        .pipe(
          distinctUntilChanged((a, b) => JSON.stringify(a) === JSON.stringify(b)),
          tap((_) => {
            this.onChange(this.formGroup.getRawValue());
          })
        )
        .subscribe()
    );
  }

  writeValue(form: SwiftForm | undefined): void {
    if (!form) {
      this.formGroup.patchValue({});
      this.formGroup.updateValueAndValidity();
      return;
    }

    const formGroup: SwiftForm = {
      ...form,
    };

    this.formGroup.patchValue(formGroup);
    this.formGroup.updateValueAndValidity();
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  formGroup: FormGroup;

  @Input('senderAccounts') senderAccounts!: Observable<SelectAccountsList>;
  @Input('type') type: 'create' | 'edit' | 'template' = 'create';
  @ViewChild('paymentForm') paymentForm!: NgForm;

  isLoadingAccounts = false;

  subscriptions: Subscription[] = [];
  currencies: Currency[] = [];
  availableAccountsSubscriber = new Subscriber<SelectAccountsList>();
  availableAccounts = this.store.select(PayFormsSelectors.swiftAvailableAccounts);
  swiftBanks = this.store.select(PayFormsSelectors.swiftBanks);

  amountControl = new FormControl(0, [Validators.required, minAmountValidator(1)]);

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
  senderDataTaxCodeControl = new FormControl('');

  senderBankNameControl = new FormControl('', [Validators.required, Validators.maxLength(250)]);
  senderBankLocationControl = new FormControl('', [Validators.required, Validators.maxLength(250)]);

  senderAccountControl = new FormControl(undefined, Validators.required);

  intermediaryBankValidators = [Validators.required, Validators.maxLength(250)];
  intermediaryBankRequiredControl = new FormControl(false);
  intermediaryBankLocationControl = new FormControl('');
  intermediaryBankNameControl = new FormControl('');
  intermediaryBankSwiftControl = new FormControl('');

  benificiaryIbanControl = new FormControl('', [Validators.required, Validators.maxLength(250)]);
  benificiaryAccNumberControl = new FormControl('', [Validators.required, Validators.maxLength(250)]);
  benificiaryNameControl = new FormControl('', [Validators.required]);
  benificiaryLocationControl = new FormControl('', [Validators.required]);
  benificiaryBankCorrAccNumberControl = new FormControl('', [Validators.required, Validators.maxLength(250)]);
  benificiaryBankNameControl = new FormControl('', [Validators.required, Validators.maxLength(250)]);
  benificiaryBankSwiftControl = new FormControl('', [Validators.required, Validators.maxLength(250)]);
  benificiaryBankLocationControl = new FormControl('', [Validators.required, Validators.maxLength(250)]);

  maxLengthConfig = {
    maxLength: 140,
    maxLengthInRow: 35,
  };

  benificiaryNameMaxLength = this.maxLengthConfig.maxLength;
  benificiaryLocationMaxLength = this.maxLengthConfig.maxLength;

  recalcMaxLength(): void {
    let nameLength = 0;
    let locationLength = 0;

    if (this.benificiaryNameControl.value) {
      nameLength = this.benificiaryNameControl.value.length;
    }

    if (this.benificiaryLocationControl.value) {
      locationLength = this.benificiaryLocationControl.value.length;
    }

    this.benificiaryNameMaxLength =
      Math.floor((this.maxLengthConfig.maxLength - locationLength) / this.maxLengthConfig.maxLengthInRow) *
      this.maxLengthConfig.maxLengthInRow;
    this.benificiaryLocationMaxLength =
      Math.floor((this.maxLengthConfig.maxLength - nameLength) / this.maxLengthConfig.maxLengthInRow) *
      this.maxLengthConfig.maxLengthInRow;

    if (this.benificiaryNameMaxLength == this.maxLengthConfig.maxLength) {
      this.benificiaryNameMaxLength = this.maxLengthConfig.maxLength - this.maxLengthConfig.maxLengthInRow;
    }

    if (this.benificiaryLocationMaxLength == this.maxLengthConfig.maxLength) {
      this.benificiaryLocationMaxLength = this.maxLengthConfig.maxLength - this.maxLengthConfig.maxLengthInRow;
    }

    this.benificiaryNameControl.setValidators([
      Validators.required,
      Validators.maxLength(this.benificiaryNameMaxLength),
    ]);
    this.benificiaryNameControl.updateValueAndValidity();

    this.benificiaryLocationControl.setValidators([
      Validators.required,
      Validators.maxLength(this.benificiaryLocationMaxLength),
    ]);
    this.benificiaryLocationControl.updateValueAndValidity();

    console.log(this.benificiaryNameMaxLength, this.benificiaryLocationMaxLength);
  }
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

  private intermediaryBankRequeiredChange(source$: Observable<boolean>): Observable<boolean> {
    return source$.pipe(
      tap((required) => {
        if (required) {
          this.intermediaryBankLocationControl.addValidators(this.intermediaryBankValidators);
          this.intermediaryBankNameControl.addValidators(this.intermediaryBankValidators);
          this.intermediaryBankSwiftControl.addValidators(this.intermediaryBankValidators);
        } else {
          this.intermediaryBankLocationControl.removeValidators(this.intermediaryBankValidators);
          this.intermediaryBankNameControl.removeValidators(this.intermediaryBankValidators);
          this.intermediaryBankSwiftControl.removeValidators(this.intermediaryBankValidators);
        }

        this.intermediaryBankLocationControl.markAsUntouched();
        this.intermediaryBankNameControl.markAsUntouched();
        this.intermediaryBankSwiftControl.markAsUntouched();
        this.intermediaryBankLocationControl.markAsPristine();
        this.intermediaryBankNameControl.markAsPristine();
        this.intermediaryBankSwiftControl.markAsPristine();
        this.setValueAndUpdate(this.intermediaryBankLocationControl, '');
        this.setValueAndUpdate(this.intermediaryBankNameControl, '');
        this.setValueAndUpdate(this.intermediaryBankSwiftControl, '');
      })
    );
  }

  private benecifiaryAccNumberChange(source$: Observable<string>): Observable<string> {
    return source$.pipe(
      tap((accNumber) => {
        if (accNumber && accNumber.length > 0) {
          this.benificiaryIbanControl.disable({ emitEvent: false });
          this.benificiaryIbanControl.removeValidators(Validators.required);
          this.setValueAndUpdate(this.benificiaryIbanControl, '');
        } else {
          this.benificiaryIbanControl.enable({ emitEvent: false });
          this.benificiaryIbanControl.addValidators(Validators.required);
        }
      })
    );
  }

  private benecifiaryIbanChange(source$: Observable<string>): Observable<string> {
    return source$.pipe(
      tap((iban) => {
        if (iban && iban.length > 0) {
          this.benificiaryAccNumberControl.disable({ emitEvent: false });
          this.benificiaryAccNumberControl.removeValidators(Validators.required);
          this.setValueAndUpdate(this.benificiaryAccNumberControl, '');
        } else {
          this.benificiaryAccNumberControl.enable({ emitEvent: false });
          this.benificiaryAccNumberControl.addValidators(Validators.required);
        }
      })
    );
  }

  loadSwiftBanks(bic: string): void {
    if (bic && bic.length >= 3) {
      this.store.dispatch(PayFormsActions.searchSwiftBanks({ bic }));
    } else {
      this.store.dispatch(PayFormsActions.setSwiftBanks({ banks: undefined }));
    }
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

  private setCustomerData(customerSource$: Observable<Customer | undefined>): Observable<Customer | undefined> {
    return customerSource$.pipe(
      tap((customer) => {
        if (customer) {
          this.setValueAndUpdate(this.senderDataCountryControl, 'Україна');

          this.setValueAndUpdate(this.senderDataLangCodeControl, 'UA');

          this.setValueAndUpdate(this.senderDataLocationControl, customer.address);

          this.setValueAndUpdate(this.senderDataNameControl, customer.name);

          this.setValueAndUpdate(this.senderDataTaxCodeControl, customer.taxCode);

          this.setValueAndUpdate(this.senderBankLocationControl, customer.bankAddress);

          this.setValueAndUpdate(this.senderBankNameControl, customer.bankName);
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

  test?: Observable<number>;

  senderAccountsSubject?: SelectAccountsList;

  ngOnInit(): void {
    this.currencyControl.valueChanges.subscribe((value) =>
      this.store.dispatch(PayFormsActions.setSwiftCurrency({ currency: value }))
    );
    this.senderAccounts
      .pipe(withLatestFrom(this.store.select(PublicSelectors.currencies)))
      .subscribe(([accounts, currencies]) => {
        const accountsCurrencies = accounts.accounts
          .map((p) => p.currencyCode)
          .filter((value, index, self) => self.indexOf(value) === index);

        this.currencies = currencies.filter((p) => accountsCurrencies.indexOf(p.code) >= 0);
        if (this.currencies.length > 0) {
          console.log('test');
          this.currencyControl.setValue(this.currencies[0]);
          this.currencyControl.updateValueAndValidity();
        }
      });

    this.recalcMaxLength();

    this.subscriptions.push(
      this.senderAccounts.subscribe((accountList) => (this.isLoadingAccounts = accountList.isLoading))
    );
  }

  private setValueAndUpdate(control: FormControl, value: any, emitEvent = true): void {
    control.setValue(value, { emitEvent });
    control.updateValueAndValidity({ emitEvent });
  }

  selectIntermediaryBank(bank: SwiftBank): void {
    this.setValueAndUpdate(this.intermediaryBankSwiftControl, bank.bic, false);
    this.setValueAndUpdate(this.intermediaryBankNameControl, bank.name);
    this.setValueAndUpdate(this.intermediaryBankLocationControl, bank.address);
    this.store.dispatch(PayFormsActions.setSwiftBanks({ banks: undefined }));
  }

  selectBenificiaryBank(bank: SwiftBank): void {
    this.setValueAndUpdate(this.benificiaryBankSwiftControl, bank.bic, false);
    this.setValueAndUpdate(this.benificiaryBankNameControl, bank.name);
    this.setValueAndUpdate(this.benificiaryBankLocationControl, bank.address);
    this.store.dispatch(PayFormsActions.setSwiftBanks({ banks: undefined }));
  }

  submitForm(): boolean {
    markFormGroupTouched(this.formGroup);

    this.paymentForm.onSubmit(null as any);

    if (this.formGroup.invalid) {
      this.scrollToFirstInvalidControl();
    }
    return this.formGroup.valid && !this.isLoadingAccounts;
  }

  private scrollToFirstInvalidControl() {
    const firstInvalidControl: HTMLElement = this.el.nativeElement.querySelector('form .ng-invalid:not(div)');

    console.log(firstInvalidControl);
    window.scroll({
      top: this.getTopOffset(firstInvalidControl),
      left: 0,
      behavior: 'smooth',
    });

    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    const inputInvalid = firstInvalidControl.querySelector('input');

    if (scrollTop <= this.getTopOffset(firstInvalidControl)) {
      if (inputInvalid) {
        inputInvalid.focus();
      } else {
        firstInvalidControl.focus();
      }
    } else {
      fromEvent(window, 'scroll')
        .pipe(debounceTime(100), take(1))
        .subscribe(() => {
          console.log('scroll');
          if (inputInvalid) {
            inputInvalid.focus();
          } else {
            firstInvalidControl.focus();
          }
        });
    }
  }

  private getTopOffset(controlEl: HTMLElement): number {
    const labelOffset = 50;
    return controlEl.getBoundingClientRect().top + window.scrollY - labelOffset;
  }
}
