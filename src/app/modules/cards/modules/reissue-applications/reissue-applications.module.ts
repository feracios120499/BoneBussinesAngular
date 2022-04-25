import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReissueApplicationsRoutingModule } from './reissue-applications-routing.module';
import { ReissueApplicationsComponent } from './reissue-applications.component';
import { CardsHeaderModule } from '../cards-header/cards-header.module';
import { TranslateModule } from '@ngx-translate/core';
import { ReissueApplicationsTabsComponent } from './components/reissue-applications-tabs/reissue-applications-tabs.component';
import { EffectsModule } from '@ngrx/effects';
import { CardReissueEffect } from '@store/cards/reissue/effects';
import { SharedModule } from 'src/app/@shared/shared.module';
import { ReissueApplicationsActionsComponent } from './components/reissue-applications-actions/reissue-applications-actions.component';
import { ReissueApplicationsListComponent } from './components/reissue-applications-list/reissue-applications-list.component';
import { ReissueApplicationsRowComponent } from './components/reissue-applications-row/reissue-applications-row.component';
import { B1SkeletonModule } from '@ui/b1-skeleton/b1-skeleton.module';
import { B1EmptyModule } from '@ui/b1-empty/b1-empty.module';
import { ReissueApplicationsFilterModule } from 'src/app/@shared/pipes/reissue-applications-filter/reissue-applications-filter.module';

@NgModule({
  declarations: [
    ReissueApplicationsComponent,
    ReissueApplicationsTabsComponent,
    ReissueApplicationsActionsComponent,
    ReissueApplicationsListComponent,
    ReissueApplicationsRowComponent,
  ],
  imports: [
    CommonModule,
    ReissueApplicationsRoutingModule,
    CardsHeaderModule,
    TranslateModule,
    SharedModule,
    EffectsModule.forFeature([CardReissueEffect]),
    B1SkeletonModule,
    B1EmptyModule,
    ReissueApplicationsFilterModule,
  ],
})
export class ReissueApplicationsModule {}
