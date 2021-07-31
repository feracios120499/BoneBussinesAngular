import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Directive({
  selector: '[mobileClass]'
})
export class MobileClassDirective implements AfterViewInit {

  @Input() mobileClass!: string;

  constructor(private el: ElementRef) { }

  ngAfterViewInit(): void {
    if (window.screen.width <= environment.mobileWidth && this.mobileClass) {
      this.el.nativeElement.className += ` ${this.mobileClass}`;
    }
  }

}
