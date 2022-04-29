import { CardDetails } from '@models/cards/card-details.model';
import { CardLimit } from '@models/cards/card-limit.model';
import { CardSmsStatus } from '@models/cards/card-sms-status.model';
import { ReissueApplicationDetails } from '@models/cards/reissue-application-details.model';
import { DetailsLoading } from '@modules/cards/models/details-loading.type';
import { CardDetailsTabs } from '@modules/cards/modules/card-details/models/card-details-tabs.type';

export const CARD_DETAILS_KEY = 'cards_details';

export interface CardDetailsState {
  currentTab: CardDetailsTabs;
  loadings: DetailsLoading[];
  card?: CardDetails;
  limits?: CardLimit[];
  smsStatus?: CardSmsStatus;
  lastApplication?: ReissueApplicationDetails;
}

export const initialState: CardDetailsState = {
  currentTab: 'info',
  loadings: [],
  card: undefined,
  limits: undefined,
  smsStatus: undefined,
};
