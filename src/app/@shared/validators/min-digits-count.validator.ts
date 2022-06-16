import { AbstractControl, ValidatorFn } from '@angular/forms';

export function minDigitsCount(count: number): ValidatorFn {
  return (control: AbstractControl) => {
    const isMatched: boolean = new RegExp(`(?=.*[0-9]){${count},}`).test(control.value);
    return !isMatched ? { minDigitsCount: true } : null;
  };
}
