import { RequisitesModalResult } from './requisites-modal-result.model';

export interface RequisitesModalConfig {
    formats: string[];

    email?: string;

    callback: (data: RequisitesModalResult) => void;
}
