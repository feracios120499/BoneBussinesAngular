import { Dayjs } from 'dayjs';
import { ReissueApplication } from './reissue-application.model';

export interface ReissueApplicationDetails extends ReissueApplication {
  id: number;
  statusCode: string;
  newExpiredDate: string;
  createDate: Date;
  isNeedMySign: boolean;
  isNeedSign: boolean;
  visaStampCount: number;
}
