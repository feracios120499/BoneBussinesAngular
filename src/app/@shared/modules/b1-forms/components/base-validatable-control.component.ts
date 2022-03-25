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
        value: this.c.errors!.pattern['value'],
      }),
      unique: () => ({ text: 'already exists.' }),
      uniqueInArray: () => ({
        text: 'with next value is already exists:',
        value: this.c.errors!.uniqueInArray['value'],
      }),
      uniqueForInArray: () => ({
        text: 'must belong to only one',
        value: this.c.errors!.uniqueForInArray['value'],
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
        value: this.c.errors!.min['value'],
      }),
      max: () => ({
        text: `can't be greater than`,
        value: this.c.errors!.max['value'],
      }),
      minlength: () => ({
        text: `can't contain less than`,
        value: this.c.errors!.minlength['requiredLength'],
      }),
      maxlength: () => ({
        text: `can't contain symbols more than`,
        value: this.c.errors!.maxlength['requiredLength'],
      }),
      lessThan: () => ({
        text: `can't be less than`,
        value: this.c.errors!.lessThan['value'],
      }),
      moreThan: () => ({
        text: `can't be greater than`,
        value: this.c.errors!.moreThan['value'],
      }),
      acceptableFiles: () => ({
        text: 'must have one of the following formats:',
        value: this.c.errors!.acceptableFiles['value'],
      }),
    };
  }

  get error(): IErrorData | null {
    if (!this.c.errors) {
      return null;
    }
    return this.validations[this.firstInvalid]();
  }

  private get firstInvalid(): string {
    return Object.keys(this.c.errors!)[0];
  }
}
