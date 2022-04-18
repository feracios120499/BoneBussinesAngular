import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { provideValueAccessor } from '@methods/provide-value-accessor.method';
import { BaseSubFormComponent } from '@forms/base-sub-form.component';
import { CorrespondentForm } from '@models/correspondents/correspondent-form.model';
import { ModelControl } from '@b1-types/model-controls.type';
import { distinctUntilObjectChanged } from '@custom-operators/distinct-until-object-changed.operator';

const { required } = Validators;

@Component({
  selector: 'app-correspondent-form',
  templateUrl: './correspondent-form.component.html',
  styleUrls: ['./correspondent-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideValueAccessor(CorrespondentFormComponent)],
})
export class CorrespondentFormComponent
  extends BaseSubFormComponent
  implements OnInit
{
  formGroup!: FormGroup;
  nameControl = new FormControl('', [required]);
  taxCodeControl = new FormControl('', [required]);
  accountControl = new FormControl('', [required]);
  bankCodeControl = new FormControl('', [required]);
  bankNameControl = new FormControl('', [required]);

  @ViewChild('formRef') formRef!: NgForm;

  ngOnInit(): void {
    super.ngOnInit();
    this.initForm();
  }

  writeValue(value: CorrespondentForm): void {
    if (!value) {
      return;
    }
    this.formGroup.patchValue(value);
    this.updateTreeValidity(this.formGroup);
  }

  private initForm(): void {
    const controls: ModelControl<CorrespondentForm> = {
      name: this.nameControl,
      taxCode: this.taxCodeControl,
      accNumber: this.accountControl,
      bankCode: this.bankCodeControl,
      bankName: this.bankNameControl,
    };
    this.formGroup = new FormGroup(controls);
  }

  protected formChange(
    formValue$: Observable<CorrespondentForm>
  ): Observable<CorrespondentForm> {
    return formValue$.pipe(
      map(() => this.formGroup.getRawValue()),
      distinctUntilObjectChanged(),
      tap((formValue: CorrespondentForm) => {
        setTimeout(() => {
          this.onChange(formValue);
        });
      })
    );
  }
}
