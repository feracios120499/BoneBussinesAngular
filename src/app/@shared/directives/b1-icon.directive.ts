import { AfterViewInit, Directive, ElementRef, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';


@Directive({
    selector: '[b1-icon]'
})
export class B1IconDirective implements OnChanges {

    @Input()
    icon!: string;


    constructor(private elementRef: ElementRef) {

    }
    ngOnChanges(changes: SimpleChanges): void {
        if (changes.icon.currentValue !== changes.icon.previousValue && changes.icon.currentValue) {
            if (!this.elementRef.nativeElement.classList.contains('b1-icons')) {
                this.elementRef.nativeElement.classList.add('b1-icons');
            }
            if (this.elementRef.nativeElement.classList.contains(`b1-icons-icon-${changes.icon.previousValue}`)) {
                this.elementRef.nativeElement.classList.remove(`b1-icons-icon-${changes.icon.previousValue}`);
            }
            if (!this.elementRef.nativeElement.classList.contains(`b1-icons-icon-${this.icon}`)) {
                this.elementRef.nativeElement.classList.add(`b1-icons-icon-${this.icon}`);
            }
        }
    }

    // ngAfterViewInit(): void {
    //     if (!this.elementRef.nativeElement.classList.contains('b1-icons')) {
    //         this.elementRef.nativeElement.classList.add('b1-icons');
    //     }
    //     if (!this.elementRef.nativeElement.classList.contains(`b1-icons-icon-${this.icon}`)) {
    //         this.elementRef.nativeElement.classList.add(`b1-icons-icon-${this.icon}`);
    //     }
    // }
}
