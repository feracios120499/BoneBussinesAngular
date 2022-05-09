import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { withRequiredPropsCheck } from '@mixins/with-required-props-check.mixin';
import { withDestroy } from '@mixins/with-destroy.mixin';

@Component({
  template: '',
})
export abstract class BaseB1ModalComponent<T> extends withRequiredPropsCheck(withDestroy(class {})) implements OnInit {
  @Input() abstract config: { callback(result: T): Observable<any> | void };

  abstract result: T;

  ngOnInit(): void {
    this.checkRequiredProps(['config']);
  }

  ok(): void {
    this.config.callback(this.result);
  }
}
