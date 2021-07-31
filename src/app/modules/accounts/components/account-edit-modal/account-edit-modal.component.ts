import { setAccountName, setEditFormInitState, sumbitEditForm } from '@actions/acct.actions';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { AcctEdit } from '@reducers/acct.reducers';
import { editFormSelector } from '@selectors/acct.selectors';

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
    this.store.dispatch(setEditFormInitState());
    if (this.name) {
      this.store.dispatch(setAccountName({ name: this.name }));
    }
  }

  save(): void {
    this.store.dispatch(sumbitEditForm());
    this.activeModal.close();
  }

}
