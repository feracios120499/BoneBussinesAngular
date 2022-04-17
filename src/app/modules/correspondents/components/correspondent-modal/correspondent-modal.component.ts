import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  Input,
  OnInit,
} from '@angular/core';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { CorrespondentFormComponent } from '../correspondent-form/correspondent-form.component';
import { CorrespondentForm } from '@models/correspondents/correspondent-form.model';
import { Correspondent } from '@models/correspondents/correspondent.model';
import { CorrespondentsActions } from '@store/correspondents/actions';

@Component({
  selector: 'app-correspondent-modal',
  templateUrl: './correspondent-modal.component.html',
  styleUrls: ['./correspondent-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CorrespondentModalComponent implements OnInit {
  @Input() editingCorrespondent?: Correspondent;
  // FOR DEMO PURPOSE ONLY:
  isLoading$: Observable<boolean> = of(false);
  correspondentForm!: CorrespondentForm;

  @ViewChild('formRef') formRef!: CorrespondentFormComponent;

  constructor(private store: Store, private activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    if (this.editingCorrespondent) {
      const { accNumber, bankCode, bankName, name, taxCode } =
        this.editingCorrespondent;
      this.correspondentForm = { accNumber, bankCode, bankName, name, taxCode };
    }
  }

  onSave(): void {
    if (!this.formRef.submitForm()) {
      return;
    }
    console.log('Correspondent form is valid: ', this.formRef.isValid);

    if (this.editingCorrespondent) {
      this.updateCorrespondent();
    } else {
      this.createCorrespondent();
    }
    this.activeModal.close();
  }

  updateCorrespondent(): void {
    console.log('Correspondent is updated: ', this.correspondentForm);
    // this.store.dispatch(
    //   CorrespondentsActions.updateCorrespondentRequest(this.correspondentForm)
    // );
  }

  createCorrespondent(): void {
    console.log('Correspondent is updated: ', this.correspondentForm);
    // this.store.dispatch(
    //   CorrespondentsActions.createCorrespondentRequest(this.correspondentForm)
    // );
  }
}
