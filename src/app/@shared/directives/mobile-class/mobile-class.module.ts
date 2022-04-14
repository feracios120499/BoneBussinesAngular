import { NgModule } from '@angular/core';

import { MobileClassDirective } from './mobile-class.directive';

@NgModule({
  declarations: [MobileClassDirective],
  exports: [MobileClassDirective],
})
export class MobileClassModule {}
