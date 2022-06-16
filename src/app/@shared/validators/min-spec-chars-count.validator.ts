import { AbstractControl, ValidatorFn } from '@angular/forms';

export function minSpecCharsCount(count: number): ValidatorFn {
  return (control: AbstractControl) => {
    const isMatched: boolean = new RegExp(
      `(?=.*[|<>.,?/~\`;:"'!@#\$%\^\&*\)\(+=.-])|(?=.*\])|(?=.*[\[])|(?=.*\{)|(?=.*\})|(?=.*\\\\){${count},}`
    ).test(control.value);
    return !isMatched ? { minSpecCharsCount: true } : null;
  };
}
