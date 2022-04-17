import { createAction, props } from '@ngrx/store';

import { createHTTPActions } from '@store/shared';
import { Correspondent } from '@models/correspondents/correspondent.model';
import { CORRESPONDENTS_KEY } from './store';

export namespace CorrespondentsActions {
  export const [
    loadCorrespondentsRequest,
    loadCorrespondentsSuccess,
    loadCorrespondentsFailure,
  ] = createHTTPActions<void, Correspondent[], string>(
    `[${CORRESPONDENTS_KEY}] load Correspondents`
  );

  export const filterCorrespondents = createAction(
    `[${CORRESPONDENTS_KEY}] filter Correspondents`,
    props<{ term: string }>()
  );
}
