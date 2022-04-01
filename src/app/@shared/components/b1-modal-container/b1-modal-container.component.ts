import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'b1-modal-container',
  templateUrl: './b1-modal-container.component.html',
  styleUrls: ['./b1-modal-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class B1ModalContainerComponent {
  constructor(public activeModal: NgbActiveModal) {}
}
