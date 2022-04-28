import { Component, Input, OnInit } from '@angular/core';
import { SignModalConfig } from '@models/sign-modal-config.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-b1-sign-modal',
  templateUrl: './b1-sign-modal.component.html',
  styleUrls: ['./b1-sign-modal.component.scss'],
})
export class B1SignModalComponent implements OnInit {
  constructor(public modal: NgbActiveModal) {}
  @Input() config!: SignModalConfig;
  ngOnInit(): void {}
}
