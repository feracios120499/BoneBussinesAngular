import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, exhaustMap, map, switchMap, takeUntil } from 'rxjs/operators';
import { Actions, createEffect, EffectNotification, ofType, OnRunEffects } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';

import { NotifyActions } from '@store/notify/actions';
import { clientIdWithoudData } from '@store/shared';
import { DepositsActions } from './actions';
import { DepositsService } from '../services/deposits-service/deposits.service';
import { Deposit } from '../models/deposit.model';
import { ServerError } from '@models/errors/server-error.model';
import { PaymentForm } from '@models/payment-form.model';
import { SharedActions } from '@store/shared/actions';
import { RouteActions } from '@store/route/actions';
import { PaymentAccount } from '@models/payment-account.model';

@Injectable()
export class DepositsEffects implements OnRunEffects {
  constructor(
    private actions$: Actions,
    private store: Store,
    private depositsService: DepositsService,
    private translateService: TranslateService
  ) {}

  loadDeposits$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DepositsActions.loadDepositsRequest),
      switchMap(() => clientIdWithoudData(this.store)),
      switchMap((clientId: string) =>
        this.depositsService.getDeposits(clientId).pipe(
          map((deposits: Deposit[]) => DepositsActions.loadDepositsSuccess(deposits)),
          catchError((error: ServerError) =>
            of(
              DepositsActions.loadDepositsFailure(error.message),
              NotifyActions.serverErrorNotification({
                error,
                message: this.translateService.instant('components.deposits.errors.loadDeposits'),
              })
            )
          )
        )
      )
    )
  );

  makeDepositPayment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DepositsActions.makeDepositPayment),
      switchMap(({ deposit }) => {
        const payment: Partial<PaymentForm> = this.mapToPayment(deposit);
        return [
          SharedActions.setCreatePartialPayment({ payment }),
          RouteActions.routeTo({ route: '/payments/create/within-country' }),
        ];
      })
    )
  );

  private mapToPayment(deposit: Deposit): Partial<PaymentForm> {
    const recipient = {
      taxCode: deposit.accToReplenish.taxCode,
      name: deposit.accToReplenish.name,
      accNumber: deposit.accToReplenish.accNumber,
    };
    return {
      amount: +deposit.minAddSum!,
      purpose: deposit.replenishDefaultPurpose || '',
      recipient: recipient as PaymentAccount,
    };
  }

  ngrxOnRunEffects(resolvedEffects$: Observable<EffectNotification>): Observable<EffectNotification> {
    return this.actions$.pipe(
      ofType(DepositsActions.init),
      exhaustMap(() => resolvedEffects$.pipe(takeUntil(this.actions$.pipe(ofType(DepositsActions.destroy)))))
    );
  }
}
