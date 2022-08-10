import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { SupDocumentsService } from '@services/sup-documents/sup-documents.service';
import { clientIdWithData, clientIdWithoudData } from '@store/shared';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { SupDocumentsActions } from './actions';
import { SupdocumentAddModalComponent } from '@modules/sup-documents/components/supdocument-add-modal/supdocument-add-modal.component';
import { ModalService } from '@services/modal.service';
import { SupdocumentModalConfig } from '@modules/sup-documents/types/supdocument-modal-config.model';
import { SupdocumentModalResult } from '@modules/sup-documents/types/supdocument-modal-result.model';
import { ServerError } from '@models/errors/server-error.model';
import { NotifyActions } from '@store/notify/actions';
import { TranslateService } from '@ngx-translate/core';
import { FileModel } from '@models/file.model';

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
            switchMap(_ => clientIdWithoudData(this.store)),
            switchMap(clientId => this.supDocumentsService.getDocuments(clientId).pipe(
                map(documents => SupDocumentsActions.loadDocumentsSuccess(documents)),
                catchError(error => of(SupDocumentsActions.loadDocumentsFailure(error.error.message))
                ))
            )
        )
    );

    showSupdocumentModal$ = createEffect(() =>
    this.actions$.pipe(
        ofType(SupDocumentsActions.showSupdocumentModal),
        map(({}) => {
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
          message: this.translateService.instant(''),
        }),
      ])
    )
  );


    deleteSupdocumentRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SupDocumentsActions.deleteSupdocumentRequest),
      switchMap((action) => clientIdWithData(this.store, action.payload)),
      switchMap(({ clientId, data: supdocumentId }) =>
        this.supDocumentsService.deleteSupdocument(clientId, supdocumentId).pipe(
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
          message: this.translateService.instant(''),
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
            window.open(window.URL.createObjectURL(supdocumentBlob.blob as Blob));
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

// downloadSupdocumentSuccess$ = createEffect(() =>
// this.actions$.pipe(
//   ofType(SupDocumentsActions.downloadSupdocumentSuccess),
//   switchMap(() => [
//     SupDocumentsActions.loadDocuments(),
//     NotifyActions.errorNotification({
//       message: this.translateService.instant('errors.downloadSupdocument'),
//     }),
//   ])
// )
// );


   closeSupdocumentModal$ = createEffect(
        () =>
          this.actions$.pipe(
            ofType(SupDocumentsActions.createSupdocumentSuccess),
            tap(() => this.modalService.close(SupdocumentAddModalComponent))
          ),
        { dispatch: false }
      );
}
