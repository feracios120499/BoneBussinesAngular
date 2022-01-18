import { AfterViewInit, Component, forwardRef, Input, OnInit, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR, NgForm, Validators } from '@angular/forms';
import { ModelControl } from '@b1-types/model-controls.type';
import { RecursivePartial } from '@b1-types/recursive-partial.type';
import { IbanHelper } from '@helpers/iban.helper';
import { markFormGroupTouched } from '@methods/form-group-touched.method';
import { PaymentForm } from '@models/payment-form.model';
import { MyAccountsFormModel } from '@models/payments/my-accounts-form.model';
import { SelectAccount } from '@models/select-account.model';
import { SelectAccountsList } from '@models/select-accounts-list.model';
import { merge, Observable, Subscription } from 'rxjs';
import { distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'my-accounts-form',
  templateUrl: './my-accounts-form.component.html',
  styleUrls: ['./my-accounts-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MyAccountsFormComponent),
      multi: true,
    },
  ],
})
export class MyAccountsFormComponent implements OnInit, AfterViewInit, ControlValueAccessor {
  constructor() {
    const controls: ModelControl<MyAccountsFormModel> = {
      recipientAccount: this.recipientAccountControl,
      senderAccount: this.senderAccountControl,
      docNumber: this.docNumberControl,
      docNumberAuto: this.docNumberAutoControl,
      amount: this.amountControl,
      purpose: this.purposeControl,
      additionalDetails: this.additionalDetailsControl
    };
    this.formGroup = new FormGroup(controls);
  }

  formGroup: FormGroup;

  senderAccountControl = new FormControl(undefined, [Validators.required]);
  recipientAccountControl = new FormControl(undefined, [Validators.required]);
  docNumberAutoControl = new FormControl(true, Validators.required);

  // DOCUMENT NUMBER
  docNumberControl = new FormControl('');
  docNumberMaxLength = 10;
  docNumberValidators = [Validators.required, Validators.maxLength(this.docNumberMaxLength)];

  // AMOUNT
  amountControl = new FormControl(0, [Validators.required, Validators.min(1)]);

  // PURPOSE
  purposeControl = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(160)]);

  // ADD DETAILS
  additionalDetailsMaxLength = 200;
  additionalDetailsControl = new FormControl('', [Validators.maxLength(this.additionalDetailsMaxLength)]);


  recipientAccountsWithoutSender!: Observable<SelectAccountsList>;
  // tslint:disable-next-line: no-input-rename
  @Input() senderAccounts!: Observable<SelectAccountsList>;
  @Input() recipientAccounts!: Observable<SelectAccountsList>;

  @ViewChild('paymentForm') paymentForm!: NgForm;
  private subscriptions: Subscription[] = [];

  private onChange = (value: any) => { };
  private onTouched = () => { };

  writeValue(form: PaymentForm): void {
    if (!form) {
      return;
    }
    const formValue: MyAccountsFormModel = {
      docNumberAuto: !form.number,
      docNumber: form.number,
      senderAccount: {
        id: form.sender.accId,
        number: form.sender.accNumber || '',
        currencyCode: form.sender.accCurrencyCode,
        currencyId: form.sender.accCurrencyId,
        name: form.sender.name || '',
        taxCode: form.sender.taxCode || ''
      },
      recipientAccount: {
        id: form.recipient.accId,
        number: form.recipient.accNumber || '',
        currencyCode: form.recipient.accCurrencyCode,
        currencyId: form.recipient.accCurrencyId,
        name: form.recipient.name || '',
        taxCode: form.recipient.taxCode || ''
      },
      amount: form.amount,
      purpose: form.purpose,
      additionalDetails: form.additionalDetails
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


  ngOnInit(): void {
    // фильтруем по валюте отправителя + убираем счет отправителя из возможных для выбора
    this.recipientAccountsWithoutSender = merge(this.recipientAccounts, this.senderAccountControl.valueChanges).pipe(
      switchMap(_ => this.recipientAccounts.pipe(
        map((selectAccounts: SelectAccountsList) => {
          if (this.senderAccountControl.value) {
            const senderAccount = (this.senderAccountControl.value as SelectAccount);
            const result = { ...selectAccounts };
            result.accounts = selectAccounts.accounts.filter(p =>
              p.number !== senderAccount.number &&
              p.currencyCode === (senderAccount.currencyCode as string));
            return result;
          }
          return selectAccounts;
        }))));
  }

  ngAfterViewInit(): void {
    this.subscriptions.push(this.formGroup.valueChanges.pipe(this.formChange.bind(this)).subscribe());
    this.subscriptions.push(this.docNumberAutoControl.valueChanges.pipe(this.docNumberAutoChange.bind(this)).subscribe());
  }

  private formChange(source$: Observable<any>): Observable<MyAccountsFormModel> {
    return source$.pipe(
      map(form => form as MyAccountsFormModel),
      distinctUntilChanged((a, b) => JSON.stringify(a) === JSON.stringify(b)),
      tap((form) => {
        const paymentForm: RecursivePartial<PaymentForm> = {
          number: form.docNumber,
          sender: {
            accId: form.senderAccount?.id,
            accCurrencyCode: form.senderAccount?.currencyCode,
            accNumber: form.senderAccount?.number,
            accCurrencyId: form.senderAccount?.currencyId,
            name: form.senderAccount?.name,
            bankCode: IbanHelper.getBankId(form.senderAccount?.number),
            taxCode: form.senderAccount?.taxCode,
            balance: form.senderAccount?.balance
          },
          amount: form.amount,
          purpose: form.purpose,
          paymentDate: (form as any).documentDate?.toDate(),
          paymentValueDate: (form as any).valueDate?.toDate(),
          recipient: {
            accCurrencyCode: form.senderAccount?.currencyCode,
            accNumber: form.recipientAccount?.number,
            accCurrencyId: form.senderAccount?.currencyId,
            name: form.recipientAccount?.name,
            bankCode: IbanHelper.getBankId(form.recipientAccount?.number),
            taxCode: form.recipientAccount?.taxCode,
            balance: form.recipientAccount?.balance
          }
        };
        setTimeout(() => {
          this.onChange(paymentForm);
        });
      })
    );
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

  submitForm(): boolean {
    markFormGroupTouched(this.formGroup);

    this.paymentForm.onSubmit(null as any);
    return this.formGroup.valid;
  }
}
