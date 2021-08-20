
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { AcctEdit } from '@stores/acct.store';
import { editFormSelector } from '@selectors/acct.selectors';
import { AcctActions } from '@actions/acct.actions';

@Component({
  selector: 'app-account-edit-modal',
  templateUrl: './account-edit-modal.component.html',
  styleUrls: ['./account-edit-modal.component.scss']
})
export class AccountEditModalComponent implements OnInit {

  @Input() name?: string;

  constructor(public activeModal: NgbActiveModal, private store: Store) { }

  editForm$ = this.store.select(editFormSelector);

  ngOnInit(): void {
    this.store.dispatch(AcctActions.setEditFormInitState());
    if (this.name) {
      this.store.dispatch(AcctActions.setAccountName({ name: this.name }));
    }
  }

  save(): void {
    this.store.dispatch(AcctActions.sumbitEditForm());
    this.activeModal.close();
  }

}
