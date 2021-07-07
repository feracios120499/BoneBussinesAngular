import { toggleCollapsed } from '@actions/settings.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { bankDateSelector } from '@selectors/app.selectors';
import { callCenterPhonesLocalSelector, callCenterPhonesSelector, callCenterWorkSelector, ecpSupportPhonesSelector, isCollapsedSelector } from '@selectors/settings.selectors';
import { currentCustomerNameSelector, menuSelector, subMenuSelector } from '@selectors/user.selectors';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menu$ = this.store.select(menuSelector);
  public subMenu$ = this.store.select(subMenuSelector);
  public customerName$ = this.store.select(currentCustomerNameSelector);
  public bankDate$ = this.store.select(bankDateSelector);
  public callCenterPhones$ = this.store.select(callCenterPhonesSelector);
  public callCenterPhonesLocal$ = this.store.select(callCenterPhonesLocalSelector);
  public callCenterWork$ = this.store.select(callCenterWorkSelector);
  public ecpSupportPhone$ = this.store.select(ecpSupportPhonesSelector);
  public isCollapsed$ = this.store.select(isCollapsedSelector);
  constructor(private store: Store) {

  }

  ngOnInit(): void {
  }

  collapseToggle(): void {
    this.store.dispatch(toggleCollapsed());
  }

}
