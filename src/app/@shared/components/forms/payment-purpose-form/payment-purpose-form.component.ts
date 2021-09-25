import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroupDirective, NG_VALUE_ACCESSOR } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { round } from 'mathjs';
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
export class PaymentPurposeFormComponent implements OnInit, ControlValueAccessor {

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

  private onChange = (value: any) => { };
  private onTouched = () => { };
  constructor(private translateService: TranslateService) { }

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
    this.onChange(this.viewValue);
  }

  checkSum(event: any): void {
    if (!this.amount) {
      event.stopPropagation();
      event.preventDefault();
    }
  }

  blurTax(): void {
    if (!this.withVatValue) {
      this.withVatValue = '0.00';
    }
    if (this.withVatValue.startsWith('.')) {
      this.withVatValue = `0${this.withVatValue}`;
    }
    debugger;;
    this.withVatValue = round(parseFloat(this.withVatValue) / 100).toFixed(2).toString();
    console.log(this.withVatValue);
    this.calcTaxes();
  }

  calcTaxes(): void {
    if (this.addedText) {
      const index = this.viewValue.indexOf(this.addedText);
      if (index >= 0) {
        this.viewValue = this.viewValue.slice(0, index)
          + this.viewValue.slice(index + this.addedText.length);
      }
      this.addedText = '';
    }

    if (this.withVat) {
      const tax = parseFloat(parseFloat(this.withVatValue).toFixed(2));

      const realSum = parseFloat(((+this.amount) / (100 + tax)).toFixed(2));

      this.addedText = ' ' + this.translateService.instant('components.pay.including');
      const vat = ((tax / 100) * realSum);
      this.addedText += ' ' + this.withVatTemplate
        .replace('{percent}', Number(this.withVatValue).toFixed(2))
        .replace('{amount}', vat.toFixed(2))
        .replace('{code}', '');

      if (this.addedText) {
        this.viewValue += this.addedText;
      }
    }


  }

  ngOnInit(): void {
  }

}
