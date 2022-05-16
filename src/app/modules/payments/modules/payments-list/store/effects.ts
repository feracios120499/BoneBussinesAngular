import { Injectable } from '@angular/core';
import { HttpPaymentsService } from '@modules/payments/services/payments-service/http-payments.service';
import { Actions, createEffect, EffectNotification, ofType, OnRunEffects } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { clientIdWithoudData } from '@store/shared';
import { Observable, of } from 'rxjs';
import { catchError, exhaustMap, map, switchMap, takeUntil, tap, withLatestFrom } from 'rxjs/operators';
import { PayListActions } from './actions';
import { PayListSelectors } from './selectors';

@Injectable()
export class PayListEffects implements OnRunEffects {
  constructor(private actions$: Actions, private store: Store, private paymentsService: HttpPaymentsService) {}

  loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PayListActions.setTab, PayListActions.setRange),
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

  ngrxOnRunEffects(resolvedEffects$: Observable<EffectNotification>): Observable<EffectNotification> {
    return this.actions$.pipe(
      ofType(PayListActions.init),
      tap((action) => console.log(action)),
      exhaustMap(() => resolvedEffects$.pipe(takeUntil(this.actions$.pipe(ofType(PayListActions.destroy)))))
    );
  }
}
