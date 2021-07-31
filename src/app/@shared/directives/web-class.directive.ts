import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Directive({
  selector: '[webClass]'
})
export class WebClassDirective implements AfterViewInit {

  @Input() webClass!: string;
  constructor(private el: ElementRef) {

  }

  ngAfterViewInit(): void {
    if (window.screen.width > environment.mobileWidth && this.webClass) {
      this.el.nativeElement.className += ' ' + this.webClass;
    }
  }

}
