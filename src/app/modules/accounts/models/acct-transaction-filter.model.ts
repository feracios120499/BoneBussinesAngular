import { DateRangeString } from '@models/date-range.model';
import { Boxed } from 'ngrx-forms';

export interface AcctTransactionsFilter {
    range: Boxed<DateRangeString>;
}
