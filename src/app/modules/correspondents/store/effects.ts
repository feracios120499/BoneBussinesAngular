import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, filter, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { clientIdWithData, clientIdWithoudData } from '@store/shared';
import { CorrespondentsActions } from './actions';
import { NotifyActions } from '@store/notify/actions';
import { TranslateService } from '@ngx-translate/core';
import { CorrespondentsService } from '@modules/correspondents/services/correspondents-service/correspondents.service';
import { ServerError } from '@models/errors/server-error.model';
import { CorrespondentsSelectors } from './selectors';
import { Correspondent } from '../models/correspondent.model';

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
          map((correspondents: Correspondent[]) => CorrespondentsActions.loadCorrespondentsSuccess(correspondents)),
          catchError((error: ServerError) =>
            of(
              CorrespondentsActions.loadCorrespondentsFailure(error.message),
              NotifyActions.serverErrorNotification({
                error,
                message: this.translateService.instant('errors.loadCorrespondents'),
              })
            )
          )
        )
      )
    )
  );

  loadIfNotStoredCorrespondents$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CorrespondentsActions.loadIfNotStoredCorrespondents),
      withLatestFrom(this.store.select(CorrespondentsSelectors.correspondentList)),
      filter(([_, correspondents]) => !correspondents.length),
      map(() => CorrespondentsActions.loadCorrespondentsRequest())
    )
  );

  createCorrespondentRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CorrespondentsActions.createCorrespondentRequest),
      switchMap((action) => clientIdWithData(this.store, action.payload)),
      switchMap(({ clientId, data }) =>
        this.correspondentsService.createCorrespondent(clientId, data).pipe(
          map((correspondent: Correspondent) => CorrespondentsActions.createCorrespondentSuccess(correspondent)),
          catchError((error: ServerError) =>
            of(
              CorrespondentsActions.createCorrespondentFailure(error.message),
              NotifyActions.serverErrorNotification({
                error,
                message: this.translateService.instant('errors.createCorrespondent'),
              })
            )
          )
        )
      )
    )
  );

  createCorrespondentSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CorrespondentsActions.createCorrespondentSuccess),
      switchMap(() => [
        CorrespondentsActions.loadCorrespondentsRequest(),
        NotifyActions.successNotification({
          message: this.translateService.instant('components.pay.correspondents.newCorrespondentAdded'),
        }),
      ])
    )
  );

  updateCorrespondentRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CorrespondentsActions.updateCorrespondentRequest),
      switchMap((action) => clientIdWithData(this.store, action.payload)),
      switchMap(({ clientId, data }) =>
        this.correspondentsService.updateCorrespondent(clientId, data).pipe(
          map((correspondent: Correspondent) => CorrespondentsActions.updateCorrespondentSuccess(correspondent)),
          catchError((error) =>
            of(
              CorrespondentsActions.updateCorrespondentFailure(error.message),
              NotifyActions.serverErrorNotification({
                error,
                message: this.translateService.instant('errors.updateCorrespondent'),
              })
            )
          )
        )
      )
    )
  );

  updateCorrespondentSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CorrespondentsActions.updateCorrespondentSuccess),
      switchMap(() => [
        CorrespondentsActions.loadCorrespondentsRequest(),
        NotifyActions.successNotification({
          message: this.translateService.instant('components.admin.infoUpdatedSuccs'),
        }),
      ])
    )
  );

  deleteCorrespondentRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CorrespondentsActions.deleteCorrespondentRequest),
      switchMap((action) => clientIdWithData(this.store, action.payload)),
      switchMap(({ clientId, data: correspondentId }) =>
        this.correspondentsService.deleteCorrespondent(clientId, correspondentId).pipe(
          map(() => CorrespondentsActions.deleteCorrespondentSuccess()),
          catchError((error: ServerError) =>
            of(
              CorrespondentsActions.deleteCorrespondentFailure(error.message),
              NotifyActions.serverErrorNotification({
                error,
                message: this.translateService.instant('errors.deleteCorrespondent'),
              })
            )
          )
        )
      )
    )
  );

  deleteCorrespondentSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CorrespondentsActions.deleteCorrespondentSuccess),
      switchMap(() => [
        CorrespondentsActions.loadCorrespondentsRequest(),
        NotifyActions.successNotification({
          message: this.translateService.instant('components.pay.correspondents.correspondentDeleted'),
        }),
      ])
    )
  );
}
