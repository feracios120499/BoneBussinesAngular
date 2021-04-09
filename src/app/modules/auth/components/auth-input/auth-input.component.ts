import { Component, forwardRef, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'auth-input',
  templateUrl: './auth-input.component.html',
  styleUrls: ['./auth-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AuthInputComponent),
      multi: true
    }
  ]
})
export class AuthInputComponent implements ControlValueAccessor {

  constructor() {
  }

  @Input() label: string | undefined;
  @Input() control: FormControl | undefined;
  @Input() name: string | undefined;
  @Input() type: string | undefined;
  @Input() disabled = false;
  @Output() authChange = new EventEmitter();
  onChange: any = () => {
    this.authChange.emit();
  }

  onTouch: any = () => { };
  val: any;


  set value(val: any) {
    if (val !== undefined && this.val !== val) {
      this.val = val;
      this.onChange(val);
      this.onTouch(val);
    }

  }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }

}
