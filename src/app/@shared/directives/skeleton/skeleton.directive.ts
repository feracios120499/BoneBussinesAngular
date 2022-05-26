import {
  ChangeDetectorRef,
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

import { SkeletonComponent, SkeletonSizes } from './skeleton.component';

@Directive({
  selector: '[skeleton]',
})
export class SkeletonDirective {
  @Input() set skeleton(condition: boolean | string) {
    if (condition) {
      this.setSkeleton();
    } else {
      this.setTemplate();
    }
    this.changeDetectorRef.detectChanges();
  }
  @Input() skeletonSizes?: SkeletonSizes;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    private componentFactoryResolver: ComponentFactoryResolver,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  private setSkeleton(): void {
    this.viewContainerRef.clear();
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(SkeletonComponent);
    const componentRef: ComponentRef<SkeletonComponent> = this.viewContainerRef.createComponent(componentFactory);
    if (this.skeletonSizes) {
      componentRef.instance.sizes = this.skeletonSizes;
    }
  }

  private setTemplate(): void {
    this.viewContainerRef.clear();
    this.viewContainerRef.createEmbeddedView(this.templateRef);
  }
}
