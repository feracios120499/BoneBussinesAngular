import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveComponentModule } from '@ngrx/component';
import { B1DirectivesModule } from 'src/app/@shared/modules/b1-directives/b1-directives.module';
import { B1PipesModule } from 'src/app/@shared/modules/b1-pipes/b1-pipes.module';
import { SharedModule } from 'src/app/@shared/shared.module';

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
        SharedModule,
        AccountsRoutingModule,
        ReactiveComponentModule,
        B1PipesModule,
        B1DirectivesModule
    ]
})
export class AccountsModule { }
