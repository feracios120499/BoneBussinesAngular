import { Dayjs } from 'dayjs';
import { ReissueApplication } from './reissue-application.model';

export interface ReissueApplicationDetails extends ReissueApplication {
  id: number;
  statusCode: string;
  newExpiredDate: string;
  createdDate: Dayjs;
  isNeedMySign: boolean;
  isNeedSign: boolean;
  visaStampCount: number;
}
