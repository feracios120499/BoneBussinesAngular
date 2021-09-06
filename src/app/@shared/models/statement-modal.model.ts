import { Dayjs } from 'dayjs';

export interface StatementModal {
    accountId: number;
    bankId: string;
    isFree: boolean;
    formats: string[];

    start?: Dayjs;
    end?: Dayjs;
}