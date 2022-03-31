import { NgModule } from '@angular/core';

import { MobileMoreDirective } from './mobile-more.directive';

@NgModule({
  declarations: [MobileMoreDirective],
  exports: [MobileMoreDirective],
})
export class MobileMoreModule {}
