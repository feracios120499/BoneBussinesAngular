import { Component, ChangeDetectionStrategy, ViewChild, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { BaseB1ModalComponent } from '@modals/base-b1-modal.component';
import { CorrespondentFormComponent } from '../correspondent-form/correspondent-form.component';
import { CorrespondentModalConfig } from '@modules/correspondents/models/correspondent-modal-config.model';
import { CorrespondentModalResult } from '@modules/correspondents/models/correspondent-modal-result.model';
import { CorrespondentsSelectors } from '@modules/correspondents/store/selectors';
import { CorrespondentForm } from '@modules/correspondents/models/correspondent-form.model';

@Component({
  selector: 'app-correspondent-modal',
  templateUrl: './correspondent-modal.component.html',
  styleUrls: ['./correspondent-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CorrespondentModalComponent extends BaseB1ModalComponent<CorrespondentModalResult> implements OnInit {
  @Input() config!: CorrespondentModalConfig;

  result!: CorrespondentModalResult;
  isLoading$: Observable<boolean> = this.store.select(CorrespondentsSelectors.isLoadingCorrespondentCreate);
  correspondentForm!: CorrespondentForm;

  @ViewChild('formRef') formRef!: CorrespondentFormComponent;

  constructor(private store: Store) {
    super();
  }

  ngOnInit(): void {
    super.ngOnInit();
    if (this.config.editingCorrespondent) {
      const { accNumber, bankCode, bankName, name, taxCode, accCurrencyCode } = this.config.editingCorrespondent;
      this.correspondentForm = {
        accNumber,
        bankCode,
        bankName,
        name,
        taxCode,
        accCurrencyCode,
      };
    }
  }

  onSave(): void {
    if (!this.formRef.submitForm()) {
      return;
    }
    if (this.config.editingCorrespondent) {
      const { id, creatingDate, userId } = this.config.editingCorrespondent!;
      this.result = {
        ...this.correspondentForm,
        id,
        creatingDate,
        userId,
      };
    } else {
      this.result = this.correspondentForm;
    }
    this.ok();
  }
}
