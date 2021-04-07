import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[checkState]'
})
export class CheckStateDirective implements AfterViewInit {

  @Input()
  checkState!: string;

  private originalDisplay: string;
  constructor(private elementRef: ElementRef, private router: Router) {
    this.originalDisplay = elementRef.nativeElement.style.display;
  }

  ngAfterViewInit(): void {

    if (!this.router.url.includes(this.checkState)) {
      this.elementRef.nativeElement.style.display = 'none';
    }
    else {
      this.elementRef.nativeElement.style.display = this.originalDisplay;
    }
    this.router.events.subscribe((event: any) => {
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


}
