import { Component, AfterViewInit } from '@angular/core';

import { BaseControlComponent } from './base-control.component';

interface IErrorData {
  text: string;
  value?: Date | string | number;
}

@Component({
  template: '',
})
export abstract class BaseValidatableControlComponent
  extends BaseControlComponent
  implements AfterViewInit
{
  // @Input() labelForError!: string;

  ngAfterViewInit(): void {
    // super.ngAfterViewInit();
    // if (this.formControlRef.nativeElement.form) {
    //   this.checkRequiredProps(['labelForError']);
    // }
  }

  private get validations(): { [key: string]: () => IErrorData } {
    return {
      required: () => ({ text: 'is required.' }),
      pattern: () => ({
        text: 'is not properly formatted.',
        value: this.formControl.errors!.pattern['value'],
      }),
      unique: () => ({ text: 'already exists.' }),
      uniqueInArray: () => ({
        text: 'with next value is already exists:',
        value: this.formControl.errors!.uniqueInArray['value'],
      }),
      uniqueForInArray: () => ({
        text: 'must belong to only one',
        value: this.formControl.errors!.uniqueForInArray['value'],
      }),
      uniqueEmail: () => ({ text: 'already exists.' }),
      registeredEmail: () => ({
        text: `There's no user registered with this email address.`,
      }),
      password: () => ({ text: 'Password is invalid.' }),
      auth: () => ({ text: 'Email/phone or password is invalid.' }),
      sameAs: () => ({ text: 'must be equal to each other.' }),
      min: () => ({
        text: `can't be less than`,
        value: this.formControl.errors!.min['value'],
      }),
      max: () => ({
        text: `can't be greater than`,
        value: this.formControl.errors!.max['value'],
      }),
      minlength: () => ({
        text: `can't contain less than`,
        value: this.formControl.errors!.minlength['requiredLength'],
      }),
      maxlength: () => ({
        text: `can't contain symbols more than`,
        value: this.formControl.errors!.maxlength['requiredLength'],
      }),
      lessThan: () => ({
        text: `can't be less than`,
        value: this.formControl.errors!.lessThan['value'],
      }),
      moreThan: () => ({
        text: `can't be greater than`,
        value: this.formControl.errors!.moreThan['value'],
      }),
      acceptableFiles: () => ({
        text: 'must have one of the following formats:',
        value: this.formControl.errors!.acceptableFiles['value'],
      }),
    };
  }

  get error(): IErrorData | null {
    if (!this.formControl.errors) {
      return null;
    }
    return this.validations[this.firstInvalid]();
  }

  private get firstInvalid(): string {
    return Object.keys(this.formControl.errors!)[0];
  }
}
