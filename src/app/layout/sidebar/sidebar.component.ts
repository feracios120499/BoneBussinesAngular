import { toggleCollapsed, toggleCustomers } from '@actions/menu.actions';
import { selectCurrentClientId, setCurrentClientId } from '@actions/user.actions';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { bankDateSelector } from '@selectors/app.selectors';
import { isCollapsedSelector, isOpenCustomersSelector, isOpenMenuSelector, menuSelector, subMenuSelector } from '@selectors/menu.selectors';
import { callCenterPhonesLocalSelector, callCenterPhonesSelector, callCenterWorkSelector, ecpSupportPhonesSelector } from '@selectors/settings.selectors';
import { countCustomersSelector, currentCustomerNameSelector, currentCustomerSelector, customersSelector } from '@selectors/user.selectors';
import { Customer } from 'src/app/@shared/models/profile.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  constructor(private store: Store) {

  }

  public menu$ = this.store.select(menuSelector);
  public subMenu$ = this.store.select(subMenuSelector);
  public customerName$ = this.store.select(currentCustomerNameSelector);
  public customers$ = this.store.select(customersSelector);
  public currentCustomer$ = this.store.select(currentCustomerSelector);
  public bankDate$ = this.store.select(bankDateSelector);
  public callCenterPhones$ = this.store.select(callCenterPhonesSelector);
  public callCenterPhonesLocal$ = this.store.select(callCenterPhonesLocalSelector);
  public callCenterWork$ = this.store.select(callCenterWorkSelector);
  public ecpSupportPhone$ = this.store.select(ecpSupportPhonesSelector);
  public isCollapsed$ = this.store.select(isCollapsedSelector);
  public isOpenMenu$ = this.store.select(isOpenMenuSelector);
  public countCustomers$ = this.store.select(countCustomersSelector);

  public isOpenCustomersList$ = this.store.select(isOpenCustomersSelector);

  ngOnInit(): void {
  }

  collapseToggle(): void {
    this.store.dispatch(toggleCollapsed());
  }

  toggleCustomers(): void {
    this.store.dispatch(toggleCustomers());
  }

  setCustomer(customer: Customer): void {
    this.store.dispatch(selectCurrentClientId({ clientId: customer.ClientId }));
  }

}
