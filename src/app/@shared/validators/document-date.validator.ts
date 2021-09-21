import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Dayjs } from 'dayjs';
import { Observable } from 'rxjs';
import { first, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

export function documentDateValidator(bankDate$: Observable<Dayjs>): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
        return bankDate$.pipe(
            map(bankDate => {
                if (control.value < bankDate) {
                    return { minDate: true };
                }
                if (control.value > bankDate.clone().add(environment.payments.dates.documentDateMaxDaysFromBankDate, 'days')) {
                    return { maxDate: true };
                }
                return null;
            }),
            first());
    };
}
