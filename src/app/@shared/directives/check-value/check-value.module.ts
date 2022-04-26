import { NgModule } from '@angular/core';

import { CheckValueDirective } from './check-value.directive';

@NgModule({
  declarations: [CheckValueDirective],
  exports: [CheckValueDirective],
})
export class CheckValueModule {}
