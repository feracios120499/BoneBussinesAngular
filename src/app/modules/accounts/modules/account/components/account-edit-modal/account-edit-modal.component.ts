import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { AcctDetailsActions } from '@store/acct/details/actions';
import { AcctDetailsSelectors } from '@store/acct/details/selectors';
import { notNullAndUndefined } from '@store/shared';


@Component({
  selector: 'app-account-edit-modal',
  templateUrl: './account-edit-modal.component.html',
  styleUrls: ['./account-edit-modal.component.scss']
})
export class AccountEditModalComponent implements OnInit {

  @Input() name?: string;

  constructor(public activeModal: NgbActiveModal, private store: Store) { }

  editForm$ = this.store.select(AcctDetailsSelectors.editForm);

  ngOnInit(): void {
    this.store.dispatch(AcctDetailsActions.setEditFormInitState());
    if (this.name) {
      this.store.dispatch(AcctDetailsActions.setAccountName({ name: this.name }));
    }
  }

  save(): void {
    this.store.dispatch(AcctDetailsActions.sumbitEditForm());
    this.activeModal.close();
  }

}
