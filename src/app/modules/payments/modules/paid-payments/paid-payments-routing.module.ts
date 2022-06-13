import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaidPaymentsComponent } from './paid-payments.component';

const routes: Routes = [{ path: '', component: PaidPaymentsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaidPaymentsRoutingModule { }
