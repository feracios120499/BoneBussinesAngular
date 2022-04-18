import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LockCardConfig } from '../../models/lock-card-config.modal';

@Component({
  selector: 'app-lock-card-confirm',
  templateUrl: './lock-card-confirm.component.html',
  styleUrls: ['./lock-card-confirm.component.scss'],
})
export class LockCardConfirmComponent implements OnInit {
  constructor(public modal: NgbActiveModal) {}

  message?: string;
  @Input() config!: LockCardConfig;
  ngOnInit(): void {}
  ok(): void {
    this.modal.close();
    this.config.callback(this.message);
  }
}
