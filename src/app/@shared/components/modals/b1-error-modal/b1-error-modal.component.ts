import { Component, Input, OnInit } from '@angular/core';
import { ServerError } from '@models/errors/server-error.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-b1-error-modal',
  templateUrl: './b1-error-modal.component.html',
  styleUrls: ['./b1-error-modal.component.scss'],
})
export class B1ErrorModalComponent implements OnInit {
  @Input() error!: ServerError;
  constructor(private modal: NgbActiveModal) {}

  ngOnInit(): void {}

  ok(): void {
    this.modal.close();
  }
}
