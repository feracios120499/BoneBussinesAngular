import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { AccountModel } from '@modules/accounts/models/account.model';
import { AcctDetailsSelectors } from '../../store/selectors';
import { AccountEditModalComponent } from '../account-edit-modal/account-edit-modal.component';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss'],
})
export class AccountDetailsComponent implements OnInit {
  constructor(private store: Store, private modalService: NgbModal) {}

  account$ = this.store.select(AcctDetailsSelectors.currentAccount);
  isLoading$ = this.store.select(AcctDetailsSelectors.isLoadingCurrentAccount);

  ngOnInit(): void {}

  editAccount(account: AccountModel): void {
    const modalRef = this.modalService.open(AccountEditModalComponent);
    modalRef.componentInstance.name = account.name;
  }
}
