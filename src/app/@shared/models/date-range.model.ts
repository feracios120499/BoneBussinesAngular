import { Dayjs } from 'dayjs';

export interface DateRangeString {
    start: string;
    end: string;
}

export interface DateRange {
    start: Dayjs;
    end: Dayjs;
}
