import { Directive, DoCheck, ElementRef } from '@angular/core';

@Directive({
    selector: 'input, textarea'
})
export class CheckValueInputDirective implements DoCheck {

    constructor(private el: ElementRef) {
    }

    private className = 'ng-has-value';

    ngDoCheck(): void {
        if (this.el.nativeElement.value) {
            this.el.nativeElement.classList.add(this.className);
        }
        else {
            this.el.nativeElement.classList.remove(this.className);
        }
    }

}
