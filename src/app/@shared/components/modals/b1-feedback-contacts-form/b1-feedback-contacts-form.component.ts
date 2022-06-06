import { Component, OnInit, ChangeDetectionStrategy, Input, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { provideValueAccessor } from '@methods/provide-value-accessor.method';
import { BaseSubFormComponent } from '@form-controls/base-sub-form.component';
import { ModelControl } from '@b1-types/model-controls.type';
import { Feedback } from '@models/feedback.model';
import { distinctUntilObjectChanged } from '@custom-operators/distinct-until-object-changed.operator';
import { email } from '@validators/email.validator';

export interface FeedbackContactsForm
  extends Pick<Feedback, 'contactName' | 'contactEmail' | 'contactPhone' | 'EDRPOU' | 'nameOrganization' | 'region'> {}

const { minLength, maxLength, required } = Validators;

@Component({
  selector: 'b1-feedback-contacts-form',
  templateUrl: './b1-feedback-contacts-form.component.html',
  styleUrls: ['./b1-feedback-contacts-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideValueAccessor(B1FeedbackContactsFormComponent)],
})
export class B1FeedbackContactsFormComponent extends BaseSubFormComponent implements OnInit {
  @Input() set isRequired(condition: boolean) {
    if (!this.formGroup) {
      return;
    }
    if (condition) {
      this.addRequiredValidator();
    } else {
      this.removeRequiredValidator();
    }
  }
  formGroup!: FormGroup;
  nameMaxLength = 256;
  nameControl = new FormControl('', [maxLength(this.nameMaxLength)]);
  emailControl = new FormControl('', [email]);
  phoneControl = new FormControl('');
  taxCodeMinLength = 8;
  taxCodeMaxLength = 14;
  taxCodeControl = new FormControl('', [minLength(this.taxCodeMinLength), maxLength(this.taxCodeMaxLength)]);
  orgNameMaxLength = 200;
  orgNameControl = new FormControl('', [maxLength(this.orgNameMaxLength)]);
  regionMaxLength = 200;
  regionControl = new FormControl('', [maxLength(this.regionMaxLength)]);

  @ViewChild('formRef') formRef!: NgForm;

  ngOnInit(): void {
    super.ngOnInit();
    this.initForm();
  }

  writeValue(value: FeedbackContactsForm): void {
    if (!value) {
      return;
    }
    this.formGroup.patchValue(value);
    this.updateTreeValidity(this.formGroup);
  }

  protected formChange(formValue$: Observable<FeedbackContactsForm>): Observable<FeedbackContactsForm> {
    return formValue$.pipe(
      distinctUntilObjectChanged(),
      tap((formValue: FeedbackContactsForm) => {
        this.onChange(formValue);
      })
    );
  }

  private initForm(): void {
    const controls: ModelControl<FeedbackContactsForm> = {
      contactName: this.nameControl,
      contactEmail: this.emailControl,
      contactPhone: this.phoneControl,
      EDRPOU: this.taxCodeControl, // eslint-disable-line @typescript-eslint/naming-convention
      nameOrganization: this.orgNameControl,
      region: this.regionControl,
    };
    this.formGroup = new FormGroup(controls);
  }

  private addRequiredValidator(): void {
    this.nameControl.addValidators(required);
    this.emailControl.addValidators(required);
    this.phoneControl.addValidators(required);
    this.formGroup.markAllAsTouched();
    this.updateTreeValidity(this.formGroup);
  }

  private removeRequiredValidator(): void {
    this.nameControl.removeValidators(required);
    this.emailControl.removeValidators(required);
    this.phoneControl.removeValidators(required);
    this.formGroup.markAllAsTouched();
    this.updateTreeValidity(this.formGroup);
  }
}
