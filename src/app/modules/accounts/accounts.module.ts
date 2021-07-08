import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/@shared/shared.module';
import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsComponent } from './views/accounts/accounts.component';

@NgModule({
    declarations: [
        AccountsComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        AccountsRoutingModule
    ]
})
export class AccountsModule { }
