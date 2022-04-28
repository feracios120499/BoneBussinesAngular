import { Component, ChangeDetectionStrategy, ViewChild, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { CorrespondentFormComponent } from '../correspondent-form/correspondent-form.component';
import { CorrespondentForm } from '@modules/correspondents/models/correspondent-form.model';
import { Correspondent } from '@modules/correspondents/models/correspondent.model';
import { CorrespondentsSelectors } from '@modules/correspondents/store/selectors';
import { CorrespondentUpdateModel } from '@modules/correspondents/models/correspondent-update.model';
import { CorrespondentsActions } from '@modules/correspondents/store/actions';

@Component({
  selector: 'app-correspondent-modal',
  templateUrl: './correspondent-modal.component.html',
  styleUrls: ['./correspondent-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CorrespondentModalComponent implements OnInit {
  @Input() editingCorrespondent?: Correspondent;
  isLoading$: Observable<boolean> = this.store.select(CorrespondentsSelectors.isLoadingCorrespondentCreate);
  correspondentForm!: CorrespondentForm;

  @ViewChild('formRef') formRef!: CorrespondentFormComponent;

  constructor(private store: Store, private activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    if (this.editingCorrespondent) {
      const { accNumber, bankCode, bankName, name, taxCode, accCurrencyCode } = this.editingCorrespondent;
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
    if (this.editingCorrespondent) {
      this.updateCorrespondent();
    } else {
      this.createCorrespondent();
    }
    this.activeModal.close();
  }

  updateCorrespondent(): void {
    const { id, creatingDate, userId } = this.editingCorrespondent!;
    const model: CorrespondentUpdateModel = {
      ...this.correspondentForm,
      id,
      creatingDate,
      userId,
    };
    this.store.dispatch(CorrespondentsActions.updateCorrespondentRequest(model));
  }

  createCorrespondent(): void {
    this.store.dispatch(CorrespondentsActions.createCorrespondentRequest(this.correspondentForm));
  }
}
