import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StatementModalConfig } from '@models/statement-modal-config.model';
import { StatementModalResult } from '@models/statement-modal-result.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import dayjs from 'dayjs';

@Component({
  selector: 'b1-statement-modal',
  templateUrl: './b1-statement-modal.component.html',
  styleUrls: ['./b1-statement-modal.component.scss']
})
export class B1StatementModalComponent implements OnInit {

  @Input() config!: StatementModalConfig;
  result!: StatementModalResult;
  constructor(public modal: NgbActiveModal) {
  }

  ranges: any = {
    'shared.picker.today': [dayjs(), dayjs()],
    'shared.picker.currentMonth': [dayjs().startOf('month'), dayjs()],
    'shared.picker.month1': [dayjs().subtract(1, 'month'), dayjs()],
    'shared.picker.month2': [dayjs().subtract(2, 'month'), dayjs()],
    'shared.picker.month3': [dayjs().subtract(3, 'month'), dayjs()],
    'shared.picker.currentYear': [dayjs().startOf('year'), dayjs()],
    'shared.picker.year1': [dayjs().subtract(1, 'year'), dayjs()]
  };

  formGroup = new FormGroup({
    range: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email]),
    sendToEmail: new FormControl(false),
    format: new FormControl('', [Validators.required]),
    agree: new FormControl(false)
  });

  agree = false;

  ngOnInit(): void {
    this.result = {
      range: {
        start: this.config.start || dayjs(),
        end: this.config.end || dayjs()
      },
      sendToEmail: false,
      email: this.config.email,
      format: this.config.formats[0]
    };
  }

  ok(): void {
    this.config.callback(this.result);
    this.modal.close();
  }

}
