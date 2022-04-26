import { NgModule } from '@angular/core';

import { UsersFilterPipe } from './users-filter.pipe';

@NgModule({
  declarations: [UsersFilterPipe],
  exports: [UsersFilterPipe],
})
export class UsersFilterModule {}
