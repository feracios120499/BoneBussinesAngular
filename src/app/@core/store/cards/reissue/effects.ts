import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { ReissueApplicationService } from '@services/cards/reissue-application.service';
import { clientIdWithData } from '@store/shared';
import { map, switchMap } from 'rxjs/operators';
import { CardReissueActions } from './actions';

@Injectable()
export class CardReissueEffect {
  constructor(
    private actions$: Actions,
    private store: Store,
    private translateService: TranslateService,
    private reissueApplicationService: ReissueApplicationService
  ) {}

  reloadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CardReissueActions.setTab),
      switchMap((action) => [
        CardReissueActions.loadCountRequest(),
        CardReissueActions.loadApplicationsRequest(action.tab),
      ])
    )
  );

  loadCount$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CardReissueActions.loadCountRequest),
      switchMap((action) => clientIdWithData(this.store, action.payload)),
      switchMap((payload) =>
        this.reissueApplicationService
          .getCount(payload.clientId)
          .pipe(map((count) => CardReissueActions.loadCountSuccess(count)))
      )
    )
  );

  loadApplications$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CardReissueActions.loadApplicationsRequest),
      switchMap((action) => clientIdWithData(this.store, action.payload)),
      switchMap((payload) =>
        this.reissueApplicationService
          .getApplications(payload.data, payload.clientId)
          .pipe(
            map((applications) =>
              CardReissueActions.loadApplicationsSuccess(applications)
            )
          )
      )
    )
  );
}
