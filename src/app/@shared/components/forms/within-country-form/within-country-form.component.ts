import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { BankModel } from '@models/bank.model';
import { ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { PublicActions } from '@store/public/actions';
import { PublicSelectors } from '@store/public/selectors';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { ibanValidator } from 'src/app/@shared/validators/iban.validator';
import { taxCodeValidator } from 'src/app/@shared/validators/tax-code.validator';
import { IbanHelper } from '../../../helpers/iban.helper';

@Component({
  selector: 'within-country-form',
  templateUrl: './within-country-form.component.html',
  styleUrls: ['./within-country-form.component.scss']
})
export class WithinCountryFormComponent implements OnInit {


  formGroup: FormGroup;
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
    Validators.maxLength(this.recipientTaxCodeMaxLength)
  ]);
  // ---

  // RECIPIENT BANK NAME
  recipientBankNameControl = new FormControl('', [Validators.required]);
  // --

  // PURPOSE
  purposeControl = new FormControl('', [Validators.required]);

  amountControl = new FormControl(0, [Validators.required, Validators.min(1)]);
  constructor(private store: Store) {

    this.formGroup = new FormGroup({
      docNumberAuto: this.docNumberAutoControl,
      docNumber: this.docNumberControl,
      recipientName: this.recipientNameControl,
      recipientAccountNumber: this.recipientAccountNumberControl,
      recipientTaxCode: this.recipientTaxCodeControl,
      recipientBankName: this.recipientBankNameControl,
      amount: this.amountControl,
      purpose: this.purposeControl
    });

    this.recipientBankNameControl.disable();

    this.docNumberAutoControl.valueChanges.subscribe((docNumberAuto) => {
      if (!docNumberAuto) {
        this.docNumberControl.addValidators(this.docNumberValidators);
      }
      else {
        this.docNumberControl.removeValidators(this.docNumberValidators);
      }

      this.docNumberControl.setValue('');
      this.docNumberControl.markAsUntouched();
      this.docNumberControl.updateValueAndValidity();
    });

    this.recipientAccountNumberControl.valueChanges.pipe(
      tap(() => this.recipientBankNameControl.setValue('')),
      filter((value) => IbanHelper.isIban(value) && IbanHelper.validateFormat(value)),
      map(value => IbanHelper.getBankId(value)),
      switchMap((id) => this.store.pipe(select(PublicSelectors.bank, { id }), map(bank => ({ bank, id })))),
      tap((payload) => this.recipientBankNameControl.setValue(payload.bank?.Name)),
    ).subscribe();
  }




  ngOnInit(): void {

  }
}
