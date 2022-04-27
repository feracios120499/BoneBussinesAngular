import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { MenuItem } from 'src/app/@shared/models/menu-item.model';
import { Customer } from 'src/app/@shared/models/profile.model';

export interface Menu {
  accounts: MenuItem;
  loans: MenuItem;
  deposits: MenuItem;
  payments: MenuItem;
  applications: MenuItem;
  supdocuments: MenuItem;
  salary: MenuItem;
  corpcards: MenuItem;
  [key: string]: MenuItem;
}

export interface SubMenu {
  branches: MenuItem;
  promotion: MenuItem;
  calculator: MenuItem;
  users: MenuItem;
  agents: MenuItem;
  instruction: MenuItem;
  mobiles: MenuItem;
  [key: string]: MenuItem;
}

@Injectable({
  providedIn: 'root',
})
export class MenuService extends BaseService {
  private menu: Menu = {
    accounts: {
      ngClass: "{active:$state.includes('app.acct')}",
      ngValue: 'accounts',
      icon: 'university',
      dataRole:
        'Director,Accountant,AccountsViewer,StatsViewer,PaymentsManager,ForeignCurrencyPaymentsManager,ForeignCurrencyApplicationsManager',
      route: 'accounts',
      // //gaTrackEvent: "['left-menu', 'view-accts']",
      dataTranslate: 'aside.nav.ACCOUNTS',
      moduleName: 'Accounts',
      position: 0,
    },
    loans: {
      ngClass: "{active:$state.includes('app.loan')}",
      ngValue: 'loans',
      icon: 'pie-chart',
      dataRole: 'Director,Accountant,LoansViewer',
      route: 'app.loan.loans',
      // gaTrackEvent: '[\'left-menu\', \'view-loans\']',
      dataTranslate: 'aside.nav.LOANS',
      moduleName: 'Loans',
      position: 1,
    },

    deposits: {
      ngClass: "{active:$state.includes('app.dpt.index')}",
      ngValue: 'deposits',
      icon: 'piggy-bank',
      dataRole: 'Director,Accountant,DepositsViewer',
      route: 'app.dpt.index',
      // gaTrackEvent: '[\'left-menu\', \'view-dpt\']',
      dataTranslate: 'aside.nav.DEPOSITS',
      moduleName: 'Deposits',
      position: 2,
    },
    payments: {
      ngClass:
        "{active: ($state.includes('app.payments') || $state.includes('app.paymentsAuto')) && !$state.includes('app.payments.recipients')}",
      ngValue: 'payments',
      icon: 'money-bill-wave',
      dataRole:
        'Director,Accountant,PaymentsManager,ForeignCurrencyPaymentsManager',
      route: 'payments',
      // gaTrackEvent: '[\'left-menu\', \'view-payments\']',
      dataTranslate: 'aside.nav.DOCUMENTS',
      moduleName: 'Payments',
      position: 3,
    },
    applications: {
      ngClass: "{active: $state.includes('app.fcapplications')}",
      ngValue: 'applications',
      icon: 'coins',
      dataRole: 'Director,Accountant,ForeignCurrencyApplicationsManager',
      route: 'app.fcapplications.list.made',
      // gaTrackEvent: '[\'left-menu\', \'view-fcapplications\']',
      dataTranslate: 'aside.nav.APPLICATION',
      moduleName: 'Applications',
      position: 4,
    },
    supdocuments: {
      ngClass: "{active: $state.includes('app.supdocuments')}",
      ngValue: 'supdocuments',
      icon: 'file',
      dataRole: 'Director,Accountant,ForeignCurrencyApplicationsManager',
      route: 'app.supdocuments.list.documents',
      // gaTrackEvent: '[\'left-menu\', \'view-sup-docs\']',
      dataTranslate: 'aside.nav.SUPDOCUMENTS',
      moduleName: 'SupportDocuments',
      position: 5,
    },
    salary: {
      ngClass: "{active: $state.includes('app.salary')}",
      ngValue: 'salary',
      icon: 'wallet',
      dataRole: 'Director,Accountant,SalaryAccountant',
      route: 'app.salary.projects',
      // gaTrackEvent: '[\'left-menu\', \'view-salary\']',
      dataTranslate: 'aside.nav.SALARY',
      moduleName: 'Salary',
      position: 6,
    },
    corpcards: {
      ngClass: "{active: $state.includes('app.corpcards.index')}",
      ngValue: 'corpcards',
      icon: 'credit-card',
      dataRole: 'Director,Accountant',
      route: 'cards',
      // gaTrackEvent: '[\'left-menu\', \'view-salary\']',
      dataTranslate: 'aside.nav.CORPCARDS',
      moduleName: 'CorpCards',
      position: 7,
    },
  };

  private subMenu: SubMenu = {
    branches: {
      ngClass: "{active:$state.includes('app.map.index')}",
      ngValue: 'branches',
      icon: 'map-marker',
      dataRole: '',
      route: 'app.map.index',
      dataTranslate: 'aside.nav.BranchesAndAtms',
      moduleName: 'Branches',
      position: 0,
    },
    promotion: {
      ngClass: "{active:$state.includes('app.prm.products')}",
      ngValue: 'promotion',
      icon: 'basket',
      dataRole: '',
      route: 'app.prm.products',
      dataTranslate: 'aside.nav.orderProduct',
      moduleName: 'Promotion',
      position: 0,
    },
    calculator: {
      ngClass: "{active:$state.includes('app.payments.calculator')}",
      ngValue: 'calculator',
      icon: 'calculator',
      dataRole: '',
      route: 'app.payments.calculator',
      dataTranslate: 'aside.nav.CALCULATOR',
      moduleName: 'Calculator',
      position: 0,
    },
    users: {
      ngClass: "{active:$state.includes('app.admin.index')}",
      ngValue: 'users',
      icon: 'users',
      dataRole: 'Director,Accountant,UsersManager',
      route: 'users',
      dataTranslate: 'aside.nav.EMPLOYEES',
      moduleName: 'Users',
      position: 0,
    },
    agents: {
      ngClass: "{active:$state.includes('app.payments.recipients')}",
      ngValue: 'agents',
      icon: 'agents',
      dataRole: 'Director,Accountant,PaymentsManager',
      route: 'correspondents',
      dataTranslate: 'aside.nav.CORRESPONDENTS',
      moduleName: 'ClientAgents',
      position: 0,
    },
    instruction: {
      ngClass: "{active:$state.includes('app.docs')}",
      ngValue: 'instruction',
      icon: 'book-reader',
      dataRole: '',
      route: 'instructions',
      dataTranslate: 'aside.nav.UserManual',
      moduleName: 'Instruction',
      position: 0,
    },
    mobiles: {
      ngClass: "{active:$state.includes('app.mobile.index')}",
      ngValue: 'mobiles',
      icon: 'mobile',
      dataRole: '',
      route: 'app.mobile.index',
      dataTranslate: 'aside.nav.MOBILEAPP',
      moduleName: 'Mobiles',
      position: 0,
    },
  };

  constructor(private http: HttpClient) {
    super();
  }

  getMenuForCustomer(customer: Customer): Array<MenuItem> {
    const result = new Array<MenuItem>();
    customer.menuSettings.forEach((item) => {
      const menuItem = { ...this.menu[item.name] };
      if (menuItem) {
        menuItem.position = item.number;
        result.push(menuItem);
      }
    });

    return result.sort((p) => p.position);
  }

  getSubMenu(): Array<MenuItem> {
    return Object.keys(this.subMenu).map((p) => this.subMenu[p]);
  }
}
