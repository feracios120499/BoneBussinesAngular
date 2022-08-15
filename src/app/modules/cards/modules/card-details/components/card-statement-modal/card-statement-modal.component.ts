import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { email } from '@validators/email.validator';
import dayjs from 'dayjs';
import { CardStatementModalConfig } from '../../models/card-statement-modal-config.model';
import { CardStatementModalResult } from '../../models/card-statement-modal-result.model';

const { required } = Validators;

@Component({
  selector: 'app-card-statement-modal',
  templateUrl: './card-statement-modal.component.html',
  styleUrls: ['./card-statement-modal.component.scss'],
})
export class CardStatementModalComponent implements OnInit {
  @Input() config!: CardStatementModalConfig;
  result!: CardStatementModalResult;
  constructor(public modal: NgbActiveModal) {}

  ranges: any = {
    'shared.picker.today': [dayjs(), dayjs()],
    'shared.picker.currentMonth': [dayjs().startOf('month'), dayjs()],
    'shared.picker.month1': [dayjs().subtract(1, 'month'), dayjs()],
    'shared.picker.month2': [dayjs().subtract(2, 'month'), dayjs()],
    'shared.picker.month3': [dayjs().subtract(3, 'month'), dayjs()],
    'shared.picker.currentYear': [dayjs().startOf('year'), dayjs()],
    'shared.picker.year1': [dayjs().subtract(1, 'year'), dayjs()],
  };
  typeRadioButtons = [
    { value: 'card', label: 'components.corpcard.services.statement.type.card' },
    { value: 'account', label: 'components.corpcard.services.statement.type.account' },
  ];

  formGroup = new FormGroup({
    range: new FormControl('', [required]),
    email: new FormControl('', [email]),
    sendToEmail: new FormControl(false),
    format: new FormControl('', [required]),
    agree: new FormControl(false),
    type: new FormControl('card'),
  });

  agree = false;

  ngOnInit(): void {
    this.result = {
      range: {
        start: this.config.start || dayjs(),
        end: this.config.end || dayjs(),
      },
      sendToEmail: false,
      email: this.config.email,
      format: this.config.formats[0],
      type: 'card',
    };
  }

  ok(): void {
    if (this.result.type === 'account') {
      this.config.callback(this.result);
    } else {
      this.config.callbackCard(this.result);
    }

    this.modal.close();
  }
}
