import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { withDestroy } from '@mixins/with-destroy.mixin';
import { ExportTurnoverModalConfig } from '@models/modals/export-turnover-modal-config.model';
import { ExportTurnoverModalResult } from '@models/modals/export-turnover-modal-result.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { email } from '@validators/email.validator';
import dayjs from 'dayjs';
import { takeUntil } from 'rxjs/operators';

const { required } = Validators;

@Component({
  selector: 'b1-export-turnovers-modal',
  templateUrl: './b1-export-turnovers-modal.component.html',
  styleUrls: ['./b1-export-turnovers-modal.component.scss'],
})
export class B1ExportTurnoversModalComponent extends withDestroy() implements OnInit {
  @Input() config!: ExportTurnoverModalConfig;
  result!: ExportTurnoverModalResult;
  constructor(public modal: NgbActiveModal) {
    super();
  }

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
    range: new FormControl('', [required]),
    email: new FormControl('', [email]),
    sendToEmail: new FormControl(false),
    format: new FormControl('', [required]),
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
    };

    this.subscribeToSendToEmailChanges();
  }

  ok(): void {
    this.config.callback(this.result);
    this.modal.close();
  }

  private subscribeToSendToEmailChanges(): void {
    this.formGroup.controls.sendToEmail.valueChanges.pipe(takeUntil(this.destroy$)).subscribe((checked: boolean) => {
      const emailControl: AbstractControl = this.formGroup.controls.email;
      if (checked) {
        emailControl.addValidators(required);
      } else {
        emailControl.removeValidators(required);
      }
      emailControl.updateValueAndValidity();
    });
  }
}
