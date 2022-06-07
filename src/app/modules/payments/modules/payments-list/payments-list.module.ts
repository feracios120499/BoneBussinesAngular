import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsListRoutingModule } from './payments-list-routing.module';
import { PaymentsListComponent } from './payments-list.component';
import { PaymentsHeaderModule } from '@modules/payments/components/payments-header/payments-header.module';
import { TranslateModule } from '@ngx-translate/core';
import { PaymentsListTabsComponent } from './components/payments-list-tabs/payments-list-tabs.component';
import { EffectsModule } from '@ngrx/effects';
import { PayListEffects } from './store/effects';
import { ReactiveComponentModule } from '@ngrx/component';
import { PaymentsListActionsComponent } from './components/payments-list-actions/payments-list-actions.component';
import { B1CardLoaderModule } from '@ui/b1-card-loader/b1-card-loader.module';
import { B1PageCheckboxModule } from '@form-controls/b1-page-checkbox/b1-page-checkbox.module';
import { B1DaterangepickerModule } from '@form-controls/b1-daterangepicker/b1-daterangepicker.module';
import { FormsModule } from '@angular/forms';
import { B1ButtonModule } from '@ui/b1-button/b1-button.module';
import { B1InputModule } from '@form-controls/b1-input/b1-input.module';
import { B1IconModule } from '@directives/b1-icon/b1-icon.module';
import { PaymentsListPaymentsComponent } from './components/payments-list-payments/payments-list-payments.component';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { SharedModule } from '@shared';
import { PaymentRowModule } from '@modules/payments/components/payment-row/payment-row.module';
import { B1DropdownModule } from '@ui/b1-dropdown/b1-dropdown.module';
import { B1EmptyModule } from '@containers/b1-empty/b1-empty.module';
import { B1MoreButtonModule } from '@ui/b1-more-button/b1-more-button.module';
import { B1SkeletonModule } from '@ui/b1-skeleton/b1-skeleton.module';
import { B1PageButtonModule } from '@ui/b1-page-button/b1-page-button.module';
import { PaymentsImportModalComponent } from './components/payments-import-modal/payments-import-modal.component';
import { PaymentsExportModalComponent } from './components/payments-export-modal/payments-export-modal.component';
import { B1DragDropFilesModule } from '@ui/b1-drag-drop-files/b1-drag-drop-files.module';
import { PaymentsSumModule } from '@modules/payments/components/payments-sum/payments-sum.module';

@NgModule({
  declarations: [
    PaymentsListComponent,
    PaymentsListTabsComponent,
    PaymentsListActionsComponent,
    PaymentsListPaymentsComponent,
    PaymentsImportModalComponent,
    PaymentsExportModalComponent,
  ],
  imports: [
    CommonModule,
    PaymentsListRoutingModule,
    PaymentsHeaderModule,
    TranslateModule,
    EffectsModule.forFeature([PayListEffects]),
    ReactiveComponentModule,
    B1CardLoaderModule,
    B1PageCheckboxModule,
    B1DaterangepickerModule,
    FormsModule,
    B1ButtonModule,
    B1InputModule,
    B1IconModule,
    NgScrollbarModule,
    SharedModule,
    PaymentRowModule,
    B1DropdownModule,
    B1EmptyModule,
    B1MoreButtonModule,
    B1SkeletonModule,
    B1PageButtonModule,
    B1DragDropFilesModule,
    PaymentsSumModule,
  ],
})
export class PaymentsListModule {}
