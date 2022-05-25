import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoansComponent } from './loans.component';

const routes: Routes = [
  {
    path: '',
    component: LoansComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'loans',
      },
      {
        path: 'loans',
        loadChildren: () => import('./modules/loans-list/loans-list.module').then((m) => m.LoansListModule),
        data: { title: 'aside.nav.LOANS' },
      },
      {
        path: 'loanSchedule/:bankId/:loanId',
        loadChildren: () => import('./modules/loan-schedule/loan-schedule.module').then((m) => m.LoanScheduleModule),
        data: { title: 'components.loan.schedule.title' },
      },
      {
        path: 'overdrafts',
        loadChildren: () => import('./modules/overdrafts/overdrafts.module').then((m) => m.OverdraftsModule),
        data: { title: 'components.loan.overdraftsHeader' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoansRoutingModule {}
