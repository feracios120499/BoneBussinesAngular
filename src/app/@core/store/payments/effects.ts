import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { PaymentsSignService } from '@services/payments/payments-sign.service';
import { PaymentsService } from '@services/payments/payments.service';
import { BarsCryptorService } from '@services/sign/bars-cryptor.service';
import { clientIdWithData } from '@store/shared';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { PayActions } from './actions';


@Injectable({
    providedIn: 'root'
})
export class PayEffects {
    constructor(
        private actions$: Actions,
        private store: Store,
        private paymentsService: PaymentsService,
        private paymentsSignService: PaymentsSignService,
        private cryptorService: BarsCryptorService) { }

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


    signPayment$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PayActions.signPayment),
            switchMap(action => clientIdWithData(this.store, action.payload)),
            switchMap(payload => this.paymentsSignService.getBuffer(payload.data, payload.clientId).pipe(
                switchMap(buffer => this.cryptorService.signBuffer(buffer)),
                switchMap((signResponse) => {
                    if (signResponse.isSuccess) {
                        return this.paymentsSignService.addSignature({ ...signResponse }, payload.clientId).pipe(
                            map((saveResponse) => {
                                if (saveResponse.isSuccess) {
                                    return PayActions.signPaymentSuccess(saveResponse);
                                }
                                return PayActions.signPaymentFailure(saveResponse.error?.message as string);
                            })
                        );
                    }
                    return of(PayActions.signPaymentFailure(signResponse.error?.message as string));
                })
            )),
        ));
}
