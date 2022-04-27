import { NgModule } from '@angular/core';

import { AccountsFilterPipe } from './accounts-filter.pipe';

@NgModule({
  declarations: [AccountsFilterPipe],
  exports: [AccountsFilterPipe],
})
export class AccountsFilterModule {}
