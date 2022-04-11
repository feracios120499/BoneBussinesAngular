import { Component, Input, OnInit } from '@angular/core';
import { ConfirmModalConfig } from '@models/modals/confirm-modal-config.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-b1-confirm-modal',
  templateUrl: './b1-confirm-modal.component.html',
  styleUrls: ['./b1-confirm-modal.component.scss'],
})
export class B1ConfirmModalComponent implements OnInit {
  @Input() config!: ConfirmModalConfig;
  constructor(public modal: NgbActiveModal) {}

  ngOnInit(): void {}

  ok(): void {
    this.config.callback();
    this.modal.close();
  }

  close(): void {
    this.modal.close();
  }
}
