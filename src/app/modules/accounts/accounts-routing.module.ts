import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './views/account/account.component';
import { AccountsComponent } from './views/accounts/accounts.component';



const routes: Routes = [
    { path: '', component: AccountsComponent },
    { path: ':bankId/:accountId', component: AccountComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AccountsRoutingModule { }
