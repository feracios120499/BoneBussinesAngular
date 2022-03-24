import { AbstractControl, ValidatorFn } from '@angular/forms';

export const emailRegExp: RegExp =
  // eslint-disable-next-line max-len
  /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;

export const phoneRegExp: RegExp = /^[0-9\-\+]{9,15}$/;

export function pattern(
  regExp: RegExp | RegExp[],
  example: string = ''
): ValidatorFn {
  return (control: AbstractControl): { pattern: { value: string } } | null => {
    if (control.value === '') {
      return null;
    }
    let isMatched: boolean;

    if (Array.isArray(regExp)) {
      isMatched = regExp.some((re: RegExp) => re.test(control.value));
    } else {
      isMatched = regExp.test(control.value);
    }
    return !isMatched ? { pattern: { value: example } } : null;
  };
}
