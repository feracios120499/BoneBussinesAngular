import { CardDetails } from '@models/cards/card-details.model';
import { CardLimit } from '@models/cards/card-limit.model';
import { CardSmsStatus } from '@models/cards/card-sms-status.model';
import { CardDetailsTabs } from '@modules/cards/modules/card-details/models/card-details-tabs.type';
import { EditLimitConfig } from '@modules/cards/modules/card-details/models/edit-limit-config.modal';
import { createAction, props } from '@ngrx/store';
import { createHTTPActions } from '@store/shared';
import { CARD_DETAILS_KEY } from './store';

export namespace CardDetailsActions {
  export const setTab = createAction(
    `[${CARD_DETAILS_KEY}] set tab`,
    props<{ tab: CardDetailsTabs }>()
  );

  export const loadData = createAction(`[${CARD_DETAILS_KEY}] load data`);

  export const [loadCardRequest, loadCardSuccess, loadCardFailure] =
    createHTTPActions<void, CardDetails, string>(
      `[${CARD_DETAILS_KEY}] load card`
    );

  export const [
    loadSmsStatusRequest,
    loadSmsStatusSuccess,
    loadSmsStatusFailure,
  ] = createHTTPActions<void, CardSmsStatus, string>(
    `[${CARD_DETAILS_KEY}] load sms status`
  );

  export const [loadLimitsRequest, loadLimitsSuccess, loadLimitsFailure] =
    createHTTPActions<void, CardLimit[], string>(
      `[${CARD_DETAILS_KEY}] load limits`
    );

  export const [
    setDefaultLimitRequest,
    setDefaultLimitSuccess,
    setDefaultLimitFailure,
  ] = createHTTPActions<CardLimit, void, string>(
    `[${CARD_DETAILS_KEY}] set default limit`
  );

  export const openEditLimitModal = createAction(
    `[${CARD_DETAILS_KEY}] open edit modal`,
    props<{ config: EditLimitConfig }>()
  );

  export const [updateLimitRequest, updateLimitSuccess, updateLimitFailure] =
    createHTTPActions<CardLimit, void, string>(
      `[${CARD_DETAILS_KEY}] update limit`
    );

  export const goToCards = createAction(`[${CARD_DETAILS_KEY}] go to cards`);
}
