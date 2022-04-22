import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReissueApplicationsComponent } from './reissue-applications.component';

const routes: Routes = [{ path: '', component: ReissueApplicationsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReissueApplicationsRoutingModule { }
