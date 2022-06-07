import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  ElementRef,
  HostListener,
  ViewContainerRef,
} from '@angular/core';

import { VersionWindowComponent } from './version-window/version-window.component';

@Directive({
  selector: '[version]',
})
export class VersionDirective {
  private openedWindowRef: ComponentRef<VersionWindowComponent> | null = null;

  constructor(
    private hostRef: ElementRef,
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent): void {
    const windowEl = this.openedWindowRef?.location.nativeElement;
    if (windowEl?.contains(event.target)) {
      return;
    }
    this.hostRef.nativeElement.contains(event.target) && !windowEl ? this.open() : this.close();
  }

  private open(): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(VersionWindowComponent);
    this.openedWindowRef = this.viewContainerRef.createComponent(componentFactory);
  }

  private close(): void {
    this.viewContainerRef.remove();
    this.openedWindowRef = null;
  }
}
