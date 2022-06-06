import { Component, OnInit, ChangeDetectionStrategy, ViewChild, Input } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { provideValueAccessor } from '@methods/provide-value-accessor.method';
import { BaseSubFormComponent } from '@form-controls/base-sub-form.component';
import { ModelControl } from '@b1-types/model-controls.type';
import { distinctUntilObjectChanged } from '@custom-operators/distinct-until-object-changed.operator';
import { Feedback, FeedbackTypeId } from '@models/feedback.model';

export interface FeedbackRatingForm extends Pick<Feedback, 'rating' | 'typeId' | 'text'> {}

const { maxLength, required } = Validators;

@Component({
  selector: 'b1-feedback-rating-form',
  templateUrl: './b1-feedback-rating-form.component.html',
  styleUrls: ['./b1-feedback-rating-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideValueAccessor(B1FeedbackRatingFormComponent)],
})
export class B1FeedbackRatingFormComponent extends BaseSubFormComponent implements OnInit {
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
  typeRadioButtons: { value: FeedbackTypeId; label: string }[] = [
    { value: 'PROPOSITION', label: 'components.feedback.Suggest' },
    { value: 'GOOD', label: 'components.feedback.Like' },
    { value: 'BAD', label: 'components.feedback.DoNotLike' },
  ];
  // RATING:
  maxRate = 5;
  ratingControl = new FormControl(this.maxRate);
  typeControl = new FormControl('PROPOSITION');
  // TEXT:
  textMaxLength = 4000;
  textControl = new FormControl('', [maxLength(this.textMaxLength)]);

  @ViewChild('formRef') formRef!: NgForm;

  ngOnInit(): void {
    super.ngOnInit();
    this.initForm();
  }

  writeValue(value: FeedbackRatingForm): void {
    if (!value) {
      return;
    }
    this.formGroup.patchValue(value);
    this.updateTreeValidity(this.formGroup);
  }

  protected formChange(formValue$: Observable<FeedbackRatingForm>): Observable<FeedbackRatingForm> {
    return formValue$.pipe(
      distinctUntilObjectChanged(),
      tap((formValue: FeedbackRatingForm) => {
        this.onChange(formValue);
      })
    );
  }

  private initForm(): void {
    const controls: ModelControl<FeedbackRatingForm> = {
      rating: this.ratingControl,
      typeId: this.typeControl,
      text: this.textControl,
    };
    this.formGroup = new FormGroup(controls);
  }

  private addRequiredValidator(): void {
    this.textControl.addValidators(required);
    this.textControl.markAsTouched();
    this.textControl.updateValueAndValidity();
  }

  private removeRequiredValidator(): void {
    this.textControl.removeValidators(required);
    this.textControl.markAsTouched();
    this.textControl.updateValueAndValidity();
  }
}
