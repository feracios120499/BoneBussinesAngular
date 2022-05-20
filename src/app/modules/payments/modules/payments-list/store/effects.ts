import { Injectable } from '@angular/core';
import { ArrayNotification } from '@models/array-notification.model';
import { PaymentsResponseResult } from '@modules/payments/models/payments-response.model';
import { HttpPaymentsService } from '@modules/payments/services/payments-service/http-payments.service';
import { Actions, createEffect, EffectNotification, ofType, OnRunEffects } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { NotifyActions } from '@store/notify/actions';
import { clientIdWithData, clientIdWithoudData } from '@store/shared';
import { SharedActions } from '@store/shared/actions';
import { Observable, of } from 'rxjs';
import { catchError, exhaustMap, map, switchMap, takeUntil, tap, withLatestFrom } from 'rxjs/operators';
import { PayListActions } from './actions';
import { PayListSelectors } from './selectors';

@Injectable()
export class PayListEffects implements OnRunEffects {
  constructor(private actions$: Actions, private store: Store, private paymentsService: HttpPaymentsService) {}

  loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        PayListActions.setTab,
        PayListActions.setRange,
        PayListActions.deletePaymentsSuccess,
        PayListActions.deletePaymentsFailure,
        PayListActions.sendOnSignPaymentsSuccess,
        PayListActions.sendOnSignPaymentsFailure
      ),
      switchMap((_) => [PayListActions.loadCountRequest(), PayListActions.loadPaymentsRequest()])
    )
  );

  loadPayments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PayListActions.loadPaymentsRequest),
      switchMap((_) => clientIdWithoudData(this.store)),
      withLatestFrom(this.store.select(PayListSelectors.rangeWithStatus)),
      switchMap(([clientId, payload]) =>
        this.paymentsService.getPayments(payload.status, payload.range, clientId).pipe(
          map((payments) => PayListActions.loadPaymentsSuccess(payments)),
          catchError((error) => of(PayListActions.loadPaymentsFailure(error.message)))
        )
      )
    )
  );

  loadCount$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PayListActions.loadCountRequest),
      switchMap((_) => clientIdWithoudData(this.store)),
      switchMap((payload) =>
        this.paymentsService.getCount(payload).pipe(
          map((count) => PayListActions.loadCountSuccess(count)),
          catchError((error) => of(PayListActions.loadCountFailure(error.message)))
        )
      )
    )
  );

  printPayments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PayListActions.printPaymentsRequest),
      switchMap((action) => clientIdWithData(this.store, action.payload)),
      switchMap((payload) =>
        this.paymentsService.printPayments(payload.data, payload.clientId).pipe(
          map((file) => PayListActions.printPaymentsSuccess(file)),
          catchError((error) => of(PayListActions.printPaymentsFailure(error.message)))
        )
      )
    )
  );

  printPaymentsSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PayListActions.printPaymentsSuccess),
      map((file) => SharedActions.printFile({ html: file.payload }))
    )
  );

  deletePayments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PayListActions.deletePaymentsRequest),
      switchMap((action) => clientIdWithData(this.store, action.payload)),
      switchMap((payload) =>
        this.paymentsService.deletePayments(payload.data, payload.clientId).pipe(
          map((results) => PayListActions.deletePaymentsSuccess(results)),
          catchError((error) => of(PayListActions.deletePaymentsFailure(error.message)))
        )
      )
    )
  );

  sendOnSignPayments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PayListActions.sendOnSignPaymentsRequest),
      switchMap((action) => clientIdWithData(this.store, action.payload)),
      switchMap((payload) =>
        this.paymentsService.sendOnSign(payload.data, payload.clientId).pipe(
          map((results) => PayListActions.sendOnSignPaymentsSuccess(results)),
          catchError((error) => of(PayListActions.sendOnSignPaymentsFailure(error.message)))
        )
      )
    )
  );

  arraySuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PayListActions.deletePaymentsSuccess, PayListActions.sendOnSignPaymentsSuccess),
      map((action) => NotifyActions.arrayNotification({ results: this.mapResults(action.payload) }))
    )
  );

  private mapResults(results: PaymentsResponseResult[]): ArrayNotification[] {
    return results.map((result) => {
      const notify: ArrayNotification = {
        number: result.id,
        isSuccess: result.isSuccess,
        message: result.message,
      };
      return notify;
    });
  }

  ngrxOnRunEffects(resolvedEffects$: Observable<EffectNotification>): Observable<EffectNotification> {
    return this.actions$.pipe(
      ofType(PayListActions.init),
      tap((action) => console.log(action)),
      exhaustMap(() => resolvedEffects$.pipe(takeUntil(this.actions$.pipe(ofType(PayListActions.destroy)))))
    );
  }
}
