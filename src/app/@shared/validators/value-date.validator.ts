import { AbstractControl, AsyncValidatorFn, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Dayjs } from 'dayjs';
import { Observable } from 'rxjs';
import { first, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

export function valueDateValidator(dates$: Observable<{ valueDate: Dayjs, documentDate: Dayjs }>): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

        return dates$.pipe(
            map((dates) => {
                if (dates.valueDate < dates.documentDate) {
                    return { minDate: true };
                }
                if (dates.valueDate > dates.documentDate.clone().add(environment.payments.dates.valueDateMaxDaysFromDocumentDate, 'days')) {
                    return { maxDate: true };
                }
                return null;
            }),
            tap(console.log)
        );
    };
}
