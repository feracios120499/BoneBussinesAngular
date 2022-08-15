import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { PayFormsSelectors } from '@store/payments/forms/selectors';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'payment-create-tabs',
  templateUrl: './create-tabs.component.html',
  styleUrls: ['./create-tabs.component.scss'],
})
export class CreateTabsComponent implements OnInit {
  constructor(private router: Router, private store: Store, private route: ActivatedRoute) {}

  tabs = [
    {
      route: 'within-country',
      roles: ['Director', 'Accountant', 'PaymentsManager', 'ForeignCurrencyPaymentsManager'],
      icon: 'country',
      label: 'components.pay.actions.inUrainePay',
    },
    {
      route: 'my-accounts',
      roles: ['Director', 'Accountant', 'PaymentsManager', 'ForeignCurrencyPaymentsManager'],
      icon: 'cards',
      label: 'components.pay.actions.innerPay',
    },
    {
      route: 'swift',
      roles: ['Director', 'Accountant', 'ForeignCurrencyPaymentsManager'],
      icon: 'swift',
      label: 'components.pay.actions.swift',
    },
  ];

  currentTab = this.tabs.find((p) => this.router.url.includes(p.route)) || this.tabs[0];
  currentIndex = this.tabs.indexOf(this.currentTab);
  showTabs$ = this.store.select(PayFormsSelectors.showCreateTabs);
  ngOnInit(): void {
    console.log(this.currentTab);

    this.router.events.pipe(filter((p) => p instanceof NavigationEnd)).subscribe((value) => this.initTabs());
  }

  initTabs(): void {
    this.currentTab = this.tabs.find((p) => this.router.url.includes(p.route)) || this.tabs[0];
    this.currentIndex = this.tabs.indexOf(this.currentTab);
  }

  selectTab(tab: any): void {
    this.currentTab = tab;
    this.router.navigate([tab.route], { relativeTo: this.route });
  }

  selectTabByIndex(): void {
    this.selectTab(this.tabs[this.currentIndex]);
  }
}
