import { Component, forwardRef, Input, OnChanges, OnInit, Optional, Self, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroupDirective, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PaymentType } from '@models/payment-type.model';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { PublicSelectors } from '@store/public/selectors';
import { Dayjs } from 'dayjs';
import { round } from 'mathjs';
import { setValue } from 'ngrx-forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'payment-purpose-form',
  templateUrl: './payment-purpose-form.component.html',
  styleUrls: ['./payment-purpose-form.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => PaymentPurposeFormComponent),
    multi: true
  }]
})
export class PaymentPurposeFormComponent implements OnInit, OnChanges, ControlValueAccessor {

  @Input() maxlength = 160;
  @Input() formControl!: FormControl;
  @Input() form!: FormGroupDirective;
  @Input() amount!: number;

  viewValue = '';
  addedText = '';
  withVat = false;
  withoutVat = false;
  budget = false;
  withVatValue = environment.tax.vat.toFixed(2);
  withVatTemplate = 'ПДВ {percent}% - {amount} {code}';
  withoutVatTemplate = 'без ПДВ';
  includingTemplate = 'у т.ч.';
  payTypes$ = this.store.select(PublicSelectors.payTypes);
  payType?: PaymentType;
  taxCode?: string;
  explanatoryInfo?: string;
  showNotRequiredFields = false;
  registerDate?: Dayjs;
  conclusionNumber?: string;
  billNumber?: string;

  private onChange = (value: any) => { };
  private onTouched = () => { };

  constructor(private store: Store) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.amount) {
      this.calcTaxes();
    }
  }

  writeValue(obj: any): void {
    this.viewValue = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onBlur(): void {
    this.onTouched();
  }

  onModelChange(): void {
    this.setValue(this.viewValue);

  }

  private setValue(value: string): void {
    this.onChange(this.viewValue);
    this.formControl?.updateValueAndValidity();

    console.log(this.formControl);;
  }
  checkSum(event: any): void {
    if (!this.amount) {
      this.amount = 0;
    }
  }

  blurTax(): void {
    if (!this.withVatValue) {
      this.withVatValue = '0.00';
    }
    if (this.withVatValue.startsWith('.')) {
      this.withVatValue = `0${this.withVatValue}`;
    }

    this.calcTaxes();
  }

  calcTaxes(): void {
    this.withoutVat = this.budget = false;
    this.removeAddedText();

    if (this.withVat) {
      const tax = parseFloat(parseFloat(this.withVatValue).toFixed(2));

      const realSum = parseFloat(((+this.amount) / (100 + tax)).toFixed(2));

      this.addedText = ' ' + this.includingTemplate;
      const vat = ((tax / 100) * realSum);
      this.addedText += ' ' + this.withVatTemplate
        .replace('{percent}', Number(this.withVatValue).toFixed(2))
        .replace('{amount}', vat.toFixed(2))
        .replace('{code}', '');

      if (this.addedText) {
        this.addText(this.addedText);
      }
    }
  }

  withoutVatChange(): void {
    this.withVat = this.budget = false;
    this.removeAddedText();

    if (this.withoutVat) {
      this.addedText += ' ' + this.withoutVatTemplate;
    }

    if (this.addedText) {
      this.addText(this.addedText);
    }
  }

  budgetChange(): void {
    this.withVat = this.withoutVat = false;
    this.removeAddedText();
  }
  clearNotRequiredFields(): void {
    this.registerDate = this.conclusionNumber = this.billNumber = undefined;
  }

  buildPurpose(event: any): void {
    event.preventDefault();

    this.removeAddedText();
    if (this.taxCode) {
      this.taxCode = this.pad(this.taxCode, 8);
    }
    console.log(this.registerDate);
    this.addedText = '*'
      + ';' + (this.payType?.Code || '')
      + ';' + (this.taxCode || '')
      + ';' + (this.explanatoryInfo || '')
      + ';' + (this.registerDate ? this.registerDate.format('DD.MM.YYYY') : '')
      + ';' + (this.conclusionNumber || '')
      + ';' + (this.billNumber || '');

    this.addText(this.addedText);
  }

  private removeAddedText(): void {
    if (this.addedText) {
      const index = this.viewValue.indexOf(this.addedText);
      if (index >= 0) {
        this.viewValue = this.viewValue.slice(0, index)
          + this.viewValue.slice(index + this.addedText.length);
        this.setValue(this.viewValue);
      }
      this.addedText = '';
    }
  }

  private addText(text: string): void {
    this.viewValue += this.addedText;
    this.viewValue = this.viewValue.substr(0, this.maxlength);

    this.setValue(this.viewValue);
  }

  private pad(num: string, size: number): string {
    let s = num + '';
    while (s.length < size) { s = '0' + s; }
    return s;
  }

  ngOnInit(): void {
  }

}
