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
import { CheckValueModule } from '@directives/check-value/check-value.module';
import { ReissueApplicationsRoutingModule } from './reissue-applications-routing.module';

import { ReissueApplicationsComponent } from './reissue-applications.component';
import { ReissueApplicationsTabsComponent } from './components/reissue-applications-tabs/reissue-applications-tabs.component';
import { ReissueApplicationsActionsComponent } from './components/reissue-applications-actions/reissue-applications-actions.component';
import { ReissueApplicationsListComponent } from './components/reissue-applications-list/reissue-applications-list.component';
import { ReissueApplicationsRowComponent } from './components/reissue-applications-row/reissue-applications-row.component';
import { ReissueApplicationsFilterModule } from 'src/app/@shared/pipes/reissue-applications-filter/reissue-applications-filter.module';

import { CardReissueEffect } from '@store/cards/reissue/effects';
import { B1EmptyModule } from '@containers/b1-empty/b1-empty.module';
import { B1SkeletonModule } from '@ui/b1-skeleton/b1-skeleton.module';
import { B1PageButtonModule } from '@ui/b1-page-button/b1-page-button.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { B1DropdownModule } from '@ui/b1-dropdown/b1-dropdown.module';
import { SharedModule } from 'src/app/@shared/shared.module';

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
    CheckValueModule,
    EffectsModule.forFeature([CardReissueEffect]),
    B1SkeletonModule,
    B1EmptyModule,
    ReissueApplicationsFilterModule,
    B1PageButtonModule,
    ReactiveFormsModule,
    FormsModule,
    B1DropdownModule,
    SharedModule,
  ],
})
export class ReissueApplicationsModule {}
