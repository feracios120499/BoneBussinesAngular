import { Injectable } from '@angular/core';
import { AcctService } from '@modules/accounts/services/acct-service/acct.service';
import { Actions, createEffect, EffectNotification, ofType, OnRunEffects } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { clientIdWithData } from '@store/shared';
import { Observable, of } from 'rxjs';
import { catchError, exhaustMap, map, switchMap, takeUntil, tap } from 'rxjs/operators';
import { PayIncomingActions } from './actions';

@Injectable({
  providedIn: 'root',
})
export class PayIncomingEffects implements OnRunEffects {
  constructor(private actions$: Actions, private store: Store, private acctService: AcctService) {}

  loadTransactions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PayIncomingActions.loadTransactionsRequest),
      switchMap((action) => clientIdWithData(this.store, action.payload)),
      switchMap((payload) =>
        this.acctService.getIncomingTransactions(payload.clientId, payload.data.start, payload.data.end).pipe(
          map((transactions) => PayIncomingActions.loadTransactionSuccess(transactions)),
          catchError((error) => of(PayIncomingActions.loadTransactionsFailure(error.message)))
        )
      )
    )
  );

  ngrxOnRunEffects(resolvedEffects$: Observable<EffectNotification>): Observable<EffectNotification> {
    return this.actions$.pipe(
      ofType(PayIncomingActions.init),
      exhaustMap(() => resolvedEffects$.pipe(takeUntil(this.actions$.pipe(ofType(PayIncomingActions.destroy)))))
    );
  }
}
