import { FixedSizeVirtualScrollStrategy, ScrollingModule, VIRTUAL_SCROLL_STRATEGY } from '@angular/cdk/scrolling';
import { DecimalPipe } from '@angular/common';
import { NgModule } from '@angular/core';

export class CustomVirtualScrollStrategy extends FixedSizeVirtualScrollStrategy {
  constructor() {
    super(50, 120, 120);
  }
}

@NgModule({
  imports: [ScrollingModule],
  exports: [ScrollingModule],
  providers: [
    {
      provide: VIRTUAL_SCROLL_STRATEGY,
      useClass: CustomVirtualScrollStrategy,
    },
    DecimalPipe,
  ],
})
export class SharedModule {}
