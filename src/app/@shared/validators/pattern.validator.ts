import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function pattern(
  regExp: RegExp | RegExp[],
  caller?: (control: AbstractControl) => ValidationErrors | null,
  example: string = ''
): ValidatorFn {
  const patternName: string = caller?.name || 'pattern';
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value === '') {
      return null;
    }
    let isMatched: boolean;

    if (Array.isArray(regExp)) {
      isMatched = regExp.some((re: RegExp) => re.test(control.value));
    } else {
      isMatched = regExp.test(control.value);
    }
    return !isMatched ? { [patternName]: { value: example } } : null;
  };
}
