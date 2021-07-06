import { AfterViewInit, Directive, ElementRef, Input, OnDestroy } from '@angular/core';


@Directive({
    selector: '[b1-icon]'
})
export class B1IconDirective implements AfterViewInit {

    @Input()
    icon!: string;


    constructor(private elementRef: ElementRef) {

    }

    ngAfterViewInit(): void {
        if (!this.elementRef.nativeElement.classList.contains('b1-icons')) {
            this.elementRef.nativeElement.classList.add('b1-icons');
        }
        if (!this.elementRef.nativeElement.classList.contains(`b1-icons-icon-${this.icon}`)) {
            this.elementRef.nativeElement.classList.add(`b1-icons-icon-${this.icon}`);
        }
    }
}
