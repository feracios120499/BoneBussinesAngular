import { CardAccount } from '@models/cards/card-account.model';
import { CardsViewState } from '@models/enums/cards-view-state.enum';
import { createAction, props } from '@ngrx/store';
import { createHTTPActions } from '@store/shared';

export namespace CardsActions {
  export const setViewState = createAction(
    '[CARDS] set view state',
    props<{ state: CardsViewState }>()
  );

  export const [
    loadCardAccountsRequest,
    loadCardAccountsSuccess,
    loadCardAccountFailure,
  ] = createHTTPActions<void, CardAccount[], string>(
    '[CARDS] load card accounts'
  );

  export const closeCardAccount = createAction(
    '[CARDS] close card account',
    props<{ cardAccount: CardAccount }>()
  );
  export const openCardAccount = createAction(
    '[CARDS] open card account',
    props<{ cardAccount: CardAccount }>()
  );

  export const goToDetail = createAction(
    '[CARDS] go to detail card',
    props<{ cardId: string; accountId: number }>()
  );
}
