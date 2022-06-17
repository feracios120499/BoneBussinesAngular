import { Injectable } from '@angular/core';
import { B1FeedbackModalComponent } from '@modals/b1-feedback-modal/b1-feedback-modal.component';
import { ServerError } from '@models/errors/server-error.model';
import { MobileAppLinks } from '@models/mobile-app-links.model';
import { FeedbackModalConfig } from '@models/modals/feedback-modal.config';
import { FeedbackModalResult } from '@models/modals/feedback-modal.result';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { ModalService } from '@services/modal.service';
import { PublicService } from '@services/public.service';
import { AppActions } from '@store/app/actions';
import { NotifyActions } from '@store/notify/actions';
import { SharedActions } from '@store/shared/actions';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { environment } from '@env';

import { PublicActions } from './actions';
import { Version } from '@models/version.model';
import { News } from '@models/news.model';

@Injectable({
  providedIn: 'root',
})
export class PublicEffects {
  constructor(
    private actions$: Actions,
    private publicService: PublicService,
    private translateService: TranslateService,
    private store: Store,
    private modalService: ModalService
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

  sendFeedbackRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PublicActions.sendFeedbackRequest),
      switchMap(({ payload }) =>
        this.publicService.sendFeedback(payload).pipe(
          map(() => PublicActions.sendFeedbackSuccess()),
          catchError((error: ServerError) =>
            of(
              PublicActions.sendFeedbackFailure(error.message),
              NotifyActions.serverErrorNotification({
                error,
                message: this.translateService.instant('components.feedback.errors.sendFeedback'),
              })
            )
          )
        )
      )
    )
  );

  sendFeedbackSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PublicActions.sendFeedbackSuccess),
      switchMap(() => [
        NotifyActions.successNotification({
          title: this.translateService.instant('shared.feedbackSent'),
          message: this.translateService.instant('shared.thanksForCooperation'),
        }),
      ])
    )
  );

  showFeedbackForm$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PublicActions.showFeedbackForm),
      map(() => {
        const config: FeedbackModalConfig = {
          callback: (result: FeedbackModalResult) => {
            const { appId, appVersion } = environment;
            this.store.dispatch(PublicActions.sendFeedbackRequest({ ...result, appId, appVersion }));
          },
        };
        return SharedActions.showFeedbackModal({ config });
      })
    )
  );

  closeFeedbackForm$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(PublicActions.sendFeedbackSuccess),
        tap(() => this.modalService.close(B1FeedbackModalComponent))
      ),
    { dispatch: false }
  );

  loadVersion$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PublicActions.loadVersionRequest),
      switchMap(({ payload }) =>
        this.publicService.getVersion(payload).pipe(
          map((version: Version) => PublicActions.loadVersionSuccess(version)),
          catchError((error: ServerError) =>
            of(
              PublicActions.loadVersionFailure(error.message),
              NotifyActions.serverErrorNotification({
                error,
                message: this.translateService.instant('components.version.errors.loadVersion'),
              })
            )
          )
        )
      )
    )
  );

  loadNewsList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PublicActions.loadNewsListRequest),
      switchMap(() =>
        this.publicService.getNewsList().pipe(
          map((newsList: News[]) => PublicActions.loadNewsListSuccess(newsList)),
          catchError((error: ServerError) =>
            of(
              PublicActions.loadNewsListFailure(error.message),
              NotifyActions.serverErrorNotification({
                error,
                message: this.translateService.instant('errors.loadNewsList'),
              })
            )
          )
        )
      )
    )
  );
}
