import { CardReissueStatus } from '@b1-types/cards/card-reissue-status.type';
import { ReissueApplicationDetails } from '@models/cards/reissue-application-details.model';
import { StatusCount } from '@models/status-count.model';
import { ReissueLoading } from '@modules/cards/models/reissue-loading.type';

export const CARD_REISSUE_KEY = 'card_reissue';

export interface CardReissueState {
  tab: CardReissueStatus;
  count: StatusCount;
  applications: ReissueApplicationDetails[];
  loadings: ReissueLoading[];
  selectedApplications: number[];
  selectAll: boolean;
  filter: string;
}

export const initialState: CardReissueState = {
  tab: 'ONMYSIGN',
  count: {},
  applications: [],
  loadings: [],
  selectedApplications: [],
  selectAll: false,
  filter: '',
};
