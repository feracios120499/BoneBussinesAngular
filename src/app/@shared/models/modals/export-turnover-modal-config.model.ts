import { Dayjs } from 'dayjs';
import { ExportTurnoverModalResult } from './export-turnover-modal-result.model';

export interface ExportTurnoverModalConfig {
    formats: string[];

    email?: string;
    start?: Dayjs;
    end?: Dayjs;

    callback: (data: ExportTurnoverModalResult) => void;
}
