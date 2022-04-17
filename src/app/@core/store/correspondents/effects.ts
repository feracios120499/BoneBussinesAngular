import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { clientIdWithoudData } from '@store/shared';
import { CorrespondentsActions } from './actions';
import { NotifyActions } from '@store/notify/actions';
import { TranslateService } from '@ngx-translate/core';
import { CorrespondentsService } from '@services/correspondents/correspondents.service';
import { ServerError } from '@models/errors/server-error.model';
import { Correspondent } from '@models/correspondents/correspondent.model';

@Injectable()
export class CorrespondentsEffects {
  constructor(
    private actions$: Actions,
    private store: Store,
    private correspondentsService: CorrespondentsService,
    private translateService: TranslateService
  ) {}

  loadCorrespondents$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CorrespondentsActions.loadCorrespondentsRequest),
      switchMap(() => clientIdWithoudData(this.store)),
      switchMap((clientId: string) =>
        this.correspondentsService.getCorrespondents(clientId).pipe(
          map((correspondents: Correspondent[]) =>
            CorrespondentsActions.loadCorrespondentsSuccess(correspondents)
          ),
          catchError((error: ServerError) =>
            of(
              CorrespondentsActions.loadCorrespondentsFailure(error.message),
              NotifyActions.serverErrorNotification({
                error,
                message: this.translateService.instant(
                  'errors.loadCorrespondents'
                ),
              })
            )
          )
        )
      )
    )
  );
}
