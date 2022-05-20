import { CardReissueStatus } from '@b1-types/cards/card-reissue-status.type';
import { CardResponseResult } from '@models/cards/card-response-result.model';
import { ReissueApplicationDetails } from '@models/cards/reissue-application-details.model';
import { StatusCount } from '@models/status-count.model';
import { ReissueHistory } from '@models/cards/reissue-history.model';
import { ReissueSign } from '@models/cards/reissue-sign.model';
import { SignResponse, SignSaveResponse } from '@models/sign-response.model';
import { createAction, props } from '@ngrx/store';
import { createHTTPActions } from '@store/shared';
import { CARD_REISSUE_KEY } from './store';

export namespace CardReissueActions {
  export const init = createAction(`[${CARD_REISSUE_KEY}] init`);

  export const destroy = createAction(`[${CARD_REISSUE_KEY}] destroy`);

  export const setTab = createAction(`[${CARD_REISSUE_KEY}] set tab`, props<{ tab: CardReissueStatus }>());

  export const [loadApplicationsRequest, loadApplicationsSuccess, loadApplicationsFailure] = createHTTPActions<
    void,
    ReissueApplicationDetails[],
    string
  >(`[${CARD_REISSUE_KEY}] load applications`);

  export const [loadCountRequest, loadCountSuccess, loadCountFailure] = createHTTPActions<void, StatusCount, string>(
    `[${CARD_REISSUE_KEY}] load count`
  );

  export const selectApplication = createAction(`[${CARD_REISSUE_KEY}] select application`, props<{ id: number }>());

  export const selectAll = createAction(`[${CARD_REISSUE_KEY}] select all`);

  export const confirmSign = createAction(`[${CARD_REISSUE_KEY}] confirm sign`);

  export const [signApplicationsRequest, signApplicationsSuccess, signApplicationsFailure] = createHTTPActions<
    number[],
    SignSaveResponse[],
    string
  >(`[${CARD_REISSUE_KEY}] sign applications`);

  export const [showApplicationHistoryRequest, showApplicationHistorySuccess, showApplicationHistoryFailure] =
    createHTTPActions<ReissueApplicationDetails, ReissueHistory[], string>(`[${CARD_REISSUE_KEY}] show history`);

  export const [showApplicationSignRequest, showApplicationSignSuccess, showApplicationSignFailure] = createHTTPActions<
    ReissueApplicationDetails,
    ReissueSign[],
    string
  >(`[${CARD_REISSUE_KEY}] show sign`);

  export const confirmRemove = createAction(`[${CARD_REISSUE_KEY}] confrim remove`);

  export const [removeApplicationsRequest, removeApplicationsSuccess, removeApplicationsFailure] = createHTTPActions<
    number[],
    CardResponseResult[],
    string
  >(`[${CARD_REISSUE_KEY}] remove applications`);

  export const confirmSendToBank = createAction(`[${CARD_REISSUE_KEY}] confrim send to bank`);

  export const [sendToBankApplicationsRequest, sendToBankApplicationsSuccess, sendToBankApplicationsFailure] =
    createHTTPActions<number[], CardResponseResult[], string>(`[${CARD_REISSUE_KEY}] send to bank applications`);

  export const filter = createAction(`[${CARD_REISSUE_KEY}] filter`, props<{ filter: string }>());
}
