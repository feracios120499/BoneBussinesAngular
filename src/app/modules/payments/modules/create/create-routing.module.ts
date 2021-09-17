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
          import('./modules/create-within-country/create-within-country.module').then(p => p.CreateWithinCountryModule),
      },
      {
        path: 'my-accounts',
        loadChildren: () =>
          import('./modules/create-my-accounts/create-my-accounts.module').then(p => p.CreateMyAccountsModule)
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
