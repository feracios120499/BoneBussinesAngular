import { Input, Directive, ElementRef, HostListener, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl, NgModel } from '@angular/forms';

@Directive({
    selector: 'input[decimalNumbers]',
})
export class DecimalNumbersDirective implements ControlValueAccessor {
    constructor(private el: ElementRef, @Optional() private ngModel?: NgModel, @Self() @Optional() private formContol?: NgControl) { }
    private prevValue: string | number = 0;

    @Input() emptyValue: string | number = 0;
    @Input() decimals = 2;
    @Input() maxlength = 15;

    // private onlyNumbersRegex = `^(\\d[0-9]{0,${this.maxlength - 2 - this.decimals}})?(\\.[0-9]{0,${this.decimals}})?$`;

    private onChange = (value: any) => { };
    private onTouched = () => { };

    writeValue(obj: any): void {
        this.setValue(this.format(obj));
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }
    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    private setValue(value: string | number, changePosition: boolean = true): void {
        const selectionPosition = this.el.nativeElement.selectionStart;
        this.el.nativeElement.value = value;

        this.onChange(value);
        this.ngModel?.update.emit(value);
        this.formContol?.control?.setValue(value);
        this.prevValue = value;

        if (changePosition) {
            this.el.nativeElement.selectionStart = selectionPosition - 1;
            this.el.nativeElement.selectionEnd = selectionPosition - 1;
        }
    }

    @HostListener('input', ['$event'])
    onKeyDown(event: KeyboardEvent): void {
        const value = this.el.nativeElement.value;

        if (!value) {
            this.prevValue = '';
            return;
        }
        if (!this.isValid(value)) {
            this.setValue(this.prevValue);
            return;
        }

        this.prevValue = value;
    }

    @HostListener('blur', ['$event'])
    onBlur(event: any): void {
        this.setValue(this.format(this.el.nativeElement.value), false);
        this.onTouched();
    }

    private format(value: string): string {
        let floatValue = parseFloat(value);

        if (!floatValue || Number.isNaN(floatValue)) {
            floatValue = 0;
        }

        return floatValue.toFixed(this.decimals);
    }

    private isValid(value: string): boolean {
        const isValid = new RegExp(`^(\\d[0-9]{0,${this.maxlength - 2 - this.decimals}})?(\\.[0-9]{0,${this.decimals}})?$`).test(value);
        return isValid;
    }
}
