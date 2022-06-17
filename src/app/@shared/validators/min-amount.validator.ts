import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function minAmountValidator(minAmount: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const userMinValue = Number((minAmount / 100).toFixed(2));
    const systemValue = +control.value || 0;
    if (systemValue < minAmount) {
      return {
        minAmount: {
          amount: userMinValue,
        },
      };
    }
    return null;
  };
}
