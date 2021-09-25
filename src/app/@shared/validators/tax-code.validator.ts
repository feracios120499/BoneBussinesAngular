import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';




export function taxCodeValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

        if (!validateTaxCode(control.value)) {
            return {
                taxCodeInvalid: true
            };
        }

        return null;
    };
}

export function validateTaxCode(taxCode: string): boolean {
    if (taxCode.match(/\D/)) { return false; }

    const inn = taxCode.match(/(\d)/g);

    if (!inn) {
        return false;
    }

    const hash = [-1, 5, 7, 9, 4, 6, 10, 5, 7];
    let sum = 0;
    for (let i = 0; i < (inn.length - 1); ++i) {
        const innChar = Number.parseInt(inn[i], 0);
        sum += innChar * hash[i];
    }
    const k = sum - (11 * (Math.floor(sum / 11)));

    if (k !== Number.parseInt(inn[9], 0)) {
        return false;
    }
    return true;
}
