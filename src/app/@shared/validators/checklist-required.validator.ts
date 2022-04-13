import { AbstractControl, FormArray, ValidationErrors } from '@angular/forms';

export function checklistRequired(
  formArray: AbstractControl
): ValidationErrors | null {
  const controls: AbstractControl[] = (formArray as FormArray).controls;
  if (!controls.length) {
    return null;
  }
  const isChecked: boolean = (formArray.value as boolean[]).includes(true);
  return !isChecked ? { checkListRequired: true } : null;
}
