import { NgModule } from '@angular/core';

import { CustomersFilterPipe } from './customers-filter.pipe';

@NgModule({
  declarations: [CustomersFilterPipe],
  exports: [CustomersFilterPipe],
})
export class CustomersFilterModule {}
