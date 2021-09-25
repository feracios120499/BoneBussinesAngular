import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { round } from 'mathjs';

@Component({
  selector: 'b1-input-amount',
  templateUrl: './b1-input-amount.component.html',
  styleUrls: ['./b1-input-amount.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => B1InputAmountComponent),
    multi: true
  }]
})
export class B1InputAmountComponent implements OnInit, ControlValueAccessor {

  get viewMaxLength(): number {
    const regex = `^\\d+\\.`;

    if (new RegExp(regex, 'gi').test(this.viewValue)) {
      return this.maxlength;
    }
    else {
      return this.maxlength - this.digits - 1;
    }
  }

  viewValue = '';
  disabled = false;
  @Input() digits = 2;
  @Input() label = 'components.pay.amount';
  @Input() maxlength = 15;
  amount = 0;

  mask = `0*.${'0'.repeat(this.digits)}`;

  private onChange = (value: any) => { };
  private onTouched = () => { };

  writeValue(amount: number): void {
    console.log(this.mask);
    this.amount = amount;
    this.updateView();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  updateValue(): void {
    if (!this.viewValue) {
      this.amount = 0;
    }
    else {
      this.amount = Math.round(parseFloat(parseFloat(this.viewValue).toFixed(this.digits)) * Math.pow(10, this.digits));
    }
    this.onChange(this.amount);
  }

  onInputFocus(): void {
    if (this.amount === 0) {
      this.viewValue = '';
    }
  }

  onBlur(): void {
    this.updateView();
    this.onTouched();
  }

  updateView(): void {
    this.viewValue = round(this.amount / (Math.pow(10, this.digits)), this.digits).toFixed(this.digits).toString();
  }

  ngOnInit(): void {
  }

}
