import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { provideValueAccessor } from '@methods/provide-value-accessor.method';
import { BaseSubFormComponent } from '@form-controls/base-sub-form.component';
import { ModelControl } from '@b1-types/model-controls.type';
import { UserNameForm } from '@models/users/user-name-form.model';
import { distinctUntilObjectChanged } from '@custom-operators/distinct-until-object-changed.operator';

const { required, maxLength } = Validators;

@Component({
  selector: 'app-user-name-form',
  templateUrl: './user-name-form.component.html',
  styleUrls: ['./user-name-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideValueAccessor(UserNameFormComponent)],
})
export class UserNameFormComponent
  extends BaseSubFormComponent
  implements OnInit
{
  formGroup!: FormGroup;
  nameMaxLength = 256;
  lastNameControl = new FormControl('', [
    required,
    maxLength(this.nameMaxLength),
  ]);
  firstNameControl = new FormControl('', [
    required,
    maxLength(this.nameMaxLength),
  ]);
  secondNameControl = new FormControl('', [
    required,
    maxLength(this.nameMaxLength),
  ]);

  @ViewChild('formRef') formRef!: NgForm;

  ngOnInit(): void {
    super.ngOnInit();
    this.initForm();
  }

  writeValue(value: UserNameForm): void {
    if (!value) {
      return;
    }
    this.formGroup.patchValue(value);
    this.formGroup.disable();
    this.updateTreeValidity(this.formGroup);
  }

  private initForm(): void {
    const controls: ModelControl<UserNameForm> = {
      lastName: this.lastNameControl,
      firstName: this.firstNameControl,
      patronymic: this.secondNameControl,
    };
    this.formGroup = new FormGroup(controls);
  }

  protected formChange(
    formValue$: Observable<UserNameForm>
  ): Observable<UserNameForm> {
    return formValue$.pipe(
      map(() => this.formGroup.getRawValue()),
      distinctUntilObjectChanged(),
      tap((formValue: UserNameForm) => {
        setTimeout(() => {
          this.onChange(formValue);
        });
      })
    );
  }
}
