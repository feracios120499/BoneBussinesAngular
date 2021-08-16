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
import { AccountHeaderComponent } from './components/account-header/account-header.component';
import { AccountComponent } from './views/account/account.component';
import { AccountCardComponent } from './components/account-card/account-card.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { AccountEditModalComponent } from './components/account-edit-modal/account-edit-modal.component';
import { AccountTransactionsComponent } from './components/account-transactions/account-transactions.component';
import { AccountTransactionHeaderComponent } from './components/account-transaction-header/account-transaction-header.component';
import { AccountTransactionsListComponent } from './components/account-transactions-list/account-transactions-list.component';

@NgModule({
    declarations: [
        AccountsComponent,
        AccountsHeaderComponent,
        AccountsTabsComponent,
        AccountsActionsComponent,
        AccountsListComponent,
        AccountRowComponent,
        AccountHeaderComponent,
        AccountComponent,
        AccountCardComponent,
        AccountDetailsComponent,
        AccountEditModalComponent,
        AccountTransactionsComponent,
        AccountTransactionHeaderComponent,
        AccountTransactionsListComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        AccountsRoutingModule,
        ReactiveComponentModule
    ]
})
export class AccountsModule { }
