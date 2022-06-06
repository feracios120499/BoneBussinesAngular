import { NgModule } from '@angular/core';

import { FirstLowercasePipe } from './first-lowercase.pipe';

@NgModule({
  declarations: [FirstLowercasePipe],
  exports: [FirstLowercasePipe],
})
export class FirstLowercaseModule {}
