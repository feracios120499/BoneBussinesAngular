import { AfterViewInit, Component, HostBinding, HostListener, Input, QueryList, ViewChildren } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { withDestroy } from '@mixins/with-destroy.mixin';
import { SkeletonDirective } from './skeleton.directive';

@Component({
  template: '',
})
export abstract class BaseSkeletonComponent extends withDestroy() implements AfterViewInit {
  @Input() set skeletonMode(condition: boolean) {
    this.mode.next(condition);
  }
  get skeletonMode(): boolean {
    return this.mode.value;
  }
  private mode = new BehaviorSubject<boolean>(false);
  private mode$: Observable<boolean> = this.mode.asObservable();

  @ViewChildren(SkeletonDirective) private skeletonDirvs!: QueryList<SkeletonDirective>;

  ngAfterViewInit(): void {
    if (!this.skeletonDirvs.length) {
      throw new Error('No [*skeleton] selector found in html-template!');
    }
    this.mode$.pipe(takeUntil(this.destroy$)).subscribe((condition: boolean) => {
      this.skeletonDirvs.forEach((instance) => (instance.skeleton = condition));
    });
  }

  @HostBinding('style.pointerEvents')
  private get skeletonStyles(): string {
    return this.skeletonMode ? 'none' : 'auto';
  }

  @HostListener('click', ['$event'])
  @HostListener('window:keydown.enter', ['$event'])
  private preventIfCondition(event: Event): boolean {
    return this.skeletonMode;
  }
}
