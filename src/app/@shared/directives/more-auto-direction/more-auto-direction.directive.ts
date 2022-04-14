import { Directive, ElementRef, Inject, Input, Self } from '@angular/core';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Directive({
  selector: '[more-auto-direction]'
})
export class MoreAutoDirectionDirective {

  @Input() parentSelector = '.b1-page-data';
  openSubscription?: Subscription;

  constructor(@Self() @Inject(NgbDropdown) private readonly dropdown: NgbDropdown, private el: ElementRef) {
    if (this.el.nativeElement.getAttribute('mobile-more') && window.screen.width <= environment.mobileWidth) {
      return;
    }
    const parentNode = document.querySelector(this.parentSelector);
    if (!parentNode) { return; }

    this.openSubscription = dropdown.openChange.pipe(filter(p => p === true)).subscribe(() => {
      setTimeout(() => {
        const elementTop = this.el.nativeElement.getBoundingClientRect().top;
        const parentTop = parentNode.getBoundingClientRect().top;
        const elementHeight = this.el.nativeElement.clientHeight;
        if (elementTop - parentTop - elementHeight < 0) {
          this.el.nativeElement.classList.add('b1-dropdown_down');
          this.el.nativeElement.classList.remove('b1-dropdown_up');
        }
        else {
          this.el.nativeElement.classList.add('b1-dropdown_up');
          this.el.nativeElement.classList.remove('b1-dropdown_down');
        }
      });

    });
  }

}
