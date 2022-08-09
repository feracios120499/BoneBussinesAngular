import { ChangeDetectionStrategy, Component, Input, OnInit, ViewChild } from '@angular/core';
import { BaseB1ModalComponent } from '@modals/base-b1-modal.component';
import { SupdocumentForm } from '@modules/sup-documents/types/supdocument-form.model';
import { SupdocumentModalConfig } from '@modules/sup-documents/types/supdocument-modal-config.model';
import { SupdocumentModalResult } from '@modules/sup-documents/types/supdocument-modal-result.model';
import { Store } from '@ngrx/store';
import { SupDocumentsSelectors } from '@store/sup-documents/selectors';
import { Observable } from 'rxjs';
import { SupdocumentFormComponent } from '../supdocument-form/supdocument-form.component';

@Component({
  selector: 'app-supdocument-add-modal',
  templateUrl: './supdocument-add-modal.component.html',
  styleUrls: ['./supdocument-add-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SupdocumentAddModalComponent extends BaseB1ModalComponent<SupdocumentModalResult> implements OnInit {
  @Input() config!: SupdocumentModalConfig;

  result!: SupdocumentModalResult;
  isLoading$: Observable<boolean> = this.store.select(SupDocumentsSelectors.isLoadingSupdocumentsCreate);
  supdocumentForm!: SupdocumentForm;

  @ViewChild('formRef') formRef!: SupdocumentFormComponent;


  constructor(private store: Store) {
    super();
  }


  ngOnInit(): void {
    super.ngOnInit();
  }

  onSave(): void {
    if (!this.formRef.submitForm()) {
      return;
    }
    this.result = this.supdocumentForm;
    console.log('res', this.result);
    this.ok();
  }
}
