import { Dayjs } from 'dayjs';

export interface DonwloadExportModel {
    accountId: number;
    bankId: string;
    format: string;
    start: Dayjs;
    end: Dayjs;
}
