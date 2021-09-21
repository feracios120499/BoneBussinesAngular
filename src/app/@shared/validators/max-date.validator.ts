import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Dayjs } from 'dayjs';

export function maxDateValidator(minDate: Dayjs): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        if (control.value > minDate) {
            return { maxDate: true };
        }

        return null;
    };
}
