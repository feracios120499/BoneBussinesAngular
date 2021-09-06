import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '@core/core.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { SharedModule } from 'src/app/@shared/shared.module';
import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsComponent } from './views/accounts/accounts.component';
import { AccountsHeaderComponent } from './components/accounts-header/accounts-header.component';
import { AccountsTabsComponent } from './components/accounts-tabs/accounts-tabs.component';
import { AccountsActionsComponent } from './components/accounts-actions/accounts-actions.component';
import { AccountsListComponent } from './components/accounts-list/accounts-list.component';
import { AccountRowComponent } from './components/account-row/account-row.component';

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
        SharedModule,
        AccountsRoutingModule,
        ReactiveComponentModule
    ]
})
export class AccountsModule { }
