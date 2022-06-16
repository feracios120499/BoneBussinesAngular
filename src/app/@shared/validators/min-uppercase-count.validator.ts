import { AbstractControl, ValidatorFn } from '@angular/forms';

export function minUppercaseCount(count: number): ValidatorFn {
  return (control: AbstractControl) => {
    const isMatched: boolean = new RegExp(`(?=.*[A-Z]){${count},}`).test(control.value);
    return !isMatched ? { minUppercaseCount: true } : null;
  };
}
