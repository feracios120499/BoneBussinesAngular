import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { withDestroy } from '@mixins/with-destroy.mixin';
import { RequisitesModalConfig } from '@models/modals/requisites-modal-config.model';
import { RequisitesModalResult } from '@models/modals/requisites-modal-result.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { email } from '@validators/email.validator';
import { takeUntil } from 'rxjs/operators';

const { required } = Validators;

@Component({
  selector: 'b1-requisites-modal',
  templateUrl: './b1-requisites-modal.component.html',
  styleUrls: ['./b1-requisites-modal.component.scss'],
})
export class B1RequisitesModalComponent extends withDestroy() implements OnInit {
  @Input() config!: RequisitesModalConfig;
  result!: RequisitesModalResult;

  constructor(public modal: NgbActiveModal) {
    super();
  }

  formGroup = new FormGroup({
    email: new FormControl('', [email]),
    sendToEmail: new FormControl(false),
    format: new FormControl('', [required]),
  });

  agree = false;

  ngOnInit(): void {
    this.result = {
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
