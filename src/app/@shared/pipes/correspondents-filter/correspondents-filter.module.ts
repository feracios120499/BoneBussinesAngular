import { NgModule } from '@angular/core';

import { CorrespondentsFilterPipe } from './correspondents-filter.pipe';

@NgModule({
  declarations: [CorrespondentsFilterPipe],
  exports: [CorrespondentsFilterPipe],
})
export class CorrespondentsFilterModule {}
