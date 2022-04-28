import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { ReactiveComponentModule } from '@ngrx/component';
import { TranslateModule } from '@ngx-translate/core';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { B1CardLoaderModule } from '@ui/b1-card-loader/b1-card-loader.module';
import { CorrespondentsFilterModule } from '@pipes/correspondents-filter/correspondents-filter.module';
import { B1EmptyModule } from '@containers/b1-empty/b1-empty.module';
import { VirtualPatchModule } from '@directives/virtual-patch/virtual-patch.module';
import { WebClassModule } from '@directives/web-class/web-class.module';
import { B1IconModule } from '@directives/b1-icon/b1-icon.module';
import { IbanModule } from '@directives/iban/iban.module';
import { NgSelectScrollModule } from '@directives/ng-select-scroll/ng-select-scroll.module';
import { B1DaterangepickerModule } from '@form-controls/b1-daterangepicker/b1-daterangepicker.module';
import { MoneyModule } from '@pipes/money/money.module';
import { CheckValueModule } from '@directives/check-value/check-value.module';

import { B1ExportTurnoversComponent } from './b1-export-turnovers/b1-export-turnovers.component';
import { B1PaymentModalComponent } from './b1-payment-modal/b1-payment-modal.component';
import { B1RequisitesModalComponent } from './b1-requisites-modal/b1-requisites-modal.component';
import { B1StatementModalComponent } from './b1-statement-modal/b1-statement-modal.component';
import { B1ConfirmModalComponent } from './b1-confirm-modal/b1-confirm-modal.component';
import { B1ErrorModalComponent } from './b1-error-modal/b1-error-modal.component';
import { B1CorrespondentsModalComponent } from './b1-correspondents-modal/b1-correspondents-modal.component';
import { B1HistoryModalComponent } from './b1-history-modal/b1-history-modal.component';
import { B1SignModalComponent } from './b1-sign-modal/b1-sign-modal.component';

@NgModule({
  declarations: [
    B1PaymentModalComponent,
    B1StatementModalComponent,
    B1RequisitesModalComponent,
    B1ExportTurnoversComponent,
    B1ConfirmModalComponent,
    B1ErrorModalComponent,
    B1CorrespondentsModalComponent,
    B1HistoryModalComponent,
    B1SignModalComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    ReactiveFormsModule,
    NgbModule,
    ReactiveComponentModule,
    ScrollingModule,
    NgScrollbarModule,
    VirtualPatchModule,
    NgxSkeletonLoaderModule,
    B1CardLoaderModule,
    WebClassModule,
    CorrespondentsFilterModule,
    B1EmptyModule,
    B1IconModule,
    IbanModule,
    NgSelectScrollModule,
    NgSelectModule,
    B1DaterangepickerModule,
    MoneyModule,
    CheckValueModule,
  ],
  exports: [
    B1PaymentModalComponent,
    B1StatementModalComponent,
    B1RequisitesModalComponent,
    B1ExportTurnoversComponent,
    B1ConfirmModalComponent,
    B1ErrorModalComponent,
    B1CorrespondentsModalComponent,
    B1HistoryModalComponent,
    B1SignModalComponent,
  ],
})
export class ModalsModule {}
