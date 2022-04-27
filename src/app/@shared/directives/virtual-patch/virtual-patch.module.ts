import { NgModule } from '@angular/core';

import { CdkVirtualScrollViewportPatchDirective } from './virtual-patch.directive';

@NgModule({
  declarations: [CdkVirtualScrollViewportPatchDirective],
  exports: [CdkVirtualScrollViewportPatchDirective],
})
export class VirtualPatchModule {}
