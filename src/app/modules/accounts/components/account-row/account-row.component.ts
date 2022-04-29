import { Component, Input, OnInit } from '@angular/core';
import { B1RequisitesModalComponent } from '@modals/b1-requisites-modal/b1-requisites-modal.component';
import { RequisitesModalConfig } from '@models/modals/requisites-modal-config.model';
import { AccountModel } from '@modules/accounts/models/account.model';
import { AcctActions } from '@modules/accounts/store/actions';
import { Store } from '@ngrx/store';
import { ModalService } from '@services/modal.service';
import { SharedActions } from '@store/shared/actions';
import { UserSelectors } from '@store/user/selectors';

@Component({
  selector: 'app-account-row',
  templateUrl: './account-row.component.html',
  styleUrls: ['./account-row.component.scss'],
})
export class AccountRowComponent implements OnInit {
  @Input() account!: AccountModel;
  private userEmail?: string;
  constructor(private store: Store, private modalService: ModalService) {
    store.select(UserSelectors.userEmail).subscribe((email) => (this.userEmail = email));
  }

  ngOnInit(): void {}

  showRequisitesModal(): void {
    this.store.dispatch(AcctActions.openRequisitesModal({ account: this.account }));
  }

  createInnerPayment(): void {}

  createOuterPayment(): void {}

  createSwiftPayment(): void {}
}
