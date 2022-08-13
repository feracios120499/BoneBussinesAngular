import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { SupDocumentsService } from '@services/sup-documents/sup-documents.service';
import { clientIdWithData, clientIdWithoudData } from '@store/shared';
import { of } from 'rxjs';
import { catchError, filter, map, switchMap, tap, withLatestFrom } from 'rxjs/operators';

import { SupDocumentsActions } from './actions';
import { SupdocumentAddModalComponent } from '@modules/sup-documents/components/supdocument-add-modal/supdocument-add-modal.component';
import { ModalService } from '@services/modal.service';
import { ServerError } from '@models/errors/server-error.model';
import { NotifyActions } from '@store/notify/actions';
import { TranslateService } from '@ngx-translate/core';
import { FileModel } from '@models/file.model';
import { SharedActions } from '@store/shared/actions';
import { SupDocument } from '@models/sup-documents/sup-document.model';
import { SupDocumentsSelectors } from './selectors';
import { SupdocumentModalConfig, SupdocumentSendModalConfig } from '@modules/sup-documents/types/supdocument-modal-config.model';
import { SupdocumentModalResult, SupdocumentSendModalResult } from '@modules/sup-documents/types/supdocument-modal-result.model';
import { SupdocumentSendModalComponent } from '@modules/sup-documents/components/supdocument-send-modal/supdocument-send-modal.component';

@Injectable({
    providedIn: 'root'
})
export class SupDocumentsEffects {
    constructor(private actions$: Actions,
        private store: Store,
        private supDocumentsService: SupDocumentsService,
        private modalService: ModalService,
        private translateService: TranslateService,
        ) { }

    loadDocuments$ = createEffect(() =>
        this.actions$.pipe(
            ofType(SupDocumentsActions.loadDocuments),
            switchMap(() => clientIdWithoudData(this.store)),
            switchMap((clientId: string) =>
              this.supDocumentsService.getDocuments(clientId).pipe(
                map((documents: SupDocument[]) => SupDocumentsActions.loadDocumentsSuccess(documents)),
                catchError(error =>
                  of(SupDocumentsActions.loadDocumentsFailure(error.error.message))
                ))
            )
        )
    );

    loadIfNotStoredSupdocuments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SupDocumentsActions.loadIfNotStoredSupdocuments),
      withLatestFrom(this.store.select(SupDocumentsSelectors.documents)),
      filter(([_, correspondents]) => !correspondents.length),
      map(() => SupDocumentsActions.loadDocuments())
    )
  );


    showSupdocumentModal$ = createEffect(() =>
    this.actions$.pipe(
        ofType(SupDocumentsActions.showSupdocumentModal),
        map(() => {
          const config: SupdocumentModalConfig = {
            callback: (result: SupdocumentModalResult) => {
                this.store.dispatch(SupDocumentsActions.createSupdocumentRequest(result));
            },
          };
          return SupDocumentsActions.setSupdocumentModal({ config });
        })
      )
    );

    setSupdocumentModal$ = createEffect(
        () =>
          this.actions$.pipe(
            ofType(SupDocumentsActions.setSupdocumentModal),
            map(({ config }) => {
              const modalRef = this.modalService.open(SupdocumentAddModalComponent);
              modalRef.componentInstance.config = config;
            })
          ),
        { dispatch: false }
    );

    showSupdocumentSendModal$ = createEffect(() =>
    this.actions$.pipe(
        ofType(SupDocumentsActions.showSupdocumentSendModal),
        map(() => {
          const config: SupdocumentSendModalConfig = {
            callback: (result: SupdocumentSendModalResult) => {
                this.store.dispatch(SupDocumentsActions.sendSupdocumentRequest(result));
            },
          };
          return SupDocumentsActions.setSupdocumentSendModal({ config });
        })
      )
    );

    setSupdocumentSendModal$ = createEffect(
      () =>
        this.actions$.pipe(
          ofType(SupDocumentsActions.setSupdocumentSendModal),
          map(({ config }) => {
            const modalRef = this.modalService.open(SupdocumentSendModalComponent);
            modalRef.componentInstance.config = config;
          })
        ),
      { dispatch: false }
  );


      createSupdocumentRequest$ = createEffect(() =>
      this.actions$.pipe(
        ofType(SupDocumentsActions.createSupdocumentRequest),
        switchMap((action) => clientIdWithData(this.store, action.payload)),
        switchMap(({ clientId, data }) =>
          this.supDocumentsService.createSupdocument(clientId, data).pipe(
            map((supdocument) => SupDocumentsActions.createSupdocumentSuccess(supdocument)),
            catchError((error: ServerError) =>
              of(
                SupDocumentsActions.createSupdocumentFailure(error.message),
                NotifyActions.errorNotification({
                  message: this.translateService.instant('create error'),
                }),
              )
            )
          )
        )
      )
    );

    createSupdocumentSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SupDocumentsActions.createSupdocumentSuccess),
      switchMap(() => [
        SupDocumentsActions.loadDocuments(),
        NotifyActions.successNotification({
          message: this.translateService.instant('create success'),
        }),
      ])
    )
  );

  sendSupdocumentRequest$ = createEffect(() =>
  this.actions$.pipe(
    ofType(SupDocumentsActions.sendSupdocumentRequest),
    switchMap((action) => clientIdWithData(this.store, action.payload)),
    switchMap(({ clientId, data }) =>
      this.supDocumentsService.sendToBank(clientId, data).pipe(
        map((response) => SupDocumentsActions.sendSupdocumentSuccess(response)),
        catchError((error: ServerError) =>
          of(
            SupDocumentsActions.sendSupdocumentFailure(error.message),
            NotifyActions.errorNotification({
              message: this.translateService.instant('send error'),
            }),
          )
        )
      )
    )
  )
);

sendSupdocumentSuccess$ = createEffect(() =>
this.actions$.pipe(
  ofType(SupDocumentsActions.sendSupdocumentSuccess),
  switchMap(() => [
    // SupDocumentsActions.loadDocuments(),
    NotifyActions.successNotification({
      message: this.translateService.instant('send success'),
    }),
  ])
)
);


    deleteSupdocumentRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SupDocumentsActions.deleteSupdocumentRequest),
      switchMap((action) => clientIdWithData(this.store, action.payload)),
      switchMap((payload ) =>
        this.supDocumentsService.deleteSupdocument(payload.clientId, payload.data).pipe(
          map(() => SupDocumentsActions.deleteSupdocumentSuccess()),
          catchError((error: ServerError) =>
            of(
              SupDocumentsActions.deleteSupdocumentFailure(error.message),
              NotifyActions.serverErrorNotification({
                error,
                message: this.translateService.instant('errors.deleteSupdocument'),
              })
            )
          )
        )
      )
    )
  );

  deleteSupdocumentSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SupDocumentsActions.deleteSupdocumentSuccess),
      switchMap(() => [
        SupDocumentsActions.loadDocuments(),
        NotifyActions.successNotification({
          message: this.translateService.instant('delete success'),
        }),
      ])
    )
  );


  downloadSupdocumentRequest$ = createEffect(() =>
  this.actions$.pipe(
    ofType(SupDocumentsActions.downloadSupdocumentRequest),
    switchMap((action) => clientIdWithData(this.store, action.payload)),
    switchMap(({ clientId, data: supdocumentId }) =>
      this.supDocumentsService.downloadSupdocument(clientId, supdocumentId).pipe(
        map((supdocumentBlob: FileModel) =>{
            return SupDocumentsActions.downloadSupdocumentSuccess(supdocumentBlob);
        }
        ),
        catchError((error: ServerError) =>
          of(
            SupDocumentsActions.downloadSupdocumentFailure(error.message),
            NotifyActions.errorNotification({
              message: this.translateService.instant('components.supDocuments.errors.errorDownloadFile'),
            })
          )
        )
      )
    )
  )
);


downloadSupdocumentSuccess$ = createEffect(() =>
this.actions$.pipe(
  ofType(SupDocumentsActions.downloadSupdocumentSuccess),
  map((action) => SharedActions.saveFile({ file: action.payload }))
)
);


  closeSupdocumentModal$ = createEffect(
      () =>
        this.actions$.pipe(
          ofType(SupDocumentsActions.createSupdocumentSuccess),
          tap(() => this.modalService.close(SupdocumentAddModalComponent))
        ),
      { dispatch: false }
    );

  closeSupdocumentSendModal$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(SupDocumentsActions.sendSupdocumentSuccess),
        tap(() => this.modalService.close(SupdocumentSendModalComponent))
      ),
    { dispatch: false }
  );
}
