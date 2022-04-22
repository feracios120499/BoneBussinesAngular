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
import { B1CardLoaderModule } from '@ui/b1-card-loader/b1-card-loader.module';
import { MoreAutoDirectionModule } from './directives/more-auto-direction/more-auto-direction.module';
import { MobileClassModule } from './directives/mobile-class/mobile-class.module';
import { WebClassModule } from './directives/web-class/web-class.module';
import { OnlyNumbersModule } from './directives/only-numbers/only-numbers.module';
import { B1ModalContainerModule } from '@ui/b1-modal-container/b1-modal-container.module';
import { CorrespondentsFilterModule } from './pipes/correspondents-filter/correspondents-filter.module';
import { B1EmptyModule } from '@ui/b1-empty/b1-empty.module';

import { B1LinkComponent } from './components/b1-link/b1-link.component';
import { B1PageButtonComponent } from './components/b1-page-button/b1-page-button.component';
import { B1PageLoaderComponent } from './components/b1-page-loader/b1-page-loader.component';
import { B1ExportTurnoversComponent } from './components/modals/b1-export-turnovers/b1-export-turnovers.component';
import { B1PaymentModalComponent } from './components/modals/b1-payment-modal/b1-payment-modal.component';
import { B1RequisitesModalComponent } from './components/modals/b1-requisites-modal/b1-requisites-modal.component';
import { B1StatementModalComponent } from './components/modals/b1-statement-modal/b1-statement-modal.component';
import { CheckStateDirective } from './directives/check-state.directive';
import { CdkVirtualScrollViewportPatchDirective } from './directives/virtual-patch.directive';
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
import { CheckRoleDirective } from './directives/check-role.directive';
import { B1WarningBlockComponent } from './components/b1-warning-block/b1-warning-block.component';
import { B1CorrespondentsModalComponent } from '@ui/modals/b1-correspondents-modal/b1-correspondents-modal.component';

export class CustomVirtualScrollStrategy extends FixedSizeVirtualScrollStrategy {
  constructor() {
    super(50, 98, 98);
  }
}

@NgModule({
  declarations: [
    CheckStateDirective,
    AccountFilterPipe,
    CardNumberPipe,
    CdkVirtualScrollViewportPatchDirective,
    B1LinkComponent,
    B1PaymentModalComponent,
    B1StatementModalComponent,
    B1RequisitesModalComponent,
    B1ExportTurnoversComponent,
    B1PageButtonComponent,
    B1PageLoaderComponent,
    B1PageSeparatorComponent,
    B1CardNumberComponent,
    InitialsPipe,
    FilterPipe,
    UsersFilterPipe,
    B1ConfirmModalComponent,
    CustomToast,
    B1ErrorModalComponent,
    CheckRoleDirective,
    B1CorrespondentsModalComponent,
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
    B1CardLoaderModule,
    MobileClassModule,
    WebClassModule,
    MoreAutoDirectionModule,
    OnlyNumbersModule,
    B1ModalContainerModule,
    CorrespondentsFilterModule,
    B1EmptyModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    ReactiveFormsModule,
    NgbModule,
    CheckStateDirective,
    NgOtpInputModule,
    ScrollingModule,
    NgScrollbarModule,
    NgrxFormsModule,
    AccountFilterPipe,
    CardNumberPipe,
    CdkVirtualScrollViewportPatchDirective,
    NgxSkeletonLoaderModule,
    WebClassModule,
    MobileClassModule,
    MoreAutoDirectionModule,
    B1LinkComponent,
    NgSelectModule,
    B1PageButtonComponent,
    ReactiveComponentModule,
    OnlyNumbersModule,
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
    B1DirectivesModule,
    B1CardLoaderModule,
    CheckRoleDirective,
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
