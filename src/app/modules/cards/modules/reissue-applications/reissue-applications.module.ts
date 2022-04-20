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

@NgModule({
  declarations: [
    ReissueApplicationsComponent,
    ReissueApplicationsTabsComponent,
    ReissueApplicationsActionsComponent,
  ],
  imports: [
    CommonModule,
    ReissueApplicationsRoutingModule,
    CardsHeaderModule,
    TranslateModule,
    SharedModule,
    EffectsModule.forFeature([CardReissueEffect]),
  ],
})
export class ReissueApplicationsModule {}
