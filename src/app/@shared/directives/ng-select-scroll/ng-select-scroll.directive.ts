import { ComponentFactoryResolver, Directive, OnInit, ViewContainerRef } from '@angular/core';
import { NgSelectComponent } from '@ng-select/ng-select';
import { NgScrollbar } from 'ngx-scrollbar';

@Directive({
  selector: 'ng-select',
})
export class NgSelectScrollDirective implements OnInit {
  constructor(
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private select: NgSelectComponent
  ) {}

  ngOnInit(): void {
    this.select.openEvent.subscribe(() => {
      setTimeout(() => {
        const panel = document.querySelector(
          'ng-dropdown-panel#' + this.select.dropdownId + ' .ng-option'
        )?.parentElement;

        if (!panel) {
          return;
        }

        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(NgScrollbar);

        const componentRef = this.viewContainerRef.createComponent(componentFactory);

        setTimeout(() => {
          const host = componentRef.location.nativeElement.querySelector('.ng-scroll-content');
          host.appendChild(panel);
          const element = document.querySelector(
            'ng-dropdown-panel#' + this.select.dropdownId + ' .ng-dropdown-panel-items'
          );
          if (!element) {
            return;
          }

          element?.appendChild(componentRef.location.nativeElement);
          element?.classList.add('with-ng-scrollbar');
          if (panel.clientHeight < 240) {
            (element as any).style.height = panel.clientHeight + 2 + 'px';
          } else {
            (element as any).style.height = '240px';
          }
        });
      });
    });
  }
}
