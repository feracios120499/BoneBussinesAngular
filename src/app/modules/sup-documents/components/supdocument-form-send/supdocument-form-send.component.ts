import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ModelControl } from '@b1-types/model-controls.type';
import { BaseSubFormComponent } from '@form-controls/base-sub-form.component';
import { provideValueAccessor } from '@methods/provide-value-accessor.method';
import { SupdocumentSendForm } from '@modules/sup-documents/types/supdocument-form.model';
import { Store } from '@ngrx/store';
import { SupDocumentsSelectors } from '@store/sup-documents/selectors';
import { Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { distinctUntilObjectChanged } from '../../../../@shared/custom-operators/distinct-until-object-changed.operator';

const { required, maxLength } = Validators;


@Component({
  selector: 'app-supdocument-form-send',
  templateUrl: './supdocument-form-send.component.html',
  styleUrls: ['./supdocument-form-send.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideValueAccessor(SupdocumentFormSendComponent)],

})
export class SupdocumentFormSendComponent extends BaseSubFormComponent implements OnInit {
  formGroup!: FormGroup;

  selected$: Observable<string[]> = this.store.select(SupDocumentsSelectors.selectedIds)
  @ViewChild('formRef') formRef!: NgForm;

  messageMaxLength = 100;
  MessageControl = new FormControl('', [maxLength(this.messageMaxLength)]);

  recipientsMaxLength = 3;
  RecipientsControl = new FormControl({ value: [], disabled: true }, [maxLength(this.recipientsMaxLength)]);

  constructor(private store: Store) {
    super();
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.initForm();
  }

  private initForm(): void {
    const controls: ModelControl<SupdocumentSendForm> = {
      Recipients: this.RecipientsControl,
      Message: this.MessageControl
    };
    this.formGroup = new FormGroup(controls);
  }

  writeValue(value: SupdocumentSendForm): void {
    if (!value) {
      return;
    }
    this.formGroup.patchValue(value);
    this.updateTreeValidity(this.formGroup);
  }

  protected formChange(formValue$: Observable<SupdocumentSendForm>): Observable<SupdocumentSendForm> {
    return formValue$.pipe(
      map(() => this.formGroup.getRawValue()),
      distinctUntilObjectChanged(),
      tap((formValue: SupdocumentSendForm) => {
        this.onChange(formValue);
      })
    );
  }
}
