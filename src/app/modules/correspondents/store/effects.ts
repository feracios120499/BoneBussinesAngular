import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, filter, map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { clientIdWithData, clientIdWithoudData } from '@store/shared';
import { CorrespondentsActions } from './actions';
import { NotifyActions } from '@store/notify/actions';
import { TranslateService } from '@ngx-translate/core';
import { ServerError } from '@models/errors/server-error.model';
import { CorrespondentsSelectors } from './selectors';
import { CorrespondentModalConfig } from '@modules/correspondents/models/correspondent-modal-config.modal';
import { CorrespondentModalResult } from '@modules/correspondents/models/correspondent-modal-result.model';
import { CorrespondentModalComponent } from '@modules/correspondents/components/correspondent-modal/correspondent-modal.component';
import { ModalService } from '@services/modal.service';
import { CorrespondentsService } from '../services/correspondents-service/correspondents.service';
import { Correspondent } from '../models/correspondent.model';
import { CorrespondentUpdateModel } from '../models/correspondent-update.model';

@Injectable()
export class CorrespondentsEffects {
  constructor(
    private actions$: Actions,
    private store: Store,
    private correspondentsService: CorrespondentsService,
    private translateService: TranslateService,
    private modalService: ModalService
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

  showCorrespondentModal$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CorrespondentsActions.showCorrespondentModal),
      map(({ editingCorrespondent }) => {
        const config: CorrespondentModalConfig = {
          editingCorrespondent,
          callback: (result: CorrespondentModalResult) => {
            if ((result as CorrespondentUpdateModel).id) {
              this.store.dispatch(CorrespondentsActions.updateCorrespondentRequest(result as CorrespondentUpdateModel));
            } else {
              this.store.dispatch(CorrespondentsActions.createCorrespondentRequest(result));
            }
          },
        };
        return CorrespondentsActions.setCorrespondentModal({ config });
      })
    )
  );

  setCorrespondentModal$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CorrespondentsActions.setCorrespondentModal),
        map(({ config }) => {
          const modalRef = this.modalService.open(CorrespondentModalComponent);
          modalRef.componentInstance.config = config;
          // return modalRef;
        })
        // mergeMap((modalRef: NgbModalRef) =>
        //   this.actions$.pipe(
        //     ofType(CorrespondentsActions.createCorrespondentSuccess, CorrespondentsActions.updateCorrespondentSuccess),
        //     tap(() => modalRef.close())
        //   )
        // )
      ),
    { dispatch: false }
  );

  closeCorrespondentModal$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CorrespondentsActions.createCorrespondentSuccess, CorrespondentsActions.updateCorrespondentSuccess),
        tap(() => this.modalService.close(CorrespondentModalComponent))
      ),
    { dispatch: false }
  );
}
