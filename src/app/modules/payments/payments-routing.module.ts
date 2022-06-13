import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PaymentsComponent } from './payments.component';

const routes: Routes = [
  {
    path: '',
    component: PaymentsComponent,
    children: [
      {
        path: 'incomings',
        loadChildren: () => import('./modules/incoming/incoming.module').then((p) => p.IncomingModule),
      },
      {
        path: 'create',
        loadChildren: () => import('./modules/create/create.module').then((p) => p.CreateModule),
      },
      {
        path: 'list',
        loadChildren: () => import('./modules/payments-list/payments-list.module').then((p) => p.PaymentsListModule),
      },
      {
        path: 'held',
        loadChildren: () => import('./modules/paid-payments/paid-payments.module').then((p) => p.PaidPaymentsModule),
      },
      {
        path: 'import-common',
        loadChildren: () => import('./modules/import-common/import-common.module').then((p) => p.ImportCommonModule),
      },
      { path: '', redirectTo: 'incomings' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentsRoutingModule {}
