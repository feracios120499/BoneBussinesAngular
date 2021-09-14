import { Dayjs } from 'dayjs';
import { StatementModalResult } from './statement-modal-result.model';

export interface StatementModalConfig {
    isFree: boolean;
    formats: string[];

    email?: string;
    start?: Dayjs;
    end?: Dayjs;

    callback: (data: StatementModalResult) => void;
}
