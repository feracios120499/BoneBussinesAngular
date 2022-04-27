import { NgModule } from '@angular/core';

import { CheckStateDirective } from './check-state.directive';

@NgModule({
  declarations: [CheckStateDirective],
  exports: [CheckStateDirective],
})
export class CheckStateModule {}
