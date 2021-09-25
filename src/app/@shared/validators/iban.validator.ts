import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { IbanHelper } from '../helpers/iban.helper';


export function ibanValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

        const length = control.value?.length || 0;
        if (length !== IbanHelper.ibanLength) {
            return {
                ibanLength: {
                    requiredLength: IbanHelper.ibanLength,
                    actualLength: length
                }
            };
        }
        if (!IbanHelper.validateFormat(control.value)) {
            return {
                ibanFormat: true
            };
        }

        if (!IbanHelper.validateCheckSum(control.value)) {
            return {
                ibanCheckSum: true
            };
        }

        if (!IbanHelper.validate(control.value)) {
            return {
                ibanInvalid: true
            };
        }

        return null;
    };
}
