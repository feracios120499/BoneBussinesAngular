import { Injectable } from '@angular/core';
import { CorrespondentsModalConfig } from '@models/modals/correspondents-modal-config.model';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { PaymentsSignService } from '@services/payments/payments-sign.service';
import { PaymentsService } from '@services/payments/payments.service';
import { BarsCryptorService } from '@services/sign/bars-cryptor.service';
import { CorrespondentsActions } from '@store/correspondents/actions';
import { NotifyActions } from '@store/notify/actions';
import { clientIdWithData } from '@store/shared';
import { SharedActions } from '@store/shared/actions';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
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
                }),
                catchError(error => of(PayActions.signPaymentFailure(error.message)))
            )),
        ));

    onSign$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PayActions.onSignPayment),
            switchMap(action => clientIdWithData(this.store, action.payload)),
            switchMap(payload => this.paymentsService.onSign(payload.data, payload.clientId).pipe(
                map(response =>
                    response.isSuccess ?
                        PayActions.onSignPaymentSuccess() :
                        PayActions.onSignPaymentFailure(response.message as string)
                ),
                catchError(error => of(PayActions.onSignPaymentFailure(error.error.message)))
            ))
        ));

    toBank$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PayActions.toBankPayment),
            switchMap(action => clientIdWithData(this.store, action.payload)),
            switchMap(payload => this.paymentsService.toBank(payload.data, payload.clientId).pipe(
                map(response =>
                    response.isSuccess ?
                        PayActions.toBankPaymentSuccess() :
                        PayActions.toBankPaymentFailure(response.message as string)
                ),
                catchError(error => of(PayActions.toBankPaymentFailure(error.error.message)))
            ))
        ));

    signPaymentFailure$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PayActions.signPaymentFailure),
            map(action => NotifyActions.errorNotification({ message: action.payload }))
        ));

      showCorrespondentsModal$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PayActions.showCorrespondentsModal),
            tap(() => this.store.dispatch(CorrespondentsActions.loadIfNotStoredCorrespondents())),
            map(() => {
                const config: CorrespondentsModalConfig = {
                    callback: (result) => {
                      // FOR DEMO PURPOSE ONLY:
                      console.log('[PAY EFFECTS] Correspondent is selected: ', result);
                    }
                };
                return SharedActions.showCorrespondents({ config });
            })
        ));
}
