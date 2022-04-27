import { NgModule } from '@angular/core';

import { ReissueApplicationsFilterPipe } from './reissue-applications-filter.pipe';

@NgModule({
  declarations: [ReissueApplicationsFilterPipe],
  exports: [ReissueApplicationsFilterPipe],
})
export class ReissueApplicationsFilterModule {}
