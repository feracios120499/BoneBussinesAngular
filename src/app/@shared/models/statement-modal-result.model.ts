import { DateRange } from './date-range.model';

export interface StatementModalResult {

    range: DateRange;
    sendToEmail: boolean;
    email?: string;
    format: string;
}
