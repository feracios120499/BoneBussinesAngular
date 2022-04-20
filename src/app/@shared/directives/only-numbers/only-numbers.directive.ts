import { Directive, ElementRef, HostListener, Input, Optional, Self } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl, NgModel } from '@angular/forms';

@Directive({
    selector: 'input[only-numbers]'
})
export class OnlyNumbersDirective implements ControlValueAccessor {
    constructor(private el: ElementRef, @Optional() private ngModel?: NgModel, @Self() @Optional() private formContol?: NgControl) { }
    private prevValue: string | number = '';

    @Input() maxlength: string | number = 15;

    private onChange = (value: any) => { };
    private onTouched = () => { };

    writeValue(obj: any): void {
        this.setValue(obj);
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }
    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    private setValue(value: string | number): void {
        console.log(value);
        const selectionPosition = this.el.nativeElement.selectionStart;
        this.el.nativeElement.value = value;

        this.onChange(value);
        this.ngModel?.update.emit(value);
        this.formContol?.control?.setValue(value);
        this.prevValue = value;

        this.el.nativeElement.selectionStart = selectionPosition - 1;
        this.el.nativeElement.selectionEnd = selectionPosition - 1;
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
        this.onTouched();
    }

    private isValid(value: string): boolean {
        const isValid = new RegExp(`^[0-9]{0,${this.maxlength}}$`).test(value);
        return isValid;
    }
}
