import { Component, ElementRef, forwardRef, Input, OnInit, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import dayjs, { Dayjs } from 'dayjs';

@Component({
  selector: 'b1-single-picker',
  templateUrl: './b1-single-picker.component.html',
  styleUrls: ['./b1-single-picker.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => B1SinglePickerComponent),
    multi: true
  }]
})
export class B1SinglePickerComponent implements OnInit, ControlValueAccessor {

  private format = 'YYYY-MM-DD';

  constructor() { }

  @Input() max?: Dayjs;
  @Input() min?: Dayjs;
  @Input() class!: string;
  @ViewChild('picker') nativePicker!: ElementRef;

  get nativeMin(): string | undefined {
    return this.min?.format(this.format);
  }

  get nativeMax(): string | undefined {
    return this.max?.format(this.format);
  }

  value?: Dayjs;
  nativeValue?: string;
  disabled = false;

  private onChange = (value: any) => { };
  private onTouched = () => { };

  writeValue(date: any): void {
    if (date) {
      if (dayjs.isDayjs(date)) {
        this.value = date;
      }
      else {
        this.value = dayjs(date);
      }
      this.nativeValue = this.value.format(this.format);
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

  onModelChange(): void {
    if (this.value) {
      this.onChange(this.toDate(this.value));
    }
    else {
      this.onChange(undefined);
    }
  }

  onNativeModelChange(): void {
    if (this.nativeValue) {
      let value = this.toDate(dayjs(this.nativeValue, this.format));
      if (this.min && value.isBefore(this.min)) {
        value = this.min.clone();
        this.nativeValue = value.format(this.format);
        this.nativePicker.nativeElement.value = this.nativeValue;
      }
      if (this.max && value.isAfter(this.max)) {
        value = this.max.clone();
        this.nativeValue = value.format(this.format);
        this.nativePicker.nativeElement.value = this.nativeValue;
      }

      this.value = value;
      // this.onChange(this.value);
    }
    else {
      this.value = undefined;
      // this.onChange(undefined);
    }
  }

  onBlur(): void {
    this.onTouched();
  }

  toDate(dateTime: Dayjs): Dayjs {
    return dayjs(dateTime.format('YYYY-MM-DD'), 'YYYY-MM-DD');
  }

  ngOnInit(): void {
  }

}
