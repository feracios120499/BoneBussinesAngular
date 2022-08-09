import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ModelControl } from '@b1-types/model-controls.type';
import { BaseSubFormComponent } from '@form-controls/base-sub-form.component';
import { provideValueAccessor } from '@methods/provide-value-accessor.method';
import { SupdocumentForm } from '@modules/sup-documents/types/supdocument-form.model';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { distinctUntilObjectChanged } from '../../../../@shared/custom-operators/distinct-until-object-changed.operator';

const { required, maxLength } = Validators;

@Component({
  selector: 'app-supdocument-form',
  templateUrl: './supdocument-form.component.html',
  styleUrls: ['./supdocument-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideValueAccessor(SupdocumentFormComponent)],
})
export class SupdocumentFormComponent extends BaseSubFormComponent implements OnInit {
  formGroup!: FormGroup;

  // DESCRIPTION:
  descriptionMaxLength = 100;
  descriptionControl = new FormControl('', [required, maxLength(this.descriptionMaxLength)]);

  // UNVALIDATED & DISABLED:
  creatingDateControl= new FormControl({ value: new Date(), disabled: true });
  lastActiveDateControl = new FormControl({ value: '', disabled: true });
  fileNameControl = new FormControl({ value: '', disabled: true });
  fileExtControl = new FormControl({ value: '', disabled: true });
  fileSizeControl = new FormControl({ value: '', disabled: true });
  fileStatusControl = new FormControl({ value: 'NEW', disabled: true });

  @ViewChild('formRef') formRef!: NgForm;

  constructor() {
    super();
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.initForm();
  }

  writeValue(value: SupdocumentForm): void {
    if (!value) {
      return;
    }
    this.formGroup.patchValue(value);
    this.updateTreeValidity(this.formGroup);
  }

  getFile(event: any): void {
    this.writeValue({
      creatingDate: new Date(),
      lastActiveDate: event.target.files[0].lastModifiedDate,
      fileName: event.target.files[0].name,
      fileExt: event.target.files[0].type,
      fileSize: event.target.files[0].size,
      status: 'NEW',
      description: this.descriptionControl.value
    });
  }

  isFileExist():boolean {
    if (this.formGroup.controls['fileName'].value != '')
      {return true;};
      return false;
  }

  private initForm(): void {
    const controls: ModelControl<SupdocumentForm> = {
      creatingDate: this.creatingDateControl,
      lastActiveDate: this.lastActiveDateControl,
      fileName: this.fileNameControl,
      fileExt: this.fileExtControl,
      fileSize: this.fileSizeControl,
      description: this.descriptionControl,
      status: this.fileStatusControl
    };
    this.formGroup = new FormGroup(controls);
  }

  protected formChange(formValue$: Observable<SupdocumentForm>): Observable<SupdocumentForm> {
    return formValue$.pipe(
      map(() => this.formGroup.getRawValue()),
      distinctUntilObjectChanged(),
      tap((formValue: SupdocumentForm) => {
        this.onChange(formValue);
      })
    );
  }
}
