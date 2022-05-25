import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, exhaustMap, map, switchMap, takeUntil } from 'rxjs/operators';
import { Actions, createEffect, EffectNotification, ofType, OnRunEffects } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';

import { NotifyActions } from '@store/notify/actions';
import { clientIdWithoudData } from '@store/shared';
import { OverdraftsActions } from './actions';
import { OverdraftsService } from '../../../services/overdrafts-service/overdrafts.service';
import { Overdraft } from '../../../models/overdraft.model';
import { ServerError } from '@models/errors/server-error.model';

@Injectable()
export class OverdraftsEffects implements OnRunEffects {
  constructor(
    private actions$: Actions,
    private store: Store,
    private overdraftsService: OverdraftsService,
    private translateService: TranslateService
  ) {}

  loadOverdrafts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OverdraftsActions.loadOverdraftsRequest),
      switchMap(() => clientIdWithoudData(this.store)),
      switchMap((clientId: string) =>
        this.overdraftsService.getOverdrafts(clientId).pipe(
          map((overdrafts: Overdraft[]) => OverdraftsActions.loadOverdraftsSuccess(overdrafts)),
          catchError((error: ServerError) =>
            of(
              OverdraftsActions.loadOverdraftsFailure(error.message),
              NotifyActions.serverErrorNotification({
                error,
                message: this.translateService.instant('components.overdrafts.errors.loadOverdrafts'),
              })
            )
          )
        )
      )
    )
  );

  ngrxOnRunEffects(resolvedEffects$: Observable<EffectNotification>): Observable<EffectNotification> {
    return this.actions$.pipe(
      ofType(OverdraftsActions.init),
      exhaustMap(() => resolvedEffects$.pipe(takeUntil(this.actions$.pipe(ofType(OverdraftsActions.destroy)))))
    );
  }
}
