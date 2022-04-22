import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import dayjs from 'dayjs';
import { CardStatementModalConfig } from '../../models/card-statement-modal-config.model';
import { CardStatementModalResult } from '../../models/card-statement-modal-result.model';

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

  formGroup = new FormGroup({
    range: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email]),
    sendToEmail: new FormControl(false),
    format: new FormControl('', [Validators.required]),
    agree: new FormControl(false),
    type: new FormControl('card'),
  });

  agree = false;

  ngOnInit(): void {
    console.log(this.config);
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
