import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { distinctUntilChanged, take } from 'rxjs/operators';

type TConfigFn = (ctrl: AbstractControl, compareCtrl: AbstractControl) => ValidationErrors | null;

export const sameAs = withComparativeControlChanges((control: AbstractControl, comparativeControl: AbstractControl) => {
  return control.value !== comparativeControl?.value ? { sameAs: true } : null;
});

function withComparativeControlChanges(f: TConfigFn): (comparativeControl: AbstractControl) => ValidatorFn {
  return (comparativeControl: AbstractControl): ValidatorFn => {
    return (control: AbstractControl): ValidationErrors | null => {
      comparativeControl.valueChanges.pipe(distinctUntilChanged(), take(1)).subscribe(() => {
        control.updateValueAndValidity({ onlySelf: true, emitEvent: false });
      });
      return f(control, comparativeControl);
    };
  };
}
