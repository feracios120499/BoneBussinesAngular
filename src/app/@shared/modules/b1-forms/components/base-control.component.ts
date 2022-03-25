import {
  Component,
  AfterViewInit,
  Input,
  ViewChild,
  ElementRef,
  Renderer2,
  ChangeDetectorRef,
} from '@angular/core';
import { ControlValueAccessor, AbstractControl } from '@angular/forms';

import { withRequiredPropsCheck } from '@mixins/with-required-props-check.mixin';
import { generateId } from '@methods/generate-id.method';

export type TValue = string | number | boolean;

@Component({
  template: '',
})
export abstract class BaseControlComponent
  extends withRequiredPropsCheck()
  implements AfterViewInit, ControlValueAccessor
{
  @Input() controlId: number | string = generateId();
  @Input() name?: string;
  @Input() c!: AbstractControl;

  value!: TValue;
  isDisabled = false;

  @ViewChild('labelRef') protected labelRef!: ElementRef<HTMLLabelElement>;
  @ViewChild('formControlRef')
  protected formControlRef!: ElementRef<HTMLInputElement>;

  constructor(
    protected renderer: Renderer2,
    protected changeDetectorRef: ChangeDetectorRef
  ) {
    super();
  }

  ngAfterViewInit(): void {
    if (this.formControlRef.nativeElement.form) {
      this.checkRequiredProps(['c']);
    }
    if (!this.labelRef.nativeElement.textContent) {
      throw new Error('Label text is required!');
    }
  }

  get labelText(): string {
    return this.labelRef.nativeElement.textContent!;
  }

  writeValue(value: TValue): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onFocusOut = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  focus(): void {
    this.formControlRef.nativeElement.focus();
  }

  blur(): void {
    this.formControlRef.nativeElement.blur();
  }

  protected onChange(value: string | File | FileList): void {}

  protected onFocusOut(): void {}
}
