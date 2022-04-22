import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  template: '',
})
export abstract class BaseB1ModalComponent<T> {
  @Input() abstract config: { callback(result: T): Observable<any> | void };

  abstract result: T;

  constructor(public modal: NgbActiveModal) {}

  ok(): void {
    this.config.callback(this.result);
    this.modal.close();
  }
}
