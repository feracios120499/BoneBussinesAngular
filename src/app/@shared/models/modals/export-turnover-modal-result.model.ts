import { DateRange } from '@models/date-range.model';

export interface ExportTurnoverModalResult {
    range: DateRange;
    sendToEmail: boolean;
    email?: string;
    format: string;
}
