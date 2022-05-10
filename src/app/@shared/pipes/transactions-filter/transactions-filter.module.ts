import { NgModule } from '@angular/core';
import { TransactionsFilterPipe } from './transactions-filter.pipe';

@NgModule({
  declarations: [TransactionsFilterPipe],
  exports: [TransactionsFilterPipe],
})
export class TransactionFilterModule {}
