import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReissueApplicationsRoutingModule } from './reissue-applications-routing.module';
import { ReissueApplicationsComponent } from './reissue-applications.component';
import { CardsHeaderModule } from '../cards-header/cards-header.module';

@NgModule({
  declarations: [ReissueApplicationsComponent],
  imports: [CommonModule, ReissueApplicationsRoutingModule, CardsHeaderModule],
})
export class ReissueApplicationsModule {}
