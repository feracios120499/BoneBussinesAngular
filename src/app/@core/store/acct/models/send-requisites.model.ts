import { DownloadRequisitesModel } from './download-requisites.model';

export interface SendRequisitesModel extends DownloadRequisitesModel {
    email: string;
}
