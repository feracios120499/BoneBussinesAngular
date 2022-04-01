import { CardDetailsTabs } from '@modules/cards/modules/card-details/models/card-details-tabs.type';
import { createAction, props } from '@ngrx/store';
import { CARD_DETAILS_KEY } from './store';

export namespace CardDetailsActions {
  export const setTab = createAction(
    `${CARD_DETAILS_KEY} set tab`,
    props<{ tab: CardDetailsTabs }>()
  );
}
