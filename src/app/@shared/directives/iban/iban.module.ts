import { NgModule } from '@angular/core';

import { IbanDirective } from './iban.directive';

@NgModule({
  declarations: [IbanDirective],
  exports: [IbanDirective],
})
export class IbanModule {}
