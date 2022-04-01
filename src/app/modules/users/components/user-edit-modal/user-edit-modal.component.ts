import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';

import { BaseFormComponent } from '@forms/base-form.component';
import { ModelControl } from '@b1-types/model-controls.type';
import { UsersForm } from '@modules/users/models/users-form.model';
import { email } from '@validators/email.validator';

const { required } = Validators;

@Component({
  selector: 'app-user-edit-modal',
  templateUrl: './user-edit-modal.component.html',
  styleUrls: ['./user-edit-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserEditModalComponent
  extends BaseFormComponent
  implements OnInit
{
  form!: FormGroup;
  // FOR DEMO PURPOSE ONLY:
  isLoading$: Observable<boolean> = of(false);
  errorMessage = '';
  phoneControl = new FormControl('', [required]);
  emailControl = new FormControl('', [required, email]);
  // eslint-disable-next-line
  phonePatterns = { _: { pattern: new RegExp('\\d') } };

  constructor(store: Store, changeDetectorRef: ChangeDetectorRef) {
    super(store, changeDetectorRef);
  }

  ngOnInit(): void {
    const controls: ModelControl<UsersForm> = {
      phone: this.phoneControl,
      email: this.emailControl,
    };
    this.form = new FormGroup(controls);
  }

  onSubmit(): void {
    console.log('Form is submitted with value: ', this.form.value);
  }
}
