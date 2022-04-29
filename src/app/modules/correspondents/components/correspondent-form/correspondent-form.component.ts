import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { distinctUntilChanged, filter, map, switchMap, takeUntil, tap } from 'rxjs/operators';

import { provideValueAccessor } from '@methods/provide-value-accessor.method';
import { BaseSubFormComponent } from '@form-controls/base-sub-form.component';
import { CorrespondentForm } from '@modules/correspondents/models/correspondent-form.model';
import { ModelControl } from '@b1-types/model-controls.type';
import { distinctUntilObjectChanged } from '@custom-operators/distinct-until-object-changed.operator';
import { IbanHelper } from '@helpers/iban.helper';
import { ibanValidator } from '@validators/iban.validator';
import { BankModel } from '@models/bank.model';
import { BanksStoreService } from '@services/banks-store.service';

const { required, minLength, maxLength } = Validators;

@Component({
  selector: 'app-correspondent-form',
  templateUrl: './correspondent-form.component.html',
  styleUrls: ['./correspondent-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideValueAccessor(CorrespondentFormComponent)],
})
export class CorrespondentFormComponent extends BaseSubFormComponent implements OnInit {
  formGroup!: FormGroup;
  // NAME:
  nameMaxLength = 38;
  nameControl = new FormControl('', [required, maxLength(this.nameMaxLength)]);
  // TAX CODE:
  taxCodeMinLength = 8;
  taxCodeMaxLength = 10;
  taxCodeControl = new FormControl('', [required, minLength(this.taxCodeMinLength), maxLength(this.taxCodeMaxLength)]);
  // ACCOUNT:
  accountMinLength = IbanHelper.ibanLength;
  accountMaxLength = IbanHelper.ibanLength;
  accountControl = new FormControl('', [required, ibanValidator()]);
  // UNVALIDATED & DISABLED:
  bankNameControl = new FormControl({ value: '', disabled: true });
  bankCodeControl = new FormControl({ value: '', disabled: true });
  currencyCodeControl = new FormControl({ value: 'UAH', disabled: true });

  @ViewChild('formRef') formRef!: NgForm;

  constructor(private banksService: BanksStoreService) {
    super();
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.initForm();
    this.accountControl.valueChanges.pipe(takeUntil(this.destroy$), this.accountChange).subscribe();
  }

  writeValue(value: CorrespondentForm): void {
    if (!value) {
      return;
    }
    this.formGroup.patchValue(value);
    this.updateTreeValidity(this.formGroup);
  }

  private initForm(): void {
    const controls: ModelControl<CorrespondentForm> = {
      name: this.nameControl,
      taxCode: this.taxCodeControl,
      accNumber: this.accountControl,
      accCurrencyCode: this.currencyCodeControl,
      bankName: this.bankNameControl,
      bankCode: this.bankCodeControl,
    };
    this.formGroup = new FormGroup(controls);
  }

  protected formChange(formValue$: Observable<CorrespondentForm>): Observable<CorrespondentForm> {
    return formValue$.pipe(
      map(() => this.formGroup.getRawValue()),
      distinctUntilObjectChanged(),
      tap((formValue: CorrespondentForm) => {
        this.onChange(formValue);
      })
    );
  }

  private accountChange = (source$: Observable<string>): Observable<BankModel | undefined> => {
    return source$.pipe(
      takeUntil(this.destroy$),
      distinctUntilChanged(),
      tap(() => this.bankNameControl.setValue('')),
      filter((account: string) => IbanHelper.isIban(account) && IbanHelper.validateFormat(account)),
      map((account: string) => IbanHelper.getBankId(account)!),
      tap((bankCode: string) => this.bankCodeControl.setValue(bankCode)),
      switchMap((id: string) => this.banksService.getBank(id)),
      tap((value: BankModel | undefined) => this.bankNameControl.setValue(value?.name))
    );
  };
}
