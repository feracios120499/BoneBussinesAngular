import { Input, Directive, ElementRef, HostListener } from '@angular/core';
import { ControlValueAccessor, NgModel } from '@angular/forms';

@Directive({
    selector: 'input[decimalNumbers]',
})
export class DecimalNumbersDirective implements ControlValueAccessor {

    constructor(private el: ElementRef) { }
    private prevValue: string | number = 0;

    @Input() emptyValue: string | number = 0;
    @Input() decimals = 2;
    @Input() maxlength = 15;

    private onlyNumbersRegex = `^(\\d[0-9]{0,${this.maxlength - 2 - this.decimals}})?(\\.[0-9]{0,${this.decimals}})?$`;

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

    private setValue(value: string | number): void {
        const selectionPosition = this.el.nativeElement.selectionStart;
        this.el.nativeElement.value = value;

        this.onChange(value);
        this.prevValue = value;

        setTimeout(() => {
            this.el.nativeElement.selectionStart = selectionPosition;
            this.el.nativeElement.selectionEnd = selectionPosition;
        }, 0);
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
        this.setValue(this.format(this.el.nativeElement.value));
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
        const isValid = new RegExp(this.onlyNumbersRegex).test(value);
        return isValid;
    }
}
