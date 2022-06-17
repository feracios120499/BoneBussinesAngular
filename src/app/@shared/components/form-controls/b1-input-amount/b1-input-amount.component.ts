import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { TValue } from '@form-controls/base-control.component';
import { BaseValidatableControlComponent } from '@form-controls/base-validatable-control.component';
import { provideValueAccessor } from '@methods/provide-value-accessor.method';

@Component({
  selector: 'b1-input-amount',
  templateUrl: './b1-input-amount.component.html',
  styleUrls: ['./b1-input-amount.component.scss'],
  providers: [provideValueAccessor(B1InputAmountComponent)],
})
export class B1InputAmountComponent extends BaseValidatableControlComponent implements OnInit {
  handleValue(value: TValue): void {
    if (!this.viewValue) {
      this.amount = 0;
    } else {
      this.amount = Math.round(parseFloat(parseFloat(this.viewValue).toFixed(this.digits)) * Math.pow(10, this.digits));
    }
    this.onChange(this.amount);
  }
  viewValue = '';
  disabled = false;
  @Input() digits = 2;
  @Input() label = 'components.pay.amount';
  @Input() maxlength = 15;
  @Input() labelTop = false;
  amount = 0;

  onChange = (value: any) => {};
  private onTouched = () => {};

  writeValue(amount: number): void {
    this.amount = amount;
    if (this.amount) {
      this.viewValue = (this.amount / Math.pow(10, this.digits)).toFixed(this.digits);
    } else {
      this.viewValue = '';
    }
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

  onInputFocus(): void {
    if (this.amount === 0) {
      this.viewValue = '';
    }
  }

  onBlur(): void {
    this.onTouched();
  }

  ngOnInit(): void {}
}
