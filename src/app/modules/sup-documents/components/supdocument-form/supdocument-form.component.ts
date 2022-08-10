import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ModelControl } from '@b1-types/model-controls.type';
import { BaseSubFormComponent } from '@form-controls/base-sub-form.component';
import { provideValueAccessor } from '@methods/provide-value-accessor.method';
import { SupdocumentForm } from '@modules/sup-documents/types/supdocument-form.model';
import { TranslateService } from '@ngx-translate/core';
import { Observable, ReplaySubject } from 'rxjs';
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
  maxFileSize: number = 30;

  // DESCRIPTION:
  descriptionMaxLength = 100;
  DescriptionControl = new FormControl('', [required, maxLength(this.descriptionMaxLength)]);

  // UNVALIDATED & DISABLED:
  FileNameControl = new FormControl({ value: '', disabled: true });
  FileExtControl = new FormControl({ value: '', disabled: true });

  FileSizeControl = new FormControl({ value: '', disabled: true });
  FileBodyControl = new FormControl({ value: '', disabled: true });
  CreatingDateControl = new FormControl({ value: '', disabled: true });
  LastActiveDateControl = new FormControl({ value: '', disabled: true });
  IdControl = new FormControl({ value: 0, disabled: true });
  StatusControl = new FormControl({ value: 'NEW', disabled: true })
  EDRPOControl = new FormControl({ value: '', disabled: true })

  @ViewChild('formRef') formRef!: NgForm;

  constructor(private translateService: TranslateService) {
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

  convertFile(file : File) : Observable<string> {
    const result = new ReplaySubject<string>(1);
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = (event) => result.next(btoa(event?.target?.result?.toString() as string));
    return result;
  }

  formatBytes(bytes: number, decimals = 2) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'kB', 'MB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  getFile(event: any): void {
    this.convertFile(event.target.files[0]).subscribe(base64 => {
      this.writeValue({
        FileName: event.target.files[0].name.split('.')[0],
        FileExt: event.target.files[0].name.split('.').pop(),
        FileSize: event.target.files[0].size,
        FileBody: base64 !== '' ? base64 : '',
        Description: this.DescriptionControl.value
      });
    });
  }

  isFileExist():boolean {
    if (this.formGroup.controls['FileName'].value != '')
      {return true;};
      return false;
  }

  private initForm(): void {
    const controls: ModelControl<SupdocumentForm> = {
      FileName: this.FileNameControl,
      FileExt: this.FileExtControl,
      FileSize: this.FileSizeControl,
      FileBody: this.FileBodyControl,
      Description: this.DescriptionControl,
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
