import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupdocumentsComponent } from './supdocuments.component';

const routes: Routes = [
  { path: '', component: SupdocumentsComponent },
  {
    path: 'details/:supdocumentId',
    loadChildren: () => import('./modules/supdocument/supdocument.module').then((p) => p.SupdocumentModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupdocumentsRoutingModule {}
