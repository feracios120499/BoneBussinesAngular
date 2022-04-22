import { createAction, props } from '@ngrx/store';

import { createHTTPActions } from '@store/shared';
import { Correspondent } from '@models/correspondents/correspondent.model';
import { CORRESPONDENTS_KEY } from './store';
import { CorrespondentForm } from '@models/correspondents/correspondent-form.model';
import { CorrespondentUpdateModel } from '@models/correspondents/correspondent-update.model';

export namespace CorrespondentsActions {
  export const [
    loadCorrespondentsRequest,
    loadCorrespondentsSuccess,
    loadCorrespondentsFailure,
  ] = createHTTPActions<void, Correspondent[], string>(
    `[${CORRESPONDENTS_KEY}] load Correspondents`
  );

  export const loadIfNotStoredCorrespondents = createAction(
    `${[CORRESPONDENTS_KEY]} load if not stored correspondents`
  );

  export const filterCorrespondents = createAction(
    `[${CORRESPONDENTS_KEY}] filter Correspondents`,
    props<{ term: string }>()
  );

  export const resetCorrespondentFilter = createAction(
    `[${CORRESPONDENTS_KEY}] reset correspondent filter`
  );

  export const [
    createCorrespondentRequest,
    createCorrespondentSuccess,
    createCorrespondentFailure,
  ] = createHTTPActions<CorrespondentForm, Correspondent, string>(
    `[${CORRESPONDENTS_KEY}] create correspondent`
  );

  export const [
    updateCorrespondentRequest,
    updateCorrespondentSuccess,
    updateCorrespondentFailure,
  ] = createHTTPActions<CorrespondentUpdateModel, Correspondent, string>(
    `[${CORRESPONDENTS_KEY}] update correspondent`
  );

  export const [
    deleteCorrespondentRequest,
    deleteCorrespondentSuccess,
    deleteCorrespondentFailure,
  ] = createHTTPActions<string, void, string>(
    `[${CORRESPONDENTS_KEY}] delete correspondent`
  );
}
