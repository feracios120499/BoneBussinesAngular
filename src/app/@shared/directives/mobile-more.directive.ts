import { Directive, ElementRef, Inject, Input, OnChanges, OnDestroy, Self, SimpleChanges } from '@angular/core';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Directive({
  selector: '[mobile-more]'
})
export class MobileMoreDirective implements OnDestroy {

  parentNode: any;
  openSubscription: Subscription;

  constructor(@Self() @Inject(NgbDropdown) private readonly dropdown: NgbDropdown, private el: ElementRef) {
    this.parentNode = el.nativeElement.parentNode;
    const div = document.createElement('ngb-modal-backdrop');
    div.className = 'modal-backdrop fade show';
    const body = document.getElementsByTagName('body')[0];
    this.openSubscription = dropdown.openChange.pipe(filter(() => window.screen.width <= environment.mobileWidth)).subscribe((isOpen) => {
      if (isOpen) {
        // el.nativeElement.style.position = 'fixed';
        // el.nativeElement.style.top = 'auto';
        // el.nativeElement.style.bottom = '0';
        // el.nativeElement.style['z-index'] = 1050;

        body.appendChild(el.nativeElement);
        body.appendChild(div);
        setTimeout(() => {
          el.nativeElement.classList.add('mobile-more-show');
        });

      }
      else {
        this.parentNode.appendChild(el.nativeElement);
        body.removeChild(div);
        el.nativeElement.classList.remove('mobile-more-show');
      }
    });
  }

  ngOnDestroy(): void {
    this.openSubscription.unsubscribe();
  }
}
