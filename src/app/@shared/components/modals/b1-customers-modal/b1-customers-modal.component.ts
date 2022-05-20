import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';

import { BaseB1ModalComponent } from '@modals/base-b1-modal.component';
import { CustomersModalConfig } from '@models/modals/customers-modal-config.model';
import { CustomersModalResult } from '@models/modals/customers-modal-result.model';
import { Customer } from '@models/profile.model';
import { UserSelectors } from '@store/user/selectors';
import { required } from '@store/shared';

@Component({
  selector: 'app-b1-customers-modal',
  templateUrl: './b1-customers-modal.component.html',
  styleUrls: ['./b1-customers-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class B1CustomersModalComponent extends BaseB1ModalComponent<CustomersModalResult> {
  @Input() config!: CustomersModalConfig;

  currentCustomer$: Observable<Customer> = required(this.store.select(UserSelectors.currentCustomer));
  customers$: Observable<Customer[]> = required(this.store.select(UserSelectors.notCurrentCustomers));
  result!: CustomersModalResult;
  filterTerm = '';

  constructor(public modal: NgbActiveModal, private store: Store) {
    super();
  }

  onCustomerSelect(customer: Customer): void {
    this.result = { clientId: customer.clientId };
    this.ok();
    this.modal.close();
  }
}
