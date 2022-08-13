import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ModelControl } from '@b1-types/model-controls.type';
import { BaseSubFormComponent } from '@form-controls/base-sub-form.component';
import { provideValueAccessor } from '@methods/provide-value-accessor.method';
import { SupdocumentSendForm } from '@modules/sup-documents/types/supdocument-form.model';
import { Recipient } from '@modules/sup-documents/types/supdocument-upload.model';
import { Store } from '@ngrx/store';
import { SupDocumentsSelectors } from '@store/sup-documents/selectors';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { distinctUntilObjectChanged } from '../../../../@shared/custom-operators/distinct-until-object-changed.operator';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
const { required, maxLength } = Validators;


@Component({
  selector: 'app-supdocument-form-send',
  templateUrl: './supdocument-form-send.component.html',
  styleUrls: ['./supdocument-form-send.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideValueAccessor(SupdocumentFormSendComponent)],

})
export class SupdocumentFormSendComponent extends BaseSubFormComponent implements OnInit {
  dropdownSettings: IDropdownSettings = {};

  onItemSelect(item: any): void {
    console.log(item);
  }


  formGroup!: FormGroup;

  recipients$: Observable<Recipient[]> = this.store.select(SupDocumentsSelectors.recipients)
  isLoadingRecipients$: Observable<boolean> = this.store.select(SupDocumentsSelectors.isLoadingRecipients)

  @ViewChild('formRef') formRef!: NgForm;

  messageMaxLength = 100;
  MessageControl = new FormControl('', [maxLength(this.messageMaxLength)]);

  recipientsMaxLength = 3;
  RecipientsControl = new FormControl({ value: [], disabled: false }, [required, maxLength(this.recipientsMaxLength)]);

  constructor(private store: Store) {
    super();
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.initForm();

    this.dropdownSettings = {
      allowSearchFilter: false,
      singleSelection: false,
      limitSelection: 3,
      idField: 'id',
      textField: 'email',
      maxHeight: 150
    };
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
