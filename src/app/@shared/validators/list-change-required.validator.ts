import {
  AbstractControl,
  FormArray,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

export function listChangeRequired(compareArray: boolean[]): ValidatorFn {
  return (formArray: AbstractControl): ValidationErrors | null => {
    const controls: AbstractControl[] = (formArray as FormArray).controls;
    if (!controls.length || controls.length !== compareArray.length) {
      return null;
    }
    const isChanged: boolean = compareArray.some(
      (value: boolean, i: number) =>
        value !== ((formArray as FormArray).value as boolean[])[i]
    );
    return !isChanged ? { listChangeRequired: true } : null;
  };
}
