import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateComponent } from './create.component';

const routes: Routes = [
  {
    path: '', component: CreateComponent,
    children: [
      {
        path: 'within-country',
        loadChildren: () =>
          import('./../within-country/within-country.module').then(p => p.WithinCountryModule),
      },
      {
        path: 'my-accounts',
        loadChildren: () =>
          import('./../my-accounts/my-accounts.module').then(p => p.MyAccountsModule)
      },
      { path: '', redirectTo: 'within-country' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateRoutingModule { }
