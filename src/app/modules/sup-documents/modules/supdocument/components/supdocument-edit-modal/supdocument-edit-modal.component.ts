import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { SupDocumentDetailsActions } from '../../store/actions';
import { SupDocumentDetailsSelectors } from '../../store/selectors';

@Component({
  selector: 'app-supdocument-edit-modal',
  templateUrl: './supdocument-edit-modal.component.html',
  styleUrls: ['./supdocument-edit-modal.component.scss'],
})
export class SupdocumentEditModalComponent implements OnInit {
  @Input() name?: string;
  @Input() description?: string;
  @Input() id?: number;

  constructor(public activeModal: NgbActiveModal, private store: Store) {}

  editForm$ = this.store.select(SupDocumentDetailsSelectors.editForm);

  ngOnInit(): void {
    this.store.dispatch(SupDocumentDetailsActions.setEditFormInitState());
    if (this.name) {
      this.store.dispatch(
        SupDocumentDetailsActions.setSupdocumentName({
          name: this.name,
        })
      );
    }
    this.store.dispatch(
      SupDocumentDetailsActions.setSupdocumentDescription({
        description: this.description as string,
      })
    );
    this.store.dispatch(
      SupDocumentDetailsActions.setSupdocumentId({
        id: this.id as number,
      })
    );
  }

  save(): void {
    this.store.dispatch(SupDocumentDetailsActions.sumbitEditForm());
    this.activeModal.close();
  }
}
