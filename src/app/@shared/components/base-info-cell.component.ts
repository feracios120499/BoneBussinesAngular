import { Component, OnInit, Input } from '@angular/core';

import { withRequiredPropsCheck } from '@mixins/with-required-props-check.mixin';

@Component({
  template: '',
})
export abstract class BaseInfoCellComponent extends withRequiredPropsCheck() implements OnInit {
  @Input() label!: string;

  ngOnInit(): void {
    this.checkRequiredProps(['label']);
  }
}
