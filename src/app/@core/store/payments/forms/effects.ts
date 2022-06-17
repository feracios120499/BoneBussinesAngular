import { Injectable } from '@angular/core';
import { HttpPaymentsService } from '@modules/payments/services/payments-service/http-payments.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { PaymentsService } from '@services/payments/payments.service';
import { PublicService } from '@services/public.service';
import { clientIdWithData } from '@store/shared';
import { of } from 'rxjs';
import { catchError, filter, map, switchMap, take, tap, withLatestFrom } from 'rxjs/operators';

import { PayActions } from '../actions';
import { PayFormsActions } from './actions';
import { PayFormsSelectors } from './selectors';

@Injectable({
  providedIn: 'root',
})
export class PayFormsEffects {
  constructor(
    private actions$: Actions,
    private store: Store,
    private paymentsService: PaymentsService,
    private httpPaymentsService: HttpPaymentsService,
    private publicService: PublicService
  ) {}

  createWithinCountry$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PayFormsActions.createWithinCountryRequest),
      switchMap((action) => clientIdWithData(this.store, action.payload)),
      switchMap((payload) =>
        this.paymentsService.createWithinCountryPayment(payload.data, payload.clientId).pipe(
          switchMap((response) =>
            this.paymentsService.getPayment(response.id, payload.clientId).pipe(
              map((payment) => PayFormsActions.createWithinCountrySuccess(payment)),
              catchError((error) => of(PayFormsActions.createWithinCountryFailure(error.error.Message)))
            )
          ),
          catchError((error) => of(PayFormsActions.createWithinCountryFailure(error.error.Message)))
        )
      )
    )
  );

  createMyAccounts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PayFormsActions.createMyAccountsRequest),
      switchMap((action) => clientIdWithData(this.store, action.payload)),
      switchMap((payload) =>
        this.paymentsService.createMyAccountsPayment(payload.data, payload.clientId).pipe(
          switchMap((response) =>
            this.paymentsService.getPayment(response.id, payload.clientId).pipe(
              map((payment) => PayFormsActions.createMyAccountsSuccess(payment)),
              catchError((error) => of(PayFormsActions.createMyAccountsFailure(error.error.Message)))
            )
          ),
          catchError((error) => of(PayFormsActions.createMyAccountsFailure(error.error.Message)))
        )
      )
    )
  );

  // loadPayment$ = createEffect(() =>
  //     this.actions$.pipe(
  //         ofType(WithinCountryActions.createSuccess),
  //         map(action => PayActions.loadPaymentRequest(action.payload))
  //     ));

  reloadPayment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        PayActions.signPaymentSuccess,
        PayActions.signPaymentFailure,
        PayActions.onSignPaymentSuccess,
        PayActions.onSignPaymentFailure,
        PayActions.toBankPaymentFailure,
        PayActions.toBankPaymentSuccess
      ),
      withLatestFrom(this.store.select(PayFormsSelectors.createdPayment)),
      map(([_, payment]) => PayActions.loadPaymentRequest(payment?.id as string))
    )
  );

  setPayment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        PayActions.loadPaymentSuccess,
        PayFormsActions.createWithinCountrySuccess,
        PayFormsActions.createMyAccountsSuccess
      ),
      map((action) => PayFormsActions.setCreatedPayment({ payment: action.payload }))
    )
  );

  toResult$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PayFormsActions.createWithinCountrySuccess, PayFormsActions.createMyAccountsSuccess),
      withLatestFrom(this.store.select(PayFormsSelectors.progress)),
      filter(([_, progress]) => progress !== 'result'),
      map((_) => PayFormsActions.setProgress({ progress: 'result' }))
    )
  );

  createSignAndToBank$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PayFormsActions.createSignAndToBank),
      switchMap((_) =>
        this.actions$
          .pipe(ofType(PayFormsActions.createWithinCountrySuccess, PayFormsActions.createMyAccountsSuccess))
          .pipe(take(1))
      ),
      tap((createResponse) => this.store.dispatch(PayActions.signPayment(createResponse.payload.id))),
      switchMap((_) => this.actions$.pipe(ofType(PayActions.signPaymentSuccess)).pipe(take(1))),
      map((saveResponse) => PayActions.toBankPayment(saveResponse.payload.id))
    )
  );

  loadAmountString$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PayFormsActions.loadAmountStringRequest),
      switchMap((action) => clientIdWithData(this.store, action.payload)),
      switchMap((payload) =>
        this.httpPaymentsService.getSumString(payload.data.amount, payload.data.currencyCode, payload.clientId).pipe(
          map((result) => PayFormsActions.loadAmountStringSuccess(result)),
          catchError((error) => of(PayFormsActions.loadAmountStringFailure(error.message)))
        )
      )
    )
  );

  searchSwiftBanks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PayFormsActions.searchSwiftBanks),
      switchMap((action) =>
        this.publicService.getSwiftBanks(action.bic).pipe(map((banks) => PayFormsActions.setSwiftBanks({ banks })))
      )
    )
  );
}
