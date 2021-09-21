import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Dayjs } from 'dayjs';

export function minDateValidator(minDate: Dayjs): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        if (control.value < minDate) {
            return { minDate: true };
        }

        return null;
    };
}
