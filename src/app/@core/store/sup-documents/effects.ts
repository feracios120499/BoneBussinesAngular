import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { SupDocumentsService } from '@services/sup-documents/sup-documents.service';
import { clientIdWithoudData } from '@store/shared';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { SupDocumentsActions } from './actions';


@Injectable({
    providedIn: 'root'
})
export class SupDocumentsEffects {
    constructor(private actions$: Actions, private store: Store, private supDocumentsService: SupDocumentsService) { }

    loadDocuments$ = createEffect(() =>
        this.actions$.pipe(
            ofType(SupDocumentsActions.loadDocuments),
            switchMap(_ => clientIdWithoudData(this.store)),
            switchMap(clientId => this.supDocumentsService.getDocuments(clientId).pipe(
                map(documents => SupDocumentsActions.loadDocumentsSuccess(documents)),
                catchError(error => of(SupDocumentsActions.loadDocumentsFailure(error.error.message))
                ))
            )
        ));
}
