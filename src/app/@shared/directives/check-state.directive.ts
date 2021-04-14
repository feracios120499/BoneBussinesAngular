import { AfterViewInit, Directive, ElementRef, Input, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[checkState]'
})
export class CheckStateDirective implements AfterViewInit, OnDestroy {

  @Input()
  checkState!: string;

  private originalDisplay: string;
  private eventsSubscription$!: Subscription;

  constructor(private elementRef: ElementRef, private router: Router) {
    this.originalDisplay = elementRef.nativeElement.style.display;
  }

  ngAfterViewInit(): void {

    this.elementRef.nativeElement.style.display =
      this.router.url.includes(this.checkState) ? this.originalDisplay : 'none';

    this.eventsSubscription$ = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log(this.router.url);
        if (!this.router.url.includes(this.checkState)) {

          this.elementRef.nativeElement.style.display = 'none';
        }
        else {
          this.elementRef.nativeElement.style.display = this.originalDisplay;
        }
      }

    });
  }

  ngOnDestroy(): void {
    this.eventsSubscription$?.unsubscribe();
  }

}
