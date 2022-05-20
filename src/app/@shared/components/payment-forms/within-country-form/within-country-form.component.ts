import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  forwardRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR, NgForm, Validators } from '@angular/forms';
import { ModelControl } from '@b1-types/model-controls.type';
import { RecursivePartial } from '@b1-types/recursive-partial.type';
import { IbanHelper } from '@helpers/iban.helper';
import { markFormGroupTouched } from '@methods/form-group-touched.method';
import { BankModel } from '@models/bank.model';
import { PaymentForm } from '@models/payment-form.model';
import { WithinCountryForm } from '@models/payments/within-country-form.model';
import { SelectAccountsList } from '@models/select-accounts-list.model';
import { Store } from '@ngrx/store';
import { BanksStoreService } from '@services/banks-store.service';
import { PayActions } from '@store/payments/actions';
import { ibanValidator } from '@validators/iban.validator';
import { Observable, Subscription } from 'rxjs';
import { distinctUntilChanged, filter, map, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'within-country-form',
  templateUrl: './within-country-form.component.html',
  styleUrls: ['./within-country-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => WithinCountryFormComponent),
      multi: true,
    },
  ],
})
export class WithinCountryFormComponent implements OnInit, OnDestroy, ControlValueAccessor, AfterViewInit {
  constructor(private banksService: BanksStoreService, private detector: ChangeDetectorRef, private store: Store) {
    const controls: ModelControl<WithinCountryForm> = {
      docNumberAuto: this.docNumberAutoControl,
      docNumber: this.docNumberControl,
      senderAccount: this.senderAccountControl,
      recipientName: this.recipientNameControl,
      recipientAccountNumber: this.recipientAccountNumberControl,
      recipientTaxCode: this.recipientTaxCodeControl,
      recipientBankName: this.recipientBankNameControl,
      amount: this.amountControl,
      purpose: this.purposeControl,
      additionalDetails: this.additionalDetailsControl,
    };

    this.formGroup = new FormGroup(controls);

    this.subscriptions.push(
      this.docNumberAutoControl.valueChanges.pipe(this.docNumberAutoChange.bind(this)).subscribe()
    );

    this.subscriptions.push(
      this.recipientTaxCodeControl.valueChanges.pipe(this.recipientTaxCodeChange.bind(this)).subscribe()
    );

    this.subscriptions.push(
      this.recipientAccountNumberControl.valueChanges.pipe(this.recipientAccountNumberChange.bind(this)).subscribe()
    );
  }

  set bankName(bankName: string | undefined) {
    setTimeout(() => {
      this.recipientBankNameControl.setValue(bankName);
      this.recipientBankNameControl.updateValueAndValidity();
    });
  }

  get additionalDetailsPlaceholder(): string {
    if (/[0]{10}/.test(this.recipientTaxCodeControl.value)) {
      return 'components.pay.isNeedAdditionalDetails';
    }
    return '';
  }

  // tslint:disable-next-line: no-input-rename
  @Input('senderAccounts') senderAccounts!: Observable<SelectAccountsList>;
  @ViewChild('paymentForm') paymentForm!: NgForm;

  formGroup: FormGroup;

  senderAccountControl = new FormControl(Validators.required);
  docNumberAutoControl = new FormControl(true, Validators.required);

  // DOCUMENT NUMBER
  docNumberControl = new FormControl('');
  docNumberMaxLength = 10;
  docNumberValidators = [Validators.required, Validators.maxLength(this.docNumberMaxLength)];
  // ---

  // RECIPIENT NAME
  recipientNameMaxLength = 38;
  recipientNameControl = new FormControl('', [Validators.required, Validators.maxLength(this.recipientNameMaxLength)]);
  // ---

  // RECIPIENT ACCOUNT NUMBER
  recipientAccountNumberMaxLength = IbanHelper.ibanLength;
  recipientAccountNumberMinLength = IbanHelper.ibanLength;
  recipientAccountNumberControl = new FormControl('', [Validators.required, ibanValidator()]);
  // ---

  // RECIPENT TAX CODE
  recipientTaxCodeMinLength = 8;
  recipientTaxCodeMaxLength = 10;
  recipientTaxCodeControl = new FormControl('', [
    Validators.required,
    Validators.minLength(this.recipientTaxCodeMinLength),
    Validators.maxLength(this.recipientTaxCodeMaxLength),
  ]);
  // ---

  // ADD DETAILS
  additionalDetailsMaxLength = 200;
  additionalDetailsControl = new FormControl('', [Validators.maxLength(this.additionalDetailsMaxLength)]);
  // ----

  // RECIPIENT BANK NAME
  recipientBankNameControl = new FormControl('', [Validators.required]);
  // --

  // PURPOSE
  purposeControl = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(160)]);

  amountControl = new FormControl(0, [Validators.required, Validators.min(1)]);

  private subscriptions: Subscription[] = [];

  private onChange = (value: any) => {};
  private onTouched = () => {};

  ngAfterViewInit(): void {
    this.subscriptions.push(
      this.formGroup.valueChanges
        .pipe(
          distinctUntilChanged((a, b) => JSON.stringify(a) === JSON.stringify(b)),
          tap((form: WithinCountryForm) => {
            const paymentForm: RecursivePartial<PaymentForm> = {
              number: form.docNumber,
              additionalDetails: form.additionalDetails,
              sender: {
                accId: form.senderAccount?.id,
                accCurrencyCode: form.senderAccount?.currencyCode,
                accNumber: form.senderAccount?.number,
                accCurrencyId: form.senderAccount?.currencyId,
                name: form.senderAccount?.name,
                bankCode: IbanHelper.getBankId(form.senderAccount?.number),
                taxCode: form.senderAccount?.taxCode,
              },
              amount: form.amount,
              purpose: form.purpose,
              paymentDate: (form as any).documentDate?.toDate(),
              paymentValueDate: (form as any).valueDate?.toDate(),
              recipient: {
                accCurrencyCode: form.senderAccount?.currencyCode,
                accNumber: form.recipientAccountNumber,
                accCurrencyId: form.senderAccount?.currencyId,
                name: form.recipientName,
                bankCode: IbanHelper.getBankId(form.recipientAccountNumber),
                taxCode: form.recipientTaxCode,
              },
            };
            this.onChange(paymentForm);
            // this.detector.detectChanges();
          })
        )
        .subscribe()
    );
  }

  writeValue(form: PaymentForm | undefined): void {
    if (!form) {
      this.formGroup.patchValue({});
      this.formGroup.updateValueAndValidity();
      return;
    }
    const formValue: WithinCountryForm = {
      docNumberAuto: !form.number,
      docNumber: form.number,
      senderAccount: {
        id: form.sender?.accId,
        number: form.sender?.accNumber || '',
        currencyCode: form.sender?.accCurrencyCode,
        currencyId: form.sender?.accCurrencyId,
        name: form.sender?.name || '',
        taxCode: form.sender?.taxCode || '',
      },
      recipientName: form.recipient?.name || '',
      recipientAccountNumber: form.recipient?.accNumber || '',
      recipientBankName: '',
      recipientTaxCode: form.recipient?.taxCode || '',
      amount: form.amount || 0,
      purpose: form.purpose || '',
      additionalDetails: form.additionalDetails,
    };

    this.formGroup.patchValue(formValue);
    this.formGroup.updateValueAndValidity();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscriptions.forEach((p) => p?.unsubscribe());
  }

  onCorrespondentListOpen(): void {
    this.store.dispatch(PayActions.showCorrespondentsModal());
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

  private recipientAccountNumberChange(source$: Observable<string>): Observable<BankModel | undefined> {
    return source$.pipe(
      tap(() => (this.bankName = '')),
      filter((value) => IbanHelper.isIban(value) && IbanHelper.validateFormat(value)),
      map((value) => IbanHelper.getBankId(value) as string),
      switchMap((id) => this.banksService.getBank(id)),
      tap((payload) => (this.bankName = payload?.name))
    );
  }

  private recipientTaxCodeChange(source$: Observable<string>): Observable<string> {
    return source$.pipe(
      tap((taxCode) => {
        if (/[0]{10}/.test(taxCode)) {
          this.additionalDetailsControl.addValidators(Validators.required);
        } else {
          this.additionalDetailsControl.removeValidators(Validators.required);
        }
        this.additionalDetailsControl.updateValueAndValidity();
      })
    );
  }

  submitForm(): boolean {
    markFormGroupTouched(this.formGroup);

    this.paymentForm.onSubmit(null as any);
    return this.formGroup.valid;
  }
}
