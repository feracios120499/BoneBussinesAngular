import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateWithinCountryComponent } from './create-within-country.component';

const routes: Routes = [{ path: '', component: CreateWithinCountryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateWithinCountryRoutingModule { }
