import { ChangeDetectionStrategy, Component, Input, OnInit, ViewChild } from '@angular/core';
import { BaseB1ModalComponent } from '@modals/base-b1-modal.component';
import { SupdocumentSendForm } from '@modules/sup-documents/types/supdocument-form.model';
import { SupdocumentSendModalConfig } from '@modules/sup-documents/types/supdocument-modal-config.model';
import { SupdocumentSendModalResult } from '@modules/sup-documents/types/supdocument-modal-result.model';
import { Store } from '@ngrx/store';
import { SupDocumentsSelectors } from '@store/sup-documents/selectors';
import { Observable } from 'rxjs';
import { SupdocumentFormSendComponent } from '../supdocument-form-send/supdocument-form-send.component';

@Component({
  selector: 'app-supdocument-send-modal',
  templateUrl: './supdocument-send-modal.component.html',
  styleUrls: ['./supdocument-send-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SupdocumentSendModalComponent extends BaseB1ModalComponent<SupdocumentSendModalResult> implements OnInit {
  @Input() config!: SupdocumentSendModalConfig;

  result!: SupdocumentSendModalResult;
  isLoading$: Observable<boolean> = this.store.select(SupDocumentsSelectors.isLoadingSupdocuments);
  supdocumentSendForm!: SupdocumentSendForm;

  @ViewChild('formRef') formRef!: SupdocumentFormSendComponent;

  constructor(private store: Store) {
    super();
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  onSend(): void {
    if (!this.formRef.submitForm()) {
      return;
    }
    this.result = this.supdocumentSendForm;
    console.log('res', this.result);
    this.ok();
  }
}
