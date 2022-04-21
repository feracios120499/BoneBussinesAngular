import { CardDetails } from '@models/cards/card-details.model';
import { CardLimit } from '@models/cards/card-limit.model';
import { CardSmsStatus } from '@models/cards/card-sms-status.model';
import { ReissueApplicationDetails } from '@models/cards/reissue-application-details.model';
import { ReissueApplication } from '@models/cards/reissue-application.model';
import { FileModel } from '@models/file.model';
import { CardDetailsTabs } from '@modules/cards/modules/card-details/models/card-details-tabs.type';
import { CardStatementModalConfig } from '@modules/cards/modules/card-details/models/card-statement-modal-config.model';
import { CardStatementModalResult } from '@modules/cards/modules/card-details/models/card-statement-modal-result.model';
import { EditLimitConfig } from '@modules/cards/modules/card-details/models/edit-limit-config.model';
import { LockCardConfig } from '@modules/cards/modules/card-details/models/lock-card-config.modal';
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

  export const [
    updateSmsStatusRequest,
    updateSmsStatusSuccess,
    updateSmsStatusFailure,
  ] = createHTTPActions<
    { cardId: string; phoneNumber: string; isEnabled: boolean },
    void,
    string
  >(`[${CARD_DETAILS_KEY}] update sms status`);

  export const showConfirmLockCard = createAction(
    `[${CARD_DETAILS_KEY}] show confirm lock card`,
    props<{ config: LockCardConfig }>()
  );

  export const [lockCardRequest, lockCardSuccess, lockCardFailure] =
    createHTTPActions<{ cardId: string; message?: string }, void, string>(
      `[${CARD_DETAILS_KEY}] lock card`
    );

  export const [unlockCardRequest, unlockCardSuccess, unlockCardFailure] =
    createHTTPActions<{ cardId: string }, void, string>(
      `[${CARD_DETAILS_KEY}] unlock card`
    );

  export const [
    loadLastReissueApplicationRequest,
    loadLastReissueApplicationSuccess,
    loadLastReissueApplicationFailure,
  ] = createHTTPActions<void, ReissueApplicationDetails | undefined, string>(
    `[${CARD_DETAILS_KEY}] load last reissue application`
  );

  export const [
    createReissueApplicationRequest,
    createReissueApplicationSuccess,
    createReissueApplicationFailure,
  ] = createHTTPActions<ReissueApplication, ReissueApplicationDetails, string>(
    `[${CARD_DETAILS_KEY}] create reissue application`
  );

  export const showCreatedApplication = createAction(
    `[${CARD_DETAILS_KEY}] show created application`,
    props<{ application: ReissueApplicationDetails }>()
  );

  export const goToApplications = createAction(
    `[${CARD_DETAILS_KEY}] go to applications`
  );

  export const showStatementModal = createAction(
    `[${CARD_DETAILS_KEY}] show statement modal`,
    props<{ card: CardDetails }>()
  );

  export const [
    downloadStatementRequest,
    downloadStatementSuccess,
    downloadStatementFailure,
  ] = createHTTPActions<
    { result: CardStatementModalResult; cardId: string },
    FileModel,
    string
  >(`[${CARD_DETAILS_KEY}] download statement`);

  export const [
    sendStatementRequest,
    sendStatementSuccess,
    sendStatementFailure,
  ] = createHTTPActions<
    { result: CardStatementModalResult; cardId: string },
    void,
    string
  >(`[${CARD_DETAILS_KEY}] send statement`);
}
