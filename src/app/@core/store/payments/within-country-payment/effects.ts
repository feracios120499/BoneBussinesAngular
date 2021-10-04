import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { PaymentsService } from '@services/payments.service';
import { clientIdWithData } from '@store/shared';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { WithinCountryActions } from './actions';

@Injectable({
    providedIn: 'root'
})
export class WithinCountryEffects {
    constructor(private actions$: Actions, private store: Store, private paymentsService: PaymentsService) { }

    create$ = createEffect(() =>
        this.actions$.pipe(
            ofType(WithinCountryActions.createRequest),
            switchMap(action => clientIdWithData(this.store, action.payload)),
            switchMap(payload =>
                this.paymentsService.createWithinCountryPayment(
                    payload.data,
                    payload.clientId).pipe(
                        map(response => WithinCountryActions.createSuccess(response.id)),
                        catchError(error => of(WithinCountryActions.createFailure(error.error.Message)))
                    ))
        )
    );

}
