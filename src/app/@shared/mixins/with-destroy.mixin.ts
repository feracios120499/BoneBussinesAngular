import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

import { TGConstructor } from './g-constructor.type';

export function withDestroy<T extends TGConstructor<{}>>(base: T = (class {} as any)) {
  @Component({ template: '' })
  abstract class Destroyable extends base implements OnDestroy {
    protected destroy$ = new Subject<void>();

    ngOnDestroy(): void {
      this.destroy$.next();
      this.destroy$.complete();
    }
  };

  return Destroyable;
}
