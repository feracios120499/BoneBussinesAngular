import { CardReissueStatus } from '@b1-types/cards/card-reissue-status.type';
import { ReissueApplicationDetails } from '@models/cards/reissue-application-details.model';
import { ReissueCount } from '@models/cards/reissue-count.model';
import { ReissueLoading } from '../models/reissue-loading.type';

export const CARD_REISSUE_KEY = 'card_reissue';

export interface CardReissueState {
  tab: CardReissueStatus;
  count: ReissueCount;
  applications: ReissueApplicationDetails[];
  loadings: ReissueLoading[];
}

export const initialState: CardReissueState = {
  tab: 'ONMYSIGN',
  count: {},
  applications: [],
  loadings: [],
};
