import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthorizedLayoutComponent } from './layout/authorized-layout/authorized-layout.component';

const routes: Routes = [
  { path: '', redirectTo: '/auth/logon', pathMatch: 'full' },
  { path: 'auth', redirectTo: '/auth/logon', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((p) => p.AuthModule),
  },
  {
    path: '',
    component: AuthorizedLayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./modules/dashboard/dashboard.module').then(
            (p) => p.DashboardModule
          ),
      },
      {
        path: 'accounts',
        loadChildren: () =>
          import('./modules/accounts/accounts.module').then(
            (p) => p.AccountsModule
          ),
      },
      {
        path: 'payments',
        loadChildren: () =>
          import('./modules/payments/payments.module').then(
            (p) => p.PaymentsModule
          ),
      },
      {
        path: 'cards',
        loadChildren: () =>
          import('./modules/cards/cards.module').then((m) => m.CardsModule),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./modules/users/users.module').then((m) => m.UsersModule),
      },
      {
        path: 'correspondents',
        loadChildren: () =>
          import('./modules/correspondents/correspondents.module').then(
            (m) => m.CorrespondentsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
