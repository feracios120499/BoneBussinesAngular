import { toggleCollapsed } from '@actions/menu.actions';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { bankDateSelector } from '@selectors/app.selectors';
import { isCollapsedSelector, isOpenMenuSelector, menuSelector, subMenuSelector } from '@selectors/menu.selectors';
import { callCenterPhonesLocalSelector, callCenterPhonesSelector, callCenterWorkSelector, ecpSupportPhonesSelector } from '@selectors/settings.selectors';
import { countCustomersSelector, currentCustomerNameSelector, customersSelector } from '@selectors/user.selectors';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  constructor(private store: Store, private el: ElementRef) {
    setTimeout(() => {
      console.log(el.nativeElement.children[0].children[0].offsetWidth - el.nativeElement.children[0].children[0].clientWidth);
    }, 3000);


  }

  public menu$ = this.store.select(menuSelector);
  public subMenu$ = this.store.select(subMenuSelector);
  public customerName$ = this.store.select(currentCustomerNameSelector);
  public customers$ = this.store.select(customersSelector);
  public bankDate$ = this.store.select(bankDateSelector);
  public callCenterPhones$ = this.store.select(callCenterPhonesSelector);
  public callCenterPhonesLocal$ = this.store.select(callCenterPhonesLocalSelector);
  public callCenterWork$ = this.store.select(callCenterWorkSelector);
  public ecpSupportPhone$ = this.store.select(ecpSupportPhonesSelector);
  public isCollapsed$ = this.store.select(isCollapsedSelector);
  public isOpenMenu$ = this.store.select(isOpenMenuSelector);
  public countCustomers$ = this.store.select(countCustomersSelector);

  public isOpenCustomersList = false;

  ngOnInit(): void {
  }

  collapseToggle(): void {
    this.store.dispatch(toggleCollapsed());
  }
  openCustomersList(): void {
    this.isOpenCustomersList = !this.isOpenCustomersList;
  }

}
