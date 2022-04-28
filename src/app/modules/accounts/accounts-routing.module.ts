import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts.component';

const routes: Routes = [
  { path: '', component: AccountsComponent },
  {
    path: ':bankId/:accountId',
    loadChildren: () => import('./modules/account/account.module').then((p) => p.AccountModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountsRoutingModule {}
