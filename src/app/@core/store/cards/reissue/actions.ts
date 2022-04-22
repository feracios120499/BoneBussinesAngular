import { CardReissueStatus } from '@b1-types/cards/card-reissue-status.type';
import { ReissueApplicationDetails } from '@models/cards/reissue-application-details.model';
import { ReissueCount } from '@models/cards/reissue-count.model';
import { createAction, props } from '@ngrx/store';
import { createHTTPActions } from '@store/shared';
import { CARD_REISSUE_KEY } from './store';

export namespace CardReissueActions {
  export const setTab = createAction(
    `[${CARD_REISSUE_KEY}] set tab`,
    props<{ tab: CardReissueStatus }>()
  );

  export const [
    loadApplicationsRequest,
    loadApplicationsSuccess,
    loadApplicationsFailure,
  ] = createHTTPActions<CardReissueStatus, ReissueApplicationDetails[], string>(
    `[${CARD_REISSUE_KEY}] load applications`
  );

  export const [loadCountRequest, loadCountSuccess, loadCountFailure] =
    createHTTPActions<void, ReissueCount, string>(
      `[${CARD_REISSUE_KEY}] load count`
    );

  export const selectApplication = createAction(
    `[${CARD_REISSUE_KEY}] select application`,
    props<{ id: number }>()
  );

  export const selectAll = createAction(`[${CARD_REISSUE_KEY}] select all`);
}
