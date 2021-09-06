import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppSelectors } from '@store/app/selectors';
import { MenuActions } from '@store/menu/actions';
import { MenuSelectors } from '@store/menu/selectors';
import { SettingsSelectors } from '@store/settings/selectors';
import { UserActions } from '@store/user/actions';
import { UserSelectors } from '@store/user/selectors';
import { Customer } from '@models/profile.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  constructor(private store: Store) {

  }

  public menu$ = this.store.select(MenuSelectors.menu);
  public subMenu$ = this.store.select(MenuSelectors.subMenu);
  public customerName$ = this.store.select(UserSelectors.currentCustomerName);
  public customers$ = this.store.select(UserSelectors.customers);
  public currentCustomer$ = this.store.select(UserSelectors.currentCustomer);
  public bankDate$ = this.store.select(AppSelectors.bankDate);
  public callCenterPhones$ = this.store.select(SettingsSelectors.callCenterPhones);
  public callCenterPhonesLocal$ = this.store.select(SettingsSelectors.callCenterPhonesLocal);
  public callCenterWork$ = this.store.select(SettingsSelectors.callCenterWork);
  public ecpSupportPhone$ = this.store.select(SettingsSelectors.ecpSupportPhones);
  public isCollapsed$ = this.store.select(MenuSelectors.isCollapsed);
  public isOpenMenu$ = this.store.select(MenuSelectors.isOpenMenu);
  public countCustomers$ = this.store.select(UserSelectors.countCustomers);

  public isOpenCustomersList$ = this.store.select(MenuSelectors.isOpenCustomers);

  ngOnInit(): void {
  }

  collapseToggle(): void {
    this.store.dispatch(MenuActions.toggleCollapsed());
  }

  toggleCustomers(): void {
    this.store.dispatch(MenuActions.toggleCustomers());
  }

  setCustomer(customer: Customer): void {
    this.store.dispatch(UserActions.selectCurrentClientId({ clientId: customer.ClientId }));
  }

}
