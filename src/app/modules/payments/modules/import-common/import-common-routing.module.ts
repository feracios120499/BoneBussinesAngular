import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImportCommonComponent } from './import-common.component';

const routes: Routes = [{ path: '', component: ImportCommonComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImportCommonRoutingModule {}
