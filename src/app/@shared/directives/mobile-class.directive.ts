import { AfterViewInit, Directive, ElementRef, Input, OnDestroy } from '@angular/core';
import { ResizeService } from '@services/resize.service';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[mobileClass]'
})
export class MobileClassDirective implements AfterViewInit, OnDestroy {

  @Input() mobileClass!: string;

  private resizeSubscription?: Subscription;
  constructor(private el: ElementRef, private resizeService: ResizeService) {

  }


  ngAfterViewInit(): void {
    this.resizeSubscription = this.resizeService.isMobile$.subscribe((isMobile) => {
      if (isMobile) {
        this.mobileClass.split(' ').forEach((item) => this.el.nativeElement.classList.add(item));
      }
      else {
        this.mobileClass.split(' ').forEach((item) => this.el.nativeElement.classList.remove(item));
      }
    });
  }

  ngOnDestroy(): void {
    this.resizeSubscription?.unsubscribe();
  }

}
