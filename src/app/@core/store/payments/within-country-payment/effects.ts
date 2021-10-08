import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { PaymentsService } from '@services/payments/payments.service';
import { clientIdWithData } from '@store/shared';
import { of } from 'rxjs';
import { catchError, filter, map, switchMap, tap, withLatestFrom } from 'rxjs/operators';

import { PayActions } from '../actions';
import { WithinCountryActions } from './actions';
import { WithinCountryPaymentSelectors } from './selectors';

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
                        tap(console.log),
                        map(response => WithinCountryActions.createSuccess(response.id)),
                        catchError(error => of(WithinCountryActions.createFailure(error.error.Message)))
                    ))
        )
    );

    loadPayment$ = createEffect(() =>
        this.actions$.pipe(
            ofType(WithinCountryActions.createSuccess),
            map(action => PayActions.loadPaymentRequest(action.payload))
        ));

    reloadPayment$ = createEffect(() =>
        this.actions$.pipe(
            ofType(
                PayActions.signPaymentSuccess,
                PayActions.signPaymentFailure
            ),
            withLatestFrom(this.store.select(WithinCountryPaymentSelectors.createdPayment)),
            map(([_, payment]) => PayActions.loadPaymentRequest(payment?.id as string))
        ));

    setPayment$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PayActions.loadPaymentSuccess),
            map(action => WithinCountryActions.setCreatedPayment({ payment: action.payload }))
        ))

    toResult$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PayActions.loadPaymentSuccess),
            withLatestFrom(this.store.select(WithinCountryPaymentSelectors.progress)),
            filter(([_, progress]) => progress !== 'result'),
            map(_ => WithinCountryActions.setProgress({ progress: 'result' }))
        ));
}
