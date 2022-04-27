import { NgModule } from '@angular/core';

import { FirstTitlePipe } from './first-title.pipe';

@NgModule({
  declarations: [FirstTitlePipe],
  exports: [FirstTitlePipe],
})
export class FirstTitleModule {}
