import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { PaymentsService } from '@services/payments.service';
import { clientIdWithData } from '@store/shared';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { PayActions } from './actions';


@Injectable({
    providedIn: 'root'
})
export class PayEffects {
    constructor(private actions$: Actions, private store: Store, private paymentsService: PaymentsService) { }

    loadPayment$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PayActions.loadPaymentRequest),
            switchMap(action => clientIdWithData(this.store, action.payload)),
            switchMap(payload =>
                this.paymentsService.getPayment(
                    payload.data,
                    payload.clientId).pipe(
                        map(payment => PayActions.loadPaymentSuccess(payment)),
                        catchError(error => of(PayActions.loadPaymentFailure(error.error.Message)))
                    )
            )
        )
    );

}
