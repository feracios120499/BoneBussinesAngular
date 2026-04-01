import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupdocumentComponent } from './supdocument.component';

const routes: Routes = [{ path: '', component: SupdocumentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupdocumentRoutingModule {}
