import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WithinCountryComponent } from './within-country.component';

const routes: Routes = [{ path: '', component: WithinCountryComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WithinCountryRoutingModule { }
