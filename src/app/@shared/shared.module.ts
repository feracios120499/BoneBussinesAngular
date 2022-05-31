import { FixedSizeVirtualScrollStrategy, ScrollingModule, VIRTUAL_SCROLL_STRATEGY } from '@angular/cdk/scrolling';
import { DecimalPipe } from '@angular/common';
import { NgModule } from '@angular/core';

import { VirtualPatchModule } from '@directives/virtual-patch/virtual-patch.module';
import { B1ImportErrorComponent } from './components/ui/b1-import-error/b1-import-error.component';

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
  ],
})
export class SharedModule {}
