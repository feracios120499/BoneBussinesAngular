import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateMyAccountsComponent } from './create-my-accounts.component';

const routes: Routes = [{ path: '', component: CreateMyAccountsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateMyAccountsRoutingModule { }
