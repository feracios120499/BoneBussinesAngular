import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthorizedLayoutComponent } from './layout/authorized-layout/authorized-layout.component';

const routes: Routes = [
  { path: '', redirectTo: '/auth/logon', pathMatch: 'full' },
  { path: 'auth', redirectTo: '/auth/logon', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(p => p.AuthModule) },
  {
    path: '',
    component: AuthorizedLayoutComponent,
    children: [
      { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(p => p.DashboardModule) },
      { path: 'accounts', loadChildren: () => import('./modules/accounts/accounts.module').then(p => p.AccountsModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
