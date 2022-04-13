import { Component, Input, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  FormArray,
  FormGroup,
  NgForm,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

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
  private isSubmitted: boolean = false;

  ngOnInit(): void {
    this.checkRequiredProps(['isLoading$']);
  }

  ngAfterViewInit(): void {
    this.formGroup.valueChanges
      .pipe(takeUntil(this.destroy$), this.formChange.bind(this))
      .subscribe();

    this.isLoading$
      .pipe(takeUntil(this.destroy$))
      .subscribe((isLoading: boolean) => {
        if (isLoading) {
          this.disableForm();
        } else {
          this.enableForm();
        }
      });
  }

  get isValid(): boolean {
    return this.formGroup.valid;
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
      if (
        abstractControl instanceof FormGroup ||
        abstractControl instanceof FormArray
      ) {
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
