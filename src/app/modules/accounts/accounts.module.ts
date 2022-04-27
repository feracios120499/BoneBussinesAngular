import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveComponentModule } from '@ngrx/component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { NgrxFormsModule } from 'ngrx-forms';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { B1IconModule } from '@directives/b1-icon/b1-icon.module';
import { IbanModule } from '@directives/iban/iban.module';
import { MobileMoreModule } from '@directives/mobile-more/mobile-more.module';
import { MoreAutoDirectionModule } from '@directives/more-auto-direction/more-auto-direction.module';
import { VirtualPatchModule } from '@directives/virtual-patch/virtual-patch.module';

import { MoneyModule } from '@pipes/money/money.module';
import { WebClassModule } from '@directives/web-class/web-class.module';
import { MobileClassModule } from '@directives/mobile-class/mobile-class.module';
import { B1CardLoaderModule } from '@ui/b1-card-loader/b1-card-loader.module';
import { AccountsFilterModule } from '@pipes/accounts-filter/accounts-filter.module';
import { AccountsRoutingModule } from './accounts-routing.module';

import { AccountRowComponent } from './components/account-row/account-row.component';
import { AccountsActionsComponent } from './components/accounts-actions/accounts-actions.component';
import { AccountsHeaderComponent } from './components/accounts-header/accounts-header.component';
import { AccountsListComponent } from './components/accounts-list/accounts-list.component';
import { AccountsTabsComponent } from './components/accounts-tabs/accounts-tabs.component';
import { AccountsComponent } from './views/accounts/accounts.component';

@NgModule({
  declarations: [
    AccountsComponent,
    AccountsHeaderComponent,
    AccountsTabsComponent,
    AccountsActionsComponent,
    AccountsListComponent,
    AccountRowComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    TranslateModule,
    AccountsRoutingModule,
    ReactiveComponentModule,
    NgrxFormsModule,
    NgScrollbarModule,
    VirtualPatchModule,
    NgxSkeletonLoaderModule,
    WebClassModule,
    MobileClassModule,
    MobileMoreModule,
    MoreAutoDirectionModule,
    VirtualPatchModule,
    B1IconModule,
    IbanModule,
    MoneyModule,
    B1CardLoaderModule,
    AccountsFilterModule,
    ScrollingModule,
  ],
})
export class AccountsModule {}
