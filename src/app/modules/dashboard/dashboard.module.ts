import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './views/dashboard/dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [NgbModule, DashboardRoutingModule],
})
export class DashboardModule {}
