import { FixedSizeVirtualScrollStrategy, ScrollingModule, VIRTUAL_SCROLL_STRATEGY } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveComponentModule } from '@ngrx/component';
import { TranslateModule } from '@ngx-translate/core';
import { NgOtpInputModule } from 'ng-otp-input';
import { NgrxFormsModule } from 'ngrx-forms';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { B1CardLoaderComponent } from './components/b1-card-loader/b1-card-loader.component';
import { DaterangepickerComponent } from './components/b1-daterangepicker/b1-daterangepicker.component';
import { DaterangepickerDirective } from './components/b1-daterangepicker/b1-daterangepicker.directive';
import { B1LinkComponent } from './components/b1-link/b1-link.component';
import { B1IconDirective } from './directives/b1-icon.directive';
import { CheckStateDirective } from './directives/check-state.directive';
import { IbanDirective } from './directives/iban.directive';
import { MobileClassDirective } from './directives/mobile-class.directive';
import { MobileMoreDirective } from './directives/mobile-more.directive';
import { MoreAutoDirectionDirective } from './directives/more-auto-direction.directive';
import { CdkVirtualScrollViewportPatchDirective } from './directives/virtual-patch.directive';
import { WebClassDirective } from './directives/web-class.directive';
import { AccountFilterPipe } from './pipes/accounts-filter.pipe';
import { MoneyPipe } from './pipes/money.pipe';
import { B1PaymentModalComponent } from './components/b1-payment-modal/b1-payment-modal.component';
import { B1StatementModalComponent } from './components/b1-statement-modal/b1-statement-modal.component';



export class CustomVirtualScrollStrategy extends FixedSizeVirtualScrollStrategy {
  constructor() {
    super(50, 98, 98);
  }
}

@NgModule({
  declarations: [
    CheckStateDirective,
    B1IconDirective,
    B1CardLoaderComponent,
    AccountFilterPipe,
    MoneyPipe,
    CdkVirtualScrollViewportPatchDirective,
    IbanDirective,
    MobileMoreDirective,
    WebClassDirective,
    MobileClassDirective,
    MoreAutoDirectionDirective,
    B1LinkComponent,
    DaterangepickerComponent,
    DaterangepickerDirective,
    B1PaymentModalComponent,
    B1StatementModalComponent],
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
    NgxSkeletonLoaderModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    ReactiveFormsModule,
    NgbModule,
    CheckStateDirective,
    NgOtpInputModule,
    B1IconDirective,
    B1CardLoaderComponent,
    ScrollingModule,
    NgScrollbarModule,
    NgrxFormsModule,
    AccountFilterPipe,
    MoneyPipe,
    CdkVirtualScrollViewportPatchDirective,
    IbanDirective,
    MobileMoreDirective,
    NgxSkeletonLoaderModule,
    WebClassDirective,
    MobileClassDirective,
    MoreAutoDirectionDirective,
    B1LinkComponent,
    DaterangepickerComponent,
    DaterangepickerDirective
  ],
  providers: [
    {
      provide: VIRTUAL_SCROLL_STRATEGY,
      useClass: CustomVirtualScrollStrategy,
    }
  ]
})
export class SharedModule { }
