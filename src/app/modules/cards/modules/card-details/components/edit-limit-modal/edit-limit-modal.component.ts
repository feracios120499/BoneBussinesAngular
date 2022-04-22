import { Component, Input, OnInit } from '@angular/core';
import { CardLimit } from '@models/cards/card-limit.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EditLimitConfig } from '../../models/edit-limit-config.model';

type LimitState = 'unlimit' | 'zero' | 'limit';

@Component({
  selector: 'app-edit-limit-modal',
  templateUrl: './edit-limit-modal.component.html',
  styleUrls: ['./edit-limit-modal.component.scss'],
})
export class EditLimitModalComponent implements OnInit {
  @Input() config!: EditLimitConfig;
  limitState: LimitState = 'limit';
  limit!: CardLimit;
  constructor(public modal: NgbActiveModal) {}

  ngOnInit(): void {
    this.limit = Object.assign({}, this.config.limit);

    this.limitState = this.config.limit.isActive
      ? this.limit.value === 0
        ? 'zero'
        : 'limit'
      : 'unlimit';

    if (this.limit.status === 'Suspended') {
      this.limitState = 'unlimit';
    }
  }

  save(): void {
    switch (this.limitState) {
      case 'unlimit':
        this.limit.isActive = false;
        break;
      case 'zero':
        this.limit.isActive = true;
        this.limit.value = 0;
        break;
      case 'limit':
        this.limit.isActive = true;
        break;
    }
    this.config.callbackSave(this.limit);
    this.modal.close();
  }
}
