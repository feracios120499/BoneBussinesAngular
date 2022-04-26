import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveComponentModule } from '@ngrx/component';
import { TranslateModule } from '@ngx-translate/core';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { EffectsModule } from '@ngrx/effects';

import { B1CardLoaderModule } from '@ui/b1-card-loader/b1-card-loader.module';
import { B1CardNumberModule } from '@ui/b1-card-number/b1-card-number.module';
import { VirtualPatchModule } from '@directives/virtual-patch/virtual-patch.module';
import { CardsHeaderModule } from '../cards-header/cards-header.module';
import { CheckRoleModule } from '@directives/check-role/check-role.module';
import { B1IconModule } from '@directives/b1-icon/b1-icon.module';
import { IbanModule } from '@directives/iban/iban.module';
import { ReissueApplicationsRoutingModule } from './reissue-applications-routing.module';

import { ReissueApplicationsComponent } from './reissue-applications.component';
import { ReissueApplicationsTabsComponent } from './components/reissue-applications-tabs/reissue-applications-tabs.component';
import { ReissueApplicationsActionsComponent } from './components/reissue-applications-actions/reissue-applications-actions.component';
import { ReissueApplicationsListComponent } from './components/reissue-applications-list/reissue-applications-list.component';
import { ReissueApplicationsRowComponent } from './components/reissue-applications-row/reissue-applications-row.component';

import { CardReissueEffect } from '@store/cards/reissue/effects';

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
    ReactiveComponentModule,
    ReissueApplicationsRoutingModule,
    CardsHeaderModule,
    TranslateModule,
    NgScrollbarModule,
    CheckRoleModule,
    VirtualPatchModule,
    B1IconModule,
    IbanModule,
    B1CardLoaderModule,
    B1CardNumberModule,
    EffectsModule.forFeature([CardReissueEffect]),
  ],
})
export class ReissueApplicationsModule {}
