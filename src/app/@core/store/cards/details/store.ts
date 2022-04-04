import { CardDetails } from '@models/cards/card-details.model';
import { CardLimit } from '@models/cards/card-limit.model';
import { CardSmsStatus } from '@models/cards/card-sms-status.model';
import { CardDetailsTabs } from '@modules/cards/modules/card-details/models/card-details-tabs.type';
import { DetailsLoading } from '../models/details-loading.type';

export const CARD_DETAILS_KEY = 'cards_details';

export interface CardDetailsState {
  currentTab: CardDetailsTabs;
  loadings: DetailsLoading[];
  card?: CardDetails;
  limits?: CardLimit[];
  smsStatus?: CardSmsStatus;
}

export const initialState: CardDetailsState = {
  currentTab: 'info',
  loadings: [],
  card: undefined,
  limits: undefined,
  smsStatus: undefined,
};
