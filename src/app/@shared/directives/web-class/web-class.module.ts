import { NgModule } from '@angular/core';

import { WebClassDirective } from './web-class.directive';

@NgModule({
  declarations: [WebClassDirective],
  exports: [WebClassDirective],
})
export class WebClassModule {}
