import {
  FixedSizeVirtualScrollStrategy,
  ScrollingModule,
  VIRTUAL_SCROLL_STRATEGY,
} from '@angular/cdk/scrolling';
import { CommonModule, DecimalPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { ReactiveComponentModule } from '@ngrx/component';
import { TranslateModule } from '@ngx-translate/core';
import { NgOtpInputModule } from 'ng-otp-input';
import { NgrxFormsModule } from 'ngrx-forms';
import { NgxMaskModule } from 'ngx-mask';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { MobileMoreModule } from './directives/mobile-more/mobile-more.module';
import { StopPropagationModule } from './directives/stop-propagation/stop-propagation.module';
import { B1ButtonModule } from '@ui/b1-button/b1-button.module';
import { B1ContentWrapperModule } from '@ui/b1-content-wrapper/b1-content-wrapper.module';

import { B1CardLoaderComponent } from './components/b1-card-loader/b1-card-loader.component';
import { B1LinkComponent } from './components/b1-link/b1-link.component';
import { B1PageButtonComponent } from './components/b1-page-button/b1-page-button.component';
import { B1PageLoaderComponent } from './components/b1-page-loader/b1-page-loader.component';
import { B1ExportTurnoversComponent } from './components/modals/b1-export-turnovers/b1-export-turnovers.component';
import { B1PaymentModalComponent } from './components/modals/b1-payment-modal/b1-payment-modal.component';
import { B1RequisitesModalComponent } from './components/modals/b1-requisites-modal/b1-requisites-modal.component';
import { B1StatementModalComponent } from './components/modals/b1-statement-modal/b1-statement-modal.component';
import { CheckStateDirective } from './directives/check-state.directive';
import { MobileClassDirective } from './directives/mobile-class.directive';
import { MoreAutoDirectionDirective } from './directives/more-auto-direction.directive';
import { OnlyNumbersDirective } from './directives/only-numbers.directive';
import { CdkVirtualScrollViewportPatchDirective } from './directives/virtual-patch.directive';
import { WebClassDirective } from './directives/web-class.directive';
import { B1DirectivesModule } from './modules/b1-directives/b1-directives.module';
import { B1FormsModule } from './modules/b1-forms/b1-forms.module';
import { B1PipesModule } from './modules/b1-pipes/b1-pipes.module';
import { AccountFilterPipe } from './pipes/accounts-filter.pipe';
import { B1PageSeparatorComponent } from './components/b1-page-separator/b1-page-separator.component';
import { CardNumberPipe } from './pipes/card-number.pipe';
import { B1CardNumberComponent } from './components/b1-card-number/b1-card-number.component';
import { InitialsPipe } from './pipes/initials.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { UsersFilterPipe } from './pipes/users-filter.pipe';
import { B1ConfirmModalComponent } from './components/modals/b1-confirm-modal/b1-confirm-modal.component';
import { CustomToast } from '@ui/custom-toast/custom-toast.component';
import { B1ErrorModalComponent } from './components/modals/b1-error-modal/b1-error-modal.component';

export class CustomVirtualScrollStrategy extends FixedSizeVirtualScrollStrategy {
  constructor() {
    super(50, 98, 98);
  }
}

@NgModule({
  declarations: [
    CheckStateDirective,
    B1CardLoaderComponent,
    AccountFilterPipe,
    CardNumberPipe,
    CdkVirtualScrollViewportPatchDirective,
    WebClassDirective,
    MobileClassDirective,
    MoreAutoDirectionDirective,
    B1LinkComponent,
    B1PaymentModalComponent,
    B1StatementModalComponent,
    B1RequisitesModalComponent,
    B1ExportTurnoversComponent,
    B1PageButtonComponent,
    OnlyNumbersDirective,
    B1PageLoaderComponent,
    B1PageSeparatorComponent,
    B1CardNumberComponent,
    InitialsPipe,
    FilterPipe,
    UsersFilterPipe,
    B1ConfirmModalComponent,
    CustomToast,
    B1ErrorModalComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    ReactiveFormsModule,
    NgbModule,
    NgOtpInputModule,
    ReactiveComponentModule,
    ScrollingModule,
    NgScrollbarModule,
    NgrxFormsModule,
    NgxSkeletonLoaderModule,
    NgSelectModule,
    NgxMaskModule,
    B1DirectivesModule,
    B1FormsModule,
    B1PipesModule,
    MobileMoreModule,
    StopPropagationModule,
    B1ButtonModule,
    B1ContentWrapperModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    ReactiveFormsModule,
    NgbModule,
    CheckStateDirective,
    NgOtpInputModule,
    B1CardLoaderComponent,
    ScrollingModule,
    NgScrollbarModule,
    NgrxFormsModule,
    AccountFilterPipe,
    CardNumberPipe,
    CdkVirtualScrollViewportPatchDirective,
    NgxSkeletonLoaderModule,
    WebClassDirective,
    MobileClassDirective,
    MoreAutoDirectionDirective,
    B1LinkComponent,
    NgSelectModule,
    B1PageButtonComponent,
    ReactiveComponentModule,
    OnlyNumbersDirective,
    NgxMaskModule,
    B1PageLoaderComponent,
    B1PageSeparatorComponent,
    B1CardNumberComponent,
    InitialsPipe,
    FilterPipe,
    UsersFilterPipe,
    MobileMoreModule,
    StopPropagationModule,
    B1ButtonModule,
    B1ContentWrapperModule,
  ],
  providers: [
    {
      provide: VIRTUAL_SCROLL_STRATEGY,
      useClass: CustomVirtualScrollStrategy,
    },
    DecimalPipe,
  ],
})
export class SharedModule {}
