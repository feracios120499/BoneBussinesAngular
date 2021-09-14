import { DonwloadExportModel } from './download-export.model';

export interface SendExportModel extends DonwloadExportModel {
    email: string;
}
