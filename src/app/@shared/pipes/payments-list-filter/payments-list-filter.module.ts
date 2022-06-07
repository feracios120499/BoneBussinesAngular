import { NgModule } from '@angular/core';
import { PaymentsListFilter } from './payments-list-filter.pipe';

@NgModule({
  declarations: [PaymentsListFilter],
  exports: [PaymentsListFilter],
})
export class PaymentsListFilterModule {}
