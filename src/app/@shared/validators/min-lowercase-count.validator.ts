import { AbstractControl, ValidatorFn } from '@angular/forms';

export function minLowercaseCount(count: number): ValidatorFn {
  return (control: AbstractControl) => {
    const isMatched: boolean = new RegExp(`(?=.*[a-z]){${count},}`).test(control.value);
    return !isMatched ? { minLowercaseCount: true } : null;
  };
}
