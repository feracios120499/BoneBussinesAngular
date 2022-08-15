import { FixedSizeVirtualScrollStrategy, ScrollingModule, VIRTUAL_SCROLL_STRATEGY } from '@angular/cdk/scrolling';
import { DecimalPipe } from '@angular/common';
import { NgModule } from '@angular/core';

import { VirtualPatchModule } from '@directives/virtual-patch/virtual-patch.module';
import { SwiftConfirmComponent } from './components/payment-forms/swift-confirm/swift-confirm.component';

export class CustomVirtualScrollStrategy extends FixedSizeVirtualScrollStrategy {
  constructor() {
    super(50, 120, 120);
  }
}

@NgModule({
  imports: [ScrollingModule, VirtualPatchModule],
  exports: [ScrollingModule, VirtualPatchModule],
  providers: [
    {
      provide: VIRTUAL_SCROLL_STRATEGY,
      useClass: CustomVirtualScrollStrategy,
    },
    DecimalPipe,
  ]
})
export class SharedModule {}
