import { setAccountName } from '@actions/acct.actions';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { currentAccountSelector, isLoadingCurrentAccountSelector } from '@selectors/acct.selectors';
import { AccountModel } from 'src/app/@shared/models/account.model';
import { AccountEditModalComponent } from '../account-edit-modal/account-edit-modal.component';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {

  constructor(private store: Store, private modalService: NgbModal) { }

  account$ = this.store.select(currentAccountSelector);
  isLoading$ = this.store.select(isLoadingCurrentAccountSelector);

  ngOnInit(): void {
  }

  editAccount(account: AccountModel): void {
    const modalRef = this.modalService.open(AccountEditModalComponent);
    modalRef.componentInstance.name = account.Name;
  }

}
