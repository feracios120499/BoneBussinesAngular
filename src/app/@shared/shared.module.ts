import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { NgOtpInputModule } from 'ng-otp-input';
import { B1IconDirective } from './directives/b1-icon.directive';

import { CheckStateDirective } from './directives/check-state.directive';
import { B1CardLoaderComponent } from './components/b1-card-loader/b1-card-loader.component';
import { ReactiveComponentModule } from '@ngrx/component';
import { FixedSizeVirtualScrollStrategy, ScrollingModule, VIRTUAL_SCROLL_STRATEGY } from '@angular/cdk/scrolling';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { ConnectFormDirective } from './directives/connect-form.directive';
import { NgrxFormsModule } from 'ngrx-forms';
import { AccountFilterPipe } from './pipes/accounts-filter.pipe';
import { MoneyPipe } from './pipes/money.pipe';
import { CdkVirtualScrollViewportPatchDirective } from './directives/virtual-patch.directive';
import { IbanDirective } from './directives/iban.directive';
import { MobileMoreDirective } from './directives/mobile-more.directive';

import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { WebClassDirective } from './directives/web-class.directive';
import { MobileClassDirective } from './directives/mobile-class.directive';
import { MoreAutoDirectionDirective } from './directives/more-auto-direction.directive';

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
    ConnectFormDirective,
    AccountFilterPipe,
    MoneyPipe,
    CdkVirtualScrollViewportPatchDirective,
    IbanDirective,
    MobileMoreDirective,
    WebClassDirective,
    MobileClassDirective,
    MoreAutoDirectionDirective],
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
    ConnectFormDirective,
    NgrxFormsModule,
    AccountFilterPipe,
    MoneyPipe,
    CdkVirtualScrollViewportPatchDirective,
    IbanDirective,
    MobileMoreDirective,
    NgxSkeletonLoaderModule,
    WebClassDirective,
    MobileClassDirective,
    MoreAutoDirectionDirective
  ],
  providers: [
    {
      provide: VIRTUAL_SCROLL_STRATEGY,
      useClass: CustomVirtualScrollStrategy,
    },
  ]
})
export class SharedModule { }
