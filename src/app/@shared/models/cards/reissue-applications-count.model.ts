import { CardReissueStatus } from '@b1-types/cards/card-reissue-status.type';

export interface ReissueApplicationsCount {
  statusId: CardReissueStatus;
  statusCount: number;
}
