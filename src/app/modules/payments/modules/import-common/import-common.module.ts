import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImportCommonComponent } from './import-common.component';
import { ImportCommonTabsComponent } from './components/import-common-tabs/import-common-tabs.component';
import { ImportCommonActionsComponent } from './components/import-common-actions/import-common-actions.component';
import { ImportCommonListComponent } from './components/import-common-list/import-common-list.component';
import { PaymentsHeaderModule } from '@modules/payments/components/payments-header/payments-header.module';
import { B1PageLoaderModule } from '@ui/b1-page-loader/b1-page-loader.module';
import { TranslateModule } from '@ngx-translate/core';
import { B1CardLoaderModule } from '@ui/b1-card-loader/b1-card-loader.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { FormsModule } from '@angular/forms';
import { ImportCommonRoutingModule } from './import-common-routing.module';
import { PaymentRowModule } from '@modules/payments/components/payment-row/payment-row.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { SharedModule } from '@shared';
import { B1SkeletonModule } from '@ui/b1-skeleton/b1-skeleton.module';
import { B1EmptyModule } from '@containers/b1-empty/b1-empty.module';
import { EffectsModule } from '@ngrx/effects';
import { PayImportCommonEffects } from './store/effects';
import { B1PageButtonModule } from '@ui/b1-page-button/b1-page-button.module';
import { B1ButtonModule } from '@ui/b1-button/b1-button.module';
import { B1InputModule } from '@form-controls/b1-input/b1-input.module';

@NgModule({
  declarations: [
    ImportCommonComponent,
    ImportCommonTabsComponent,
    ImportCommonActionsComponent,
    ImportCommonListComponent,
  ],
  imports: [
    CommonModule,
    ImportCommonRoutingModule,
    TranslateModule,
    PaymentsHeaderModule,
    B1CardLoaderModule,
    ReactiveComponentModule,
    FormsModule,
    PaymentRowModule,
    NgxSkeletonLoaderModule,
    NgScrollbarModule,
    SharedModule,
    B1SkeletonModule,
    B1EmptyModule,
    EffectsModule.forFeature([PayImportCommonEffects]),
    B1PageButtonModule,
    B1ButtonModule,
    B1InputModule,
  ],
})
export class ImportCommonModule {}
