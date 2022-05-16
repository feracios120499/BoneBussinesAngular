import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormArray, FormGroup, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { filter, takeUntil, tap } from 'rxjs/operators';

import { withRequiredPropsCheck } from '@mixins/with-required-props-check.mixin';
import { withDestroy } from '@mixins/with-destroy.mixin';

@Component({
  template: '',
})
export abstract class BaseSubFormComponent
  extends withRequiredPropsCheck(withDestroy(class {}))
  implements OnInit, ControlValueAccessor
{
  @Input() isLoading$!: Observable<boolean>;
  abstract formGroup: FormGroup;
  abstract formRef: NgForm;
  private isSubmitted = false;
  private initialValue: any;
  private formValueChanged = false;

  ngOnInit(): void {
    this.checkRequiredProps(['isLoading$']);
  }

  ngAfterViewInit(): void {
    this.formGroup.valueChanges
      .pipe(
        takeUntil(this.destroy$),
        this.formChange.bind(this),
        tap((value) => {
          if (this.formGroup.pristine) {
            this.initialValue = value;
          }
        }),
        filter(() => this.formGroup.dirty)
      )
      .subscribe((value) => {
        this.formValueChanged = JSON.stringify(value) !== JSON.stringify(this.initialValue);
      });

    this.isLoading$.pipe(takeUntil(this.destroy$)).subscribe((isLoading: boolean) => {
      if (isLoading) {
        this.disableForm();
      } else {
        this.enableForm();
      }
    });
  }

  get isChanged(): boolean {
    return this.formValueChanged;
  }

  get isValid(): boolean {
    return this.formGroup.valid;
  }

  get isDisabled(): boolean {
    return this.formGroup.disabled;
  }

  resetForm(): void {
    this.formGroup.reset();
  }

  submitForm(): boolean {
    this.formRef.onSubmit(null as any);
    if (this.isSubmitted) {
      return false;
    }
    this.formGroup.markAllAsTouched();
    this.updateTreeValidity(this.formGroup);
    return this.formGroup.valid;
  }

  abstract writeValue(value: any): void;

  protected abstract formChange(value$: Observable<any>): Observable<any>;

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  protected onChange = (value: any) => {};

  protected onTouched = () => {};

  protected updateTreeValidity(group: FormGroup | FormArray): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = (group.controls as any)[key];
      if (abstractControl instanceof FormGroup || abstractControl instanceof FormArray) {
        this.updateTreeValidity(abstractControl);
      } else {
        abstractControl.updateValueAndValidity();
      }
    });
  }

  private enableForm(): void {
    this.isSubmitted = false;
  }

  private disableForm(): void {
    this.isSubmitted = true;
  }
}
