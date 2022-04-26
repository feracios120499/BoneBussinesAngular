import {
  Directive,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { UserRole } from '@b1-types/user-role.type';
import { Store } from '@ngrx/store';
import { UserSelectors } from '@store/user/selectors';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
@Directive({
  selector: '[checkRole]',
})
export class CheckRoleDirective implements OnInit, OnDestroy {
  @Input() checkRole!: UserRole[];

  private onDestroy$ = new Subject<boolean>();
  private isViewed = false;

  constructor(
    private store: Store,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  ngOnInit(): void {
    this.viewContainer.clear();
    this.store
      .select(UserSelectors.currentCustomer)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((currentCustomer) => {
        if (!currentCustomer) {
          this.hideView();
          return;
        }
        const isInRole = currentCustomer.roles.some(
          (role) => this.checkRole.indexOf(role) >= 0
        );
        if (isInRole) {
          if (!this.isViewed) {
            this.showView();
          }
        } else {
          this.hideView();
        }
      });
  }

  showView(): void {
    this.viewContainer.createEmbeddedView(this.templateRef);
    this.isViewed = true;
  }

  hideView(): void {
    this.viewContainer.clear();
    this.isViewed = false;
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.unsubscribe();
  }
}
