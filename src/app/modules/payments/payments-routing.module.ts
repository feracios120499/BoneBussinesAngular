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
        loadChildren: () => import('./modules/incoming/incoming.module').then(p => p.IncomingModule),
      },
      {
        path: 'create',
        loadChildren: () => import('./modules/create/create.module').then(p => p.CreateModule)
      },
    ]
  },
  { path: '', redirectTo: 'incomings' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsRoutingModule { }
