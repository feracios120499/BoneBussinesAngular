import { AbstractControl, ValidationErrors } from '@angular/forms';
import { pattern } from './pattern.validator';

// eslint-disable-next-line max-len
// export const phoneRegExp: RegExp =
//   /^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm;
export const phoneRegExp: RegExp = /^[0-9\-\+]{9,15}$/;

export function phone(control: AbstractControl): ValidationErrors | null {
  return pattern(phoneRegExp, phone)(control);
}
