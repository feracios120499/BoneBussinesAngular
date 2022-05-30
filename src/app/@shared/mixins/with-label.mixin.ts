import { Component, Input, OnInit } from '@angular/core';

import { TGConstructor } from './g-constructor.type';
import { withRequiredPropsCheck } from './with-required-props-check.mixin';

export function withLabel<T extends TGConstructor<{}>>(base: T = class {} as any) {
  @Component({ template: '' })
  abstract class Labelable extends withRequiredPropsCheck(base) implements OnInit {
    @Input() label!: string;

    ngOnInit(): void {
      this.checkRequiredProps(['label']);
    }
  }

  return Labelable;
}
