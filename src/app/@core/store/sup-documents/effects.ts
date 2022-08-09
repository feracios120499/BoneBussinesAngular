import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { SupDocumentsService } from '@services/sup-documents/sup-documents.service';
import { clientIdWithData, clientIdWithoudData } from '@store/shared';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { SupDocumentsActions } from './actions';
import { SupdocumentAddModalComponent } from '@modules/sup-documents/components/supdocument-add-modal/supdocument-add-modal.component';
import { ModalService } from '@services/modal.service';
import { SupdocumentModalConfig } from '@modules/sup-documents/types/supdocument-modal-config.model';
import { SupdocumentModalResult } from '@modules/sup-documents/types/supdocument-modal-result.model';
import { SupDocument } from '@models/sup-documents/sup-document.model';
import { ServerError } from '@models/errors/server-error.model';

@Injectable({
    providedIn: 'root'
})
export class SupDocumentsEffects {
    constructor(private actions$: Actions,
        private store: Store,
        private supDocumentsService: SupDocumentsService,
        private modalService: ModalService
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

    showCorrespondentModal$ = createEffect(() =>
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

    setCorrespondentModal$ = createEffect(
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

      createCorrespondentRequest$ = createEffect(() =>
      this.actions$.pipe(
        ofType(SupDocumentsActions.createSupdocumentRequest),
        switchMap((action) => clientIdWithData(this.store, action.payload)),
        switchMap(({ clientId, data }) =>
          this.supDocumentsService.createSupdocument(clientId, data).pipe(
            map((supdocument: SupDocument) => SupDocumentsActions.createSupdocumentSuccess(supdocument)),
            catchError((error: ServerError) =>
              of(
                SupDocumentsActions.createSupdocumentFailure(error.message)
              )
            )
          )
        )
      )
    );

   // closeSupdocumentModal$ = createEffect(
    //     () =>
    //       this.actions$.pipe(
    //         ofType(SupDocumentsActions.createSupdocumentSuccess),
    //         tap(() => this.modalService.close(SupdocumentAddModalComponent))
    //       ),
    //     { dispatch: false }
    //   );
}
