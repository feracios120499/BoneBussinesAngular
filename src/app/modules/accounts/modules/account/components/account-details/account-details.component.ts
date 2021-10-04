import { Component, OnInit } from '@angular/core';
import { PaymentAction } from '@models/enums/payment-action.enum';
import { PaymentModal } from '@models/payment-modal.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { AcctDetailsSelectors } from '@store/acct/details/selectors';
import { AccountModel } from 'src/app/@shared/models/account.model';
import { AccountEditModalComponent } from '../account-edit-modal/account-edit-modal.component';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {

  constructor(private store: Store, private modalService: NgbModal) { }

  account$ = this.store.select(AcctDetailsSelectors.currentAccount);
  isLoading$ = this.store.select(AcctDetailsSelectors.isLoadingCurrentAccount);

  ngOnInit(): void {
  }

  editAccount(account: AccountModel): void {
    const modalRef = this.modalService.open(AccountEditModalComponent);
    modalRef.componentInstance.name = account.name;
  }

}
