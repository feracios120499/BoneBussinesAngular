import { Component, AfterViewInit, Input, ViewChild, ElementRef, Renderer2, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor, AbstractControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

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
  @Input() controlId: number | string = `control-${generateId()}`;
  @Input() name?: string;
  @Input() formControl!: AbstractControl;

  value!: TValue;
  isDisabled = false;

  @ViewChild('labelRef') protected labelRef!: ElementRef<HTMLLabelElement>;
  @ViewChild('formControlRef')
  protected formControlRef!: ElementRef<HTMLInputElement>;

  constructor(
    protected renderer: Renderer2,
    protected changeDetectorRef: ChangeDetectorRef,
    protected translateService: TranslateService
  ) {
    super();
  }

  abstract handleValue(value: TValue): void;

  ngAfterViewInit(): void {
    if (this.formControlRef.nativeElement.form) {
      this.checkRequiredProps(['formControl']);
    }
    if (!this.labelRef.nativeElement.innerHTML) {
      throw new Error('Label text is required!');
    }
  }

  get labelText(): string {
    return this.labelRef.nativeElement.textContent!;
  }

  writeValue(value: TValue): void {
    this.value = value;
    // to trigger check-value.directive:
    this.changeDetectorRef.detectChanges();
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

  protected onChange(value: string | boolean | File | FileList): void {}

  protected onFocusOut(): void {}
}
