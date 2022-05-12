import { Injectable } from '@angular/core';
import { ServerError } from '@models/errors/server-error.model';
import { MobileAppLinks } from '@models/mobile-app-links.model';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TranslateService } from '@ngx-translate/core';
import { PublicService } from '@services/public.service';
import { AppActions } from '@store/app/actions';
import { NotifyActions } from '@store/notify/actions';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';

import { PublicActions } from './actions';

@Injectable({
  providedIn: 'root',
})
export class PublicEffects {
  constructor(
    private actions$: Actions,
    private publicService: PublicService,
    private translateService: TranslateService
  ) {}

  appStart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.start),
      mergeMap(() => [
        // PublicActions.loadBanksRequest(),
        PublicActions.loadPayTypesReuqest(),
        PublicActions.loadResourcesRequest(),
        PublicActions.loadMobileAppLinksReuqest(),
      ])
    )
  );
  loadBanks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PublicActions.loadBanksRequest),
      switchMap(() =>
        this.publicService.getBanks().pipe(
          map((banks) => PublicActions.loadBanksSuccess(banks)),
          catchError((error) => of(PublicActions.loadBanksFailure(error.error.Message)))
        )
      )
    )
  );

  loadBank$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PublicActions.loadBankRequest),
      switchMap((action) =>
        this.publicService.getBank(action.payload).pipe(
          map((bank) => PublicActions.loadBankSuccess(bank)),
          catchError((error) => of(PublicActions.loadBankFailure(error.error.Message)))
        )
      )
    )
  );

  loadResources$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PublicActions.loadResourcesRequest),
      switchMap((_) =>
        this.publicService.getResources().pipe(
          map((resources) => PublicActions.loadResourcesSuccess(resources)),
          catchError((error) => of(PublicActions.loadResourcesFailure(error.error.Message)))
        )
      )
    )
  );

  loadPayTypes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PublicActions.loadPayTypesReuqest),
      switchMap((_) =>
        this.publicService.getPayTypes().pipe(
          map((resources) => PublicActions.loadPayTypesSuccess(resources)),
          catchError((error) => of(PublicActions.loadPayTypesFailure(error.error.Message)))
        )
      )
    )
  );

  loadMobileAppLinks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PublicActions.loadMobileAppLinksReuqest),
      switchMap(() =>
        this.publicService.getMobileAppLinks().pipe(
          map((links: MobileAppLinks) => PublicActions.loadMobileAppLinksSuccess(links)),
          catchError((error: ServerError) =>
            of(
              PublicActions.loadMobileAppLinksFailure(error.message),
              NotifyActions.serverErrorNotification({
                error,
                message: this.translateService.instant('errors.loadMobileAppLinks'),
              })
            )
          )
        )
      )
    )
  );
}
