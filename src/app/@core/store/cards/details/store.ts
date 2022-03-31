import { CardDetailsTabs } from '@modules/cards/modules/card-details/models/card-details-tabs.type';

export const CARD_DETAILS_KEY = 'cards_details';

export interface CardDetailsState {
  currentTab: CardDetailsTabs;
}

export const initialState: CardDetailsState = {
  currentTab: 'info',
};
